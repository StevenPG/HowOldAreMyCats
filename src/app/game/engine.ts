/**
 * A Fishy-style game: your cat eats anything smaller than it and gets shrunk by anything bigger.
 * Kept as plain classes outside React so the 60fps loop never triggers a re-render.
 */

export interface CatSprite {
    name: string;
    image: HTMLImageElement | null;
    sounds: string[];
}

export interface Creature {
    x: number;
    y: number;
    r: number;
    vx: number;
    vy: number;
    emoji: string;
    // Set for the other cats, which only bump you around.
    rival: CatSprite | null;
    // A bigger creature only gets to shrink the player once per pass.
    hasHit: boolean;
    bumpCooldown: number;
    // Seconds into the "sucked into the cat" animation; null while still swimming.
    eatenFor: number | null;
}

export interface GameCallbacks {
    playSound: (src: string) => void;
    onWin: (score: number) => void;
}

export const LEVEL_COUNT = 12;
// The player starts at 1/SIZE_RANGE of the winning radius, whatever the screen size.
const SIZE_RANGE = 40;
const LEVEL_GROWTH = Math.pow(SIZE_RANGE, 1 / LEVEL_COUNT);
const GROWTH_PER_AREA = 0.3;
// No creature gets wider than this share of the short side of the screen, so there's always room to dodge.
const MAX_CREATURE_SHARE = 0.3;
const VICTORY_SECONDS = 5;
export const EAT_ANIMATION_SECONDS = 0.4;

// Ordered small to large; prey picks from here by size so it grows along with you.
const PREY = ['🐜', '🐞', '🦗', '🐛', '🦋', '🐌', '🐟', '🐭', '🐦', '🐠', '🐸', '🐀', '🐡', '🐇', '🦎',
    '🦆', '🐿️', '🦜', '🐢', '🦦', '🦩', '🐊', '🦭', '🐬', '🦈', '🐙', '🦑', '🐋', '🐳'];

const MOVE_KEYS: Record<string, [number, number]> = {
    arrowleft: [-1, 0], a: [-1, 0],
    arrowright: [1, 0], d: [1, 0],
    arrowup: [0, -1], w: [0, -1],
    arrowdown: [0, 1], s: [0, 1],
};

export function isMoveKey(key: string): boolean {
    return key.toLowerCase() in MOVE_KEYS;
}

export function wrap(value: number, max: number): number {
    return ((value % max) + max) % max;
}

/** Shortest signed distance from `from` to `to` on a wrapping axis of length `max`. */
export function wrappedDelta(from: number, to: number, max: number): number {
    const d = to - from;
    return d - max * Math.round(d / max);
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
}

function rand(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

function pick<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}

export class Game {
    width: number;
    height: number;
    player = { x: 0, y: 0, vx: 0, vy: 0, r: 0 };
    creatures: Creature[] = [];
    score = 0;
    phase: 'playing' | 'victory' | 'won' = 'playing';
    pointer: { x: number; y: number } | null = null;
    keys = new Set<string>();

    private spawnTimer = 0;
    private rivalTimer = rand(6, 12);
    private victoryTimer = 0;
    private clock = 0;

    constructor(private cat: CatSprite, private rivals: CatSprite[], width: number, height: number,
                private callbacks: GameCallbacks) {
        this.width = width;
        this.height = height;
        this.player.x = width / 2;
        this.player.y = height / 2;
        this.player.r = this.baseRadius;
    }

    /** Winning means your diameter covers the whole screen. */
    get winRadius(): number {
        return Math.max(this.width, this.height) / 2;
    }

    get baseRadius(): number {
        return this.winRadius / SIZE_RANGE;
    }

    get maxCreatureRadius(): number {
        return Math.min(this.width, this.height) * MAX_CREATURE_SHARE;
    }

    /** Once nothing on screen can be bigger than you, it's a sprint to the finish. */
    get isRunaway(): boolean {
        return this.player.r * 1.15 >= this.maxCreatureRadius;
    }

    /** Radius at the very start of a (1-based) level. */
    levelRadius(level: number): number {
        return this.baseRadius * Math.pow(LEVEL_GROWTH, level - 1);
    }

    get level(): number {
        // Epsilon so a radius set exactly to levelRadius(n) doesn't float down to n - 1.
        const level = Math.floor(Math.log(this.player.r / this.baseRadius) / Math.log(LEVEL_GROWTH) + 1e-9) + 1;
        return clamp(level, 1, LEVEL_COUNT);
    }

