import { Creature, Game, LEVEL_COUNT, wrap, wrappedDelta } from './engine';

const cat = { name: 'Tester', image: null, sounds: [] };

function newGame(callbacks = { playSound: jest.fn(), onWin: jest.fn() }) {
    return new Game(cat, [], 800, 600, callbacks);
}

function creatureAtPlayer(game: Game, r: number, extra: Partial<Creature> = {}): Creature {
    const c: Creature = {
        x: game.player.x, y: game.player.y, r, vx: 100, vy: 0, emoji: '🐟',
        rival: null, hasHit: false, bumpCooldown: 0, eatenFor: null, ...extra,
    };
    game.creatures.push(c);
    return c;
}

test('wrap and wrappedDelta treat the edges as connected', () => {
    expect(wrap(-10, 800)).toBe(790);
    expect(wrap(810, 800)).toBe(10);
    expect(wrappedDelta(790, 10, 800)).toBe(20);
    expect(wrappedDelta(10, 790, 800)).toBe(-20);
});

test('eating something smaller grows the player and scores', () => {
    const game = newGame();
    const before = game.player.r;
    const prey = creatureAtPlayer(game, before * 0.5);
    game.collide();
    expect(prey.eatenFor).toBe(0);
    expect(game.player.r).toBeGreaterThan(before);
    expect(game.score).toBeGreaterThan(0);
});

test('touching something bigger shrinks the player one level, once', () => {
    const game = newGame();
    game.player.r = game.levelRadius(5) * 1.1;
    expect(game.level).toBe(5);
    const big = creatureAtPlayer(game, game.player.r * 1.5);
    game.collide();
    expect(game.level).toBe(4);
    expect(big.hasHit).toBe(true);
    game.collide();
    expect(game.level).toBe(4);
});

test('touching something bigger at level 1 does nothing', () => {
    const game = newGame();
    const r = game.player.r;
    creatureAtPlayer(game, r * 2);
    game.collide();
    expect(game.level).toBe(1);
    expect(game.player.r).toBe(r);
});

test('rival cats bump the player instead of being eaten or shrinking it', () => {
    const game = newGame();
    game.player.r = game.levelRadius(3);
    const rival = creatureAtPlayer(game, game.player.r * 0.5, { rival: cat, x: game.player.x + 1 });
    game.collide();
    expect(rival.eatenFor).toBeNull();
    expect(game.level).toBe(3);
    expect(game.player.vx).toBeLessThan(0);
});

test('growing past the screen starts the auto-eat victory, then wins', () => {
    const onWin = jest.fn();
    const game = newGame({ playSound: jest.fn(), onWin });
    game.player.r = game.winRadius * 0.99;
    creatureAtPlayer(game, game.player.r * 0.5);
    game.collide();
    expect(game.phase).toBe('victory');
    expect(game.level).toBe(LEVEL_COUNT);

    const faraway = creatureAtPlayer(game, 10, { x: 0, y: 0 });
    game.collide();
    expect(faraway.eatenFor).toBe(0);

    for (let i = 0; i < 200 && game.phase !== 'won'; i++) game.update(0.05);
    expect(game.phase).toBe('won');
    expect(onWin).toHaveBeenCalledWith(game.score);
});
