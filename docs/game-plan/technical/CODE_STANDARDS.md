# Code Standards & Quality Guidelines

## Overview
This document defines the code quality expectations for the cat platformer game. The goal is to produce maintainable, readable code that any developer can understand and extend.

---

## General Principles

1. **Clarity over cleverness** - Write code that is easy to understand, not code that shows off
2. **Self-documenting code** - Use descriptive names so the code explains itself
3. **Comment the "why"** - Code shows what happens; comments explain why
4. **Single responsibility** - Each function/class does one thing well
5. **Consistent patterns** - Follow established patterns throughout the codebase

---

## Naming Conventions

### Files
```
PascalCase for classes:     Player.ts, CatManager.ts, GameScene.ts
camelCase for utilities:    constants.ts, helpers.ts, types.ts
kebab-case for assets:      cat-whiskers-spritesheet.png
```

### Variables & Functions
```typescript
// Variables: camelCase, descriptive nouns
const playerVelocity = 200;
const currentCatIndex = 0;
const isJumping = false;

// Functions: camelCase, verb + noun, describes action
function calculateJumpForce(gravityScale: number): number { }
function spawnPlatformAtPosition(x: number, y: number): Platform { }
function handlePlayerCollision(player: Player, obstacle: Obstacle): void { }

// Boolean functions: is/has/can/should prefix
function isPlayerGrounded(): boolean { }
function hasAbilityCooldownExpired(): boolean { }
function canSwapCharacter(): boolean { }
```

### Classes
```typescript
// PascalCase, noun, singular
class Player { }
class CatManager { }
class PlatformSpawner { }

// Interfaces: PascalCase, often with 'I' prefix or descriptive suffix
interface CatConfig { }
interface ICollidable { }
interface AnimationSettings { }
```

### Constants
```typescript
// SCREAMING_SNAKE_CASE for true constants
const MAX_JUMP_VELOCITY = 500;
const DEFAULT_GRAVITY = 800;
const SWAP_COOLDOWN_MS = 500;

// Group related constants in objects
const PHYSICS = {
  GRAVITY: 800,
  MAX_VELOCITY_X: 300,
  MAX_VELOCITY_Y: 600,
  JUMP_FORCE: -400,
} as const;
```

---

## Code Comments

### When to Comment

**DO comment:**
- Complex algorithms or non-obvious logic
- Business rules and game design decisions
- Workarounds and their reasons
- Public API methods (JSDoc)
- Magic numbers that can't be made into named constants

**DON'T comment:**
- Obvious code (`i++ // increment i`)
- Code that should be refactored to be clearer
- Commented-out code (delete it; use git history)

### Comment Styles

```typescript
/**
 * JSDoc for public methods and classes.
 * Describes what it does, parameters, and return value.
 *
 * @param catIndex - Index of the cat in the roster to swap to
 * @returns The newly spawned Cat instance
 * @throws Error if catIndex is out of bounds
 */
public swapToCat(catIndex: number): Cat {
  // ...
}

// Single-line comment for brief explanations
const jumpForce = -400; // Negative because Phaser Y-axis points down

/*
 * Multi-line block comment for longer explanations.
 * Use when you need to explain complex logic or
 * document a non-obvious design decision.
 */

// TODO: Implement power-up system
// FIXME: Collision detection fails at high speeds
// HACK: Workaround for Phaser bug #1234 - remove when fixed
```

### Example: Well-Commented Complex Code

```typescript
/**
 * Generates the next platform position using procedural rules.
 *
 * The algorithm ensures platforms are:
 * 1. Reachable from the previous platform (within jump distance)
 * 2. Not overlapping with existing platforms
 * 3. Progressively more challenging as distance increases
 */
private generateNextPlatformPosition(): Vector2 {
  const lastPlatform = this.platforms[this.platforms.length - 1];

  // Calculate horizontal gap based on current difficulty
  // Gap increases logarithmically to prevent impossible jumps
  const baseGap = 150;
  const difficultyMultiplier = Math.log10(this.distanceTraveled + 10);
  const horizontalGap = baseGap + (50 * difficultyMultiplier);

  // Vertical offset is randomized but clamped to jumpable range
  // Player can jump ~200px high, so we limit to ±150px
  const maxVerticalOffset = 150;
  const verticalOffset = Phaser.Math.Between(-maxVerticalOffset, maxVerticalOffset);

  // Clamp to world bounds to prevent platforms spawning off-screen
  const newY = Phaser.Math.Clamp(
    lastPlatform.y + verticalOffset,
    this.minPlatformY,
    this.maxPlatformY
  );

  return new Vector2(lastPlatform.x + horizontalGap, newY);
}
```

---

## Function Design

### Size & Complexity
- **Target**: Functions should be < 30 lines
- **Maximum**: If > 50 lines, strongly consider refactoring
- **Cyclomatic complexity**: Aim for < 10 (few nested conditionals)

### Parameters
- **Maximum**: 3-4 parameters; use an options object for more
- **Order**: Required params first, optional last

```typescript
// Bad: too many parameters, unclear order
function createCat(x, y, name, speed, jumpForce, sprites, sounds, abilities) { }

// Good: use a config object
function createCat(position: Vector2, config: CatConfig): Cat { }
```

### Return Values
- Return early for guard clauses
- Avoid returning null when possible; use undefined or throw