    /** 0..1 on a log scale from starting size to winning size. */
    get progress(): number {
        return clamp(Math.log(this.player.r / this.baseRadius) / Math.log(SIZE_RANGE), 0, 1);
    }

    resize(width: number, height: number) {
        const sx = width / this.width;
        const sy = height / this.height;
        const sr = Math.max(width, height) / Math.max(this.width, this.height);
        for (const body of [this.player, ...this.creatures]) {
            body.x *= sx;
            body.y *= sy;
            body.vx *= sx;
            body.vy *= sy;
            body.r *= sr;
        }
        this.width = width;
        this.height = height;
    }

    update(dt: number) {
        if (this.phase === 'won') return;
        this.clock += dt;
        this.movePlayer(dt);
        this.moveCreatures(dt);
        this.spawn(dt);
        this.collide();
        if (this.phase === 'victory') {
            this.victoryTimer -= dt;
            if (this.victoryTimer <= 0) {
                this.phase = 'won';
                this.callbacks.onWin(this.score);
            }
        }
    }

    private movePlayer(dt: number) {
        const p = this.player;
        const speed = Math.max(Math.min(this.width, this.height) * 0.5, p.r * 1.5);
        let kx = 0;
        let ky = 0;
        this.keys.forEach(key => {
            const dir = MOVE_KEYS[key];
            if (dir) {
                kx += dir[0];
                ky += dir[1];
            }
        });

        let tx = 0;
        let ty = 0;
        if (kx || ky) {
            const len = Math.hypot(kx, ky);
            tx = kx / len * speed;
            ty = ky / len * speed;
        } else if (this.pointer) {
            // Head straight for the pointer, slowing down on arrival so the cat doesn't jitter.
            const dx = this.pointer.x - p.x;
            const dy = this.pointer.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 1) {
                const s = Math.min(speed, dist * 8);
                tx = dx / dist * s;
                ty = dy / dist * s;
            }
        }

