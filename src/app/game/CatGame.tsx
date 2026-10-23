import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import textContent from '../contents.json';
import { CatSprite, Game, isMoveKey } from './engine';

type Cat = typeof textContent.cards[number];

// Cats who have passed away sit this one out.
const livingCats = textContent.cards.filter(cat => !cat.deathdate);

function photoOf(cat: Cat): string | undefined {
    const photos = cat.images.filter(src => /\.(png|jpe?g|gif|webp|bmp)$/i.test(src));
    // Prefer photos hosted with the site over imgur links.
    return photos.find(src => src.startsWith('/')) ?? photos[0];
}

function loadSprite(cat: Cat): CatSprite {
    const src = photoOf(cat);
    let image: HTMLImageElement | null = null;
    if (src) {
        image = new Image();
        image.src = src;
    }
    return { name: cat.name, image, sounds: cat.sounds };
}

function highScoreKey(name: string): string {
    return `catGame.highScore.${name}`;
}

function readHighScore(name: string): number {
    try {
        return Number(localStorage.getItem(highScoreKey(name))) || 0;
    } catch {
        return 0;
    }
}

function writeHighScore(name: string, score: number) {
    try {
        localStorage.setItem(highScoreKey(name), String(score));
    } catch {
        // Private mode or blocked storage: the score just isn't remembered.
    }
}

/**
 * Pick a cat, then eat everything smaller than it until it's bigger than the screen.
 */
export default function CatGame() {
    const [cat, setCat] = React.useState<Cat | null>(null);
    const [result, setResult] = React.useState<{ score: number; best: number; isNewBest: boolean } | null>(null);
    // Bumped to remount the canvas for a fresh round with the same cat.
    const [round, setRound] = React.useState(0);

    if (!cat) {
        return <CatPicker onPick={picked => {
            setResult(null);
            setCat(picked);
        }}/>;
    }

    function handleWin(score: number) {
        if (!cat) return;
        const previous = readHighScore(cat.name);
        const isNewBest = score > previous;
        if (isNewBest) writeHighScore(cat.name, score);
        setResult({ score, best: Math.max(score, previous), isNewBest });
    }

    return (
        <Box sx={{ position: 'relative', flex: 1, minHeight: 0 }}>
            <GameCanvas key={round} cat={cat} onWin={handleWin}/>
            {result && (
                <Sheet
                    variant="outlined"
                    sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        p: 3, borderRadius: 'md', textAlign: 'center', width: 'min(360px, 90%)',
                    }}
                >
                    <Typography level="h3">{cat.name} ate everything!</Typography>
                    <Typography level="title-lg" sx={{ mt: 1 }}>Score {result.score}</Typography>
                    <Typography level="body-md">
                        {result.isNewBest ? 'New best!' : `Best ${result.best}`}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2, flexWrap: 'wrap' }}>
                        <Button onClick={() => {
                            setResult(null);
                            setRound(r => r + 1);
                        }}>Play again</Button>
                        <Button variant="soft" onClick={() => setCat(null)}>Pick another cat</Button>
                    </Box>
                </Sheet>
            )}
        </Box>
    );
}

function CatPicker(props: { onPick: (cat: Cat) => void }) {
    return (
        <Box sx={{ overflowY: 'auto', p: 1 }}>
            <Typography level="h3">Pick your cat</Typography>
            <Typography level="body-md" sx={{ mt: 1 }}>
                Eat anything smaller than you. Touching anything bigger shrinks you a level.
                Grow bigger than the screen to win.
            </Typography>
            <Typography level="body-sm" sx={{ mb: 2 }}>
                Steer with the mouse, your finger, or the arrow keys / WASD.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 1 }}>
                {livingCats.map(cat => {
                    const best = readHighScore(cat.name);
                    return (
                        <Button
                            key={cat.name}
                            variant="outlined"
                            color="neutral"
                            onClick={() => props.onPick(cat)}
                            sx={{ flexDirection: 'column', gap: 0.5, py: 1.5 }}
                        >
                            <Avatar src={photoOf(cat)} alt={cat.name} sx={{ '--Avatar-size': '64px' }}/>
                            {cat.name}
                            <Typography level="body-xs">{best ? `Best ${best}` : 'No score yet'}</Typography>
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
}

function GameCanvas(props: { cat: Cat; onWin: (score: number) => void }) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    // The loop is set up once per round, so read the latest callback through a ref.
    const onWinRef = React.useRef(props.onWin);
    onWinRef.current = props.onWin;
    const { cat } = props;

    React.useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!container || !canvas || !ctx) return;

        let audio: HTMLAudioElement | null = null;
        const playSound = (src: string) => {
            audio?.pause();
            audio = new Audio(src);
            audio.play().catch(() => undefined);
        };

        const rivals = livingCats.filter(other => other.name !== cat.name).map(loadSprite);
        const game = new Game(loadSprite(cat), rivals, container.clientWidth || 1, container.clientHeight || 1, {
            playSound,
            onWin: score => onWinRef.current(score),
        });

        const fitCanvas = () => {
            const width = container.clientWidth || 1;
            const height = container.clientHeight || 1;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            game.resize(width, height);
        };
        fitCanvas();
        const observer = new ResizeObserver(fitCanvas);
        observer.observe(container);

        const onKey = (e: KeyboardEvent) => {
            if (!isMoveKey(e.key)) return;
            e.preventDefault();
            const key = e.key.toLowerCase();
            if (e.type === 'keydown') game.keys.add(key);
            else game.keys.delete(key);
        };
        const onPointer = (e: PointerEvent) => {
            const rect = canvas.getBoundingClientRect();
            game.pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        window.addEventListener('keydown', onKey);
        window.addEventListener('keyup', onKey);
        canvas.addEventListener('pointermove', onPointer);
        canvas.addEventListener('pointerdown', onPointer);

        let frame = 0;
        let last = performance.now();
        const tick = (now: number) => {
            // Clamp so a backgrounded tab doesn't teleport everything on return.
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            game.update(dt);
            game.draw(ctx);
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('keyup', onKey);
            canvas.removeEventListener('pointermove', onPointer);
            canvas.removeEventListener('pointerdown', onPointer);
            audio?.pause();
        };
    }, [cat]);

    return (
        <Box ref={containerRef} sx={{ position: 'absolute', inset: 0, borderRadius: 'sm', overflow: 'hidden' }}>
            <canvas
                ref={canvasRef}
                style={{ display: 'block', width: '100%', height: '100%', touchAction: 'none', cursor: 'crosshair' }}
            />
        </Box>
    );
}