```typescript
// Good: early returns make logic clear
function findCatById(id: string): CatConfig | undefined {
  if (!id) return undefined;

  const cat = CAT_ROSTER.find(c => c.id === id);
  if (!cat) return undefined;

  return cat;
}
```

---

## Class Design

### Structure Order
```typescript
class Player extends Phaser.Physics.Arcade.Sprite {
  // 1. Static properties/methods
  static readonly MAX_HEALTH = 3;

  // 2. Public properties
  public score: number = 0;

  // 3. Protected properties
  protected health: number;

  // 4. Private properties
  private velocityX: number;
  private isJumping: boolean;

  // 5. Constructor
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    this.health = Player.MAX_HEALTH;
  }

  // 6. Public methods
  public jump(): void { }
  public takeDamage(amount: number): void { }

  // 7. Protected methods
  protected onDeath(): void { }

  // 8. Private methods
  private updateAnimation(): void { }
  private checkGrounded(): boolean { }
}
```

### Single Responsibility
Each class should have one reason to change.

```typescript
// Bad: Player handles movement, rendering, scoring, and sounds
class Player {
  move() { }
  render() { }
  addScore() { }
  playSound() { }
}

// Good: separate concerns
class Player { move() { } jump() { } }
class ScoreManager { addScore() { } getScore() { } }
class AudioManager { playSound() { } }
```

---

## Error Handling

```typescript
// Validate inputs at system boundaries
public swapToCat(index: number): void {
  if (index < 0 || index >= CAT_ROSTER.length) {
    console.error(`Invalid cat index: ${index}. Valid range: 0-${CAT_ROSTER.length - 1}`);
    return;
  }
  // ... proceed with swap
}

// Use descriptive error messages
throw new Error(
  `Failed to load sprite sheet for cat "${catConfig.id}". ` +
  `Expected file at: assets/cats/${catConfig.id}/spritesheet.png`
);
```

---

## Unit Testing

### What to Test
- **Must test**: Core game logic, calculations, state management
- **Should test**: Entity behaviors, spawning systems, collision responses
- **Optional**: UI components, Phaser-specific rendering

### Test File Structure
```
src/
├── game/
│   ├── systems/
│   │   ├── CatManager.ts
│   │   ├── CatManager.test.ts      # Co-located test file
│   │   ├── ScoreManager.ts
│   │   └── ScoreManager.test.ts
```

### Test Naming
```typescript
describe('CatManager', () => {
  describe('swapToCat', () => {
    it('should swap to the specified cat and preserve position', () => { });
    it('should emit cat-swapped event with old and new cat IDs', () => { });
    it('should not swap if index is out of bounds', () => { });
    it('should not swap if currently on cooldown', () => { });
  });

  describe('getCurrentCat', () => {
    it('should return the currently active cat', () => { });
    it('should return null before initialization', () => { });
  });
});
```

### Example Test
```typescript
import { ScoreManager } from './ScoreManager';

describe('ScoreManager', () => {
  let scoreManager: ScoreManager;

  beforeEach(() => {
    scoreManager = new ScoreManager();
  });

  describe('addPoints', () => {
    it('should add points to the current score', () => {
      scoreManager.addPoints(100);
      expect(scoreManager.getScore()).toBe(100);

      scoreManager.addPoints(50);
      expect(scoreManager.getScore()).toBe(150);
    });

    it('should apply multiplier when provided', () => {
      scoreManager.addPoints(100, 2);
      expect(scoreManager.getScore()).toBe(200);
    });

    it('should not allow negative points', () => {
      scoreManager.addPoints(-50);
      expect(scoreManager.getScore()).toBe(0);
    });
  });

  describe('reset', () => {
    it('should reset score to zero', () => {
      scoreManager.addPoints(500);
      scoreManager.reset();
      expect(scoreManager.getScore()).toBe(0);
    });
  });
});
```

### Testing Phaser Code
For Phaser-specific code, consider:
- Mocking Phaser objects for unit tests
- Integration tests using Phaser's headless mode
- Manual testing for visual/timing-sensitive features

```typescript
// Mock Phaser scene for unit testing
const mockScene = {
  add: { image: jest.fn(), text: jest.fn() },
  sound: { play: jest.fn() },
  time: { delayedCall: jest.fn() },
} as unknown as Phaser.Scene;

const catManager = new CatManager(mockScene);
```

---

## Code Review Checklist

Before submitting code, verify:

- [ ] Functions have descriptive names that explain what they do
- [ ] Complex logic is commented with explanations
- [ ] No magic numbers (use named constants)
- [ ] No duplicate code (DRY principle)
- [ ] Error cases are handled gracefully
- [ ] Public APIs have JSDoc comments
- [ ] Unit tests cover core logic
- [ ] Code follows established patterns in the codebase

---

## IDE Configuration

### Recommended Extensions (VS Code)
- ESLint
- Prettier
- TypeScript Hero (auto-imports)

### ESLint Rules (suggested)
```json
{
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "prefer-const": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

---

## Documentation

### README Updates
When adding major features, update relevant documentation:
- Add new configuration options to docs
- Update architecture diagrams if structure changes
- Add examples for new public APIs

### Inline Documentation
Keep comments up-to-date when changing code. Outdated comments are worse than no comments.