        const ease = Math.min(1, dt * 15);
        p.vx += (tx - p.vx) * ease;
        p.vy += (ty - p.vy) * ease;
        p.x = wrap(p.x + p.vx * dt, this.width);
        p.y = wrap(p.y + p.vy * dt, this.height);
    }

    private moveCreatures(dt: number) {
        for (const c of this.creatures) {
            if (c.eatenFor !== null) {
                c.eatenFor += dt;
                continue;
            }
            c.x += c.vx * dt;
            c.y = wrap(c.y + c.vy * dt, this.height);
            c.bumpCooldown = Math.max(0, c.bumpCooldown - dt);
        }
        this.creatures = this.creatures.filter(c =>
            c.eatenFor === null ? !this.isOffscreen(c) : c.eatenFor < EAT_ANIMATION_SECONDS);
    }

    private isOffscreen(c: Creature): boolean {
        return (c.vx > 0 && c.x - c.r > this.width) || (c.vx < 0 && c.x + c.r < 0);
    }

    private spawn(dt: number) {
        const victory = this.phase === 'victory';
        this.spawnTimer -= dt;
        const preyCount = this.creatures.filter(c => !c.rival).length;
        const runaway = this.isRunaway;
        if (this.spawnTimer <= 0 && preyCount < (victory ? 40 : runaway ? 20 : 14)) {
            this.spawnTimer = victory ? 0.08 : runaway ? rand(0.15, 0.35) : rand(0.35, 0.8);
            this.creatures.push(this.makePrey());
        }

        if (!victory && this.rivals.length) {
            this.rivalTimer -= dt;
            if (this.rivalTimer <= 0) {
                this.rivalTimer = rand(6, 12);
                if (!this.creatures.some(c => c.rival)) {
                    this.creatures.push(this.makeRival());
                }
            }
        }
    }

    private makeCreature(r: number, speed: number, emoji: string, rival: CatSprite | null): Creature {
        const fromLeft = Math.random() < 0.5;
        return {
            x: fromLeft ? -r : this.width + r,
            y: rand(0, this.height),
            r,
            vx: (fromLeft ? 1 : -1) * speed * this.width,
            vy: rand(-0.03, 0.03) * this.height,
            emoji,
            rival,
            hasHit: false,
            bumpCooldown: 0,
            eatenFor: null,
        };
    }

    private makePrey(): Creature {
        let r;
        if (this.phase === 'victory') {
            r = this.winRadius * rand(0.05, 0.6);
        } else {
            const p = this.player.r;
            const threat = !this.isRunaway && Math.random() < 0.3;
            r = threat ? p * rand(1.15, 1.5) : p * rand(0.3, 0.9);
            r = clamp(r, this.baseRadius * 0.5, this.maxCreatureRadius);
        }
        return this.makeCreature(r, rand(0.08, 0.2), this.emojiFor(r), null);
    }

    private makeRival(): Creature {
        const r = clamp(this.player.r * rand(0.8, 1.4), this.baseRadius, this.maxCreatureRadius);
        return this.makeCreature(r, rand(0.05, 0.1), '', pick(this.rivals));
    }

    private emojiFor(r: number): string {
        const min = this.baseRadius * 0.5;
        const t = Math.log(r / min) / Math.log(this.maxCreatureRadius / min);
        const index = Math.round(clamp(t, 0, 1) * (PREY.length - 1)) + Math.floor(rand(-1, 2));
        return PREY[clamp(index, 0, PREY.length - 1)];
    }

    collide() {
        const p = this.player;
        for (const c of this.creatures) {
            if (c.eatenFor !== null) continue;
            if (this.phase === 'victory') {
                // The reward: everything that shows up gets eaten, no contact needed.
                if (!c.rival) this.eat(c);
                continue;
            }
            // Wrap-aware so contact matches the copies of the player drawn across the edges.
            const dx = wrappedDelta(p.x, c.x, this.width);
            const dy = wrappedDelta(p.y, c.y, this.height);
            const dist = Math.hypot(dx, dy);
            if (dist > (p.r + c.r) * 0.8) continue;

            if (c.rival) this.bump(c, dx, dy, dist);
            else if (c.r < p.r) this.eat(c);
            else if (!c.hasHit) this.hitBy(c);
        }
    }

    private eat(c: Creature) {
        const p = this.player;
        const before = this.level;
        c.eatenFor = 0;
        p.r = Math.sqrt(p.r * p.r + GROWTH_PER_AREA * c.r * c.r);
        this.score += Math.max(1, Math.round(c.r / this.baseRadius * 10));
        if (this.phase !== 'playing') return;
        if (p.r >= this.winRadius) {
            this.phase = 'victory';
            this.victoryTimer = VICTORY_SECONDS;
            this.spawnTimer = 0;
            this.playCatSound();
        } else if (this.level > before) {
            this.playCatSound();
        }
    }

    private hitBy(c: Creature) {
        c.hasHit = true;
        const level = this.level;
        if (level > 1) {
            this.player.r = this.levelRadius(level - 1);
            this.playCatSound();
        }
    }

    private bump(c: Creature, dx: number, dy: number, dist: number) {
        if (c.bumpCooldown > 0 || !c.rival) return;
        c.bumpCooldown = 1;
        const p = this.player;
        const push = Math.max(Math.min(this.width, this.height) * 0.8, p.r * 3);
        const nx = dist > 0 ? -dx / dist : 1;
        const ny = dist > 0 ? -dy / dist : 0;
        p.vx = nx * push;
        p.vy = ny * push;
        if (c.rival.sounds.length) this.callbacks.playSound(pick(c.rival.sounds));
    }

    private playCatSound() {
        if (this.cat.sounds.length) this.callbacks.playSound(pick(this.cat.sounds));
    }

    draw(ctx: CanvasRenderingContext2D) {
        const { width: w, height: h, player: p } = this;
        const water = ctx.createLinearGradient(0, 0, 0, h);
        water.addColorStop(0, '#bde4f4');
        water.addColorStop(1, '#2f6f96');
        ctx.fillStyle = water;
        ctx.fillRect(0, 0, w, h);

        for (const c of this.creatures) this.drawCreature(ctx, c);
        this.drawWrapped(p.x, p.y, p.r, true, (x, y) => drawCat(ctx, this.cat, x, y, p.r));
        this.drawHud(ctx);
    }

    /** Calls `draw` for every on-screen copy of a body on the wrapping playfield. */
    private drawWrapped(x: number, y: number, r: number, wrapX: boolean, draw: (x: number, y: number) => void) {
        const { width: w, height: h } = this;
        for (const oy of [-h, 0, h]) {
            for (const ox of wrapX ? [-w, 0, w] : [0]) {
                const cx = x + ox;
                const cy = y + oy;
                if (cx + r < 0 || cx - r > w || cy + r < 0 || cy - r > h) continue;
                draw(cx, cy);
            }
        }
    }

    private drawCreature(ctx: CanvasRenderingContext2D, c: Creature) {
        let { x, y, r } = c;
        if (c.eatenFor !== null) {
            const t = Math.min(1, c.eatenFor / EAT_ANIMATION_SECONDS);
            x += wrappedDelta(c.x, this.player.x, this.width) * t;
            y += wrappedDelta(c.y, this.player.y, this.height) * t;
            r *= 1 - t;
        }
        if (r < 0.5) return;

        const rival = c.rival;
        this.drawWrapped(x, y, r, false, (cx, cy) => {
            if (rival) {
                drawCat(ctx, rival, cx, cy, r);
                return;
            }
            // Emoji shapes make size hard to judge, so show the actual body as a circle:
            // green is safe to eat, red will shrink you.
            if (c.eatenFor === null) {
                const edible = this.phase !== 'playing' || c.r < this.player.r;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fillStyle = edible ? 'rgba(80, 200, 120, 0.25)' : 'rgba(230, 70, 70, 0.3)';
                ctx.fill();
                ctx.lineWidth = Math.max(1.5, r * 0.06);
                ctx.strokeStyle = edible ? 'rgba(60, 170, 95, 0.9)' : 'rgba(210, 45, 45, 0.9)';
                ctx.stroke();
            }
            ctx.save();
            ctx.translate(cx, cy);
            // Emoji animals mostly face left, so mirror the ones swimming right.
            if (c.vx > 0) ctx.scale(-1, 1);
            ctx.font = `${r * 1.5}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(c.emoji, 0, 0);
            ctx.restore();
        });
    }

    private drawHud(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.font = 'bold 18px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillStyle = '#fff';
        const level = this.phase === 'playing' ? `Level ${this.level}/${LEVEL_COUNT}` : 'Level MAX';
        for (const [text, y] of [[`Score ${this.score}`, 14], [level, 38]] as const) {
            ctx.strokeText(text, 16, y);
            ctx.fillText(text, 16, y);
        }

        const barWidth = Math.min(180, this.width - 32);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.fillRect(16, 64, barWidth, 10);
        ctx.fillStyle = '#ffd166';
        ctx.fillRect(16, 64, barWidth * this.progress, 10);

        if (this.phase === 'victory') {
            const size = Math.min(this.width, this.height) * 0.12 * (1 + 0.06 * Math.sin(this.clock * 10));
            ctx.font = `900 ${size}px system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.lineWidth = size / 10;
            ctx.strokeText('UNSTOPPABLE!', this.width / 2, this.height / 2);
            ctx.fillText('UNSTOPPABLE!', this.width / 2, this.height / 2);
        }
        ctx.restore();
    }
}

/** A cat is its photo cropped to a circle, plus a pair of ears. */
function drawCat(ctx: CanvasRenderingContext2D, cat: CatSprite, x: number, y: number, r: number) {
    ctx.save();
    ctx.fillStyle = '#4a3b33';
    for (const side of [-1, 1]) {
        const top = -Math.PI / 2;
        const a1 = top + side * 0.3;
        const a2 = top + side * 1.0;
        const tip = top + side * 0.6;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(a1) * r * 0.9, y + Math.sin(a1) * r * 0.9);
        ctx.lineTo(x + Math.cos(tip) * r * 1.45, y + Math.sin(tip) * r * 1.45);
        ctx.lineTo(x + Math.cos(a2) * r * 0.9, y + Math.sin(a2) * r * 0.9);
        ctx.closePath();
        ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.save();
    ctx.clip();
    const img = cat.image;
    if (img && img.complete && img.naturalWidth > 0) {
        // Center-crop to a square so faces aren't squashed.
        const s = Math.min(img.naturalWidth, img.naturalHeight);
        ctx.drawImage(img, (img.naturalWidth - s) / 2, (img.naturalHeight - s) / 2, s, s, x - r, y - r, r * 2, r * 2);
    } else {
        ctx.fillStyle = '#f4a261';
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
        ctx.font = `${r * 1.3}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🐱', x, y);
    }
    ctx.restore();
    ctx.lineWidth = Math.max(2, r * 0.06);
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.restore();
}
