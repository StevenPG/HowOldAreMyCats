# Technical Architecture

## Overview
```
React App
├── TopBar (add Play button)
├── Main Content (existing cat cards)
└── /play route
    └── GameContainer (React component)
        └── Phaser Game Instance
            ├── BootScene (load all cat assets)
            ├── MenuScene (start screen, cat preview)
            ├── GameScene (main gameplay + cat selector UI)
            └── GameOverScene (end screen)
```

---

## File Structure
```
src/
├── game/
│   ├── index.ts                 # Game initialization & config
│   ├── scenes/
│   │   ├── BootScene.ts         # Asset loading for all cats
│   │   ├── MenuScene.ts         # Start screen
│   │   ├── GameScene.ts         # Main gameplay
│   │   └── GameOverScene.ts     # End screen
│   ├── entities/
│   │   ├── Player.ts            # Base player class
│   │   ├── Cat.ts               # Cat character (uses config)
│   │   ├── Platform.ts          # Platform class
│   │   ├── Obstacle.ts          # Obstacle class
│   │   └── Collectible.ts       # Collectible class
│   ├── systems/
│   │   ├── CatManager.ts        # Character swap system
│   │   ├── CatRegistry.ts       # Cat configurations
│   │   ├── PlatformSpawner.ts
│   │   ├── ObstacleSpawner.ts
│   │   ├── ScoreManager.ts
│   │   └── DifficultyManager.ts
│   ├── ui/
│   │   ├── CatSelectorBar.ts    # Bottom cat selector UI
│   │   ├── HUD.ts               # Score, pause button
│   │   └── GameOverPanel.ts
│   ├── config/
│   │   └── cats.ts              # Cat roster configuration
│   └── utils/
│       ├── constants.ts         # Game constants
│       └── types.ts             # TypeScript interfaces
├── components/
│   └── GameContainer.tsx        # React wrapper for Phaser
└── pages/
    └── PlayPage.tsx             # /play route component
```

---

## Cat Configuration System

### Cat Registry (cats.ts)
```typescript
import { CatConfig } from '../utils/types';

export const CAT_ROSTER: CatConfig[] = [
  {
    id: 'whiskers',
    name: 'Whiskers',
    description: 'A speedy orange tabby',
    spriteSheet: 'cat_whiskers_spritesheet',
    portrait: 'cat_whiskers_portrait',
    frameWidth: 32,
    frameHeight: 32,
    animations: {
      idle: { start: 0, end: 3, frameRate: 6 },
      run: { start: 4, end: 9, frameRate: 12 },
      jump: { start: 10, end: 12, frameRate: 8 },
      fall: { start: 13, end: 14, frameRate: 6 },
      attack: { start: 15, end: 18, frameRate: 12 },
      // ...
    },
    sounds: {
      attack: 'cat_whiskers_attack',
      meow: 'cat_whiskers_meow',
    },
    abilities: [
      {
        id: 'dash',
        name: 'Quick Dash',
        key: 'SHIFT',
        cooldown: 3,
        // ...
      }
    ],
    physics: {
      speed: 1.2,  // 20% faster than default
    },
    memorial: false,
  },
  // ... more cats
];
```

### Types (types.ts)
```typescript
export interface CatConfig {
  id: string;
  name: string;
  description: string;
  spriteSheet: string;
  portrait: string;
  frameWidth: number;
  frameHeight: number;
  animations: Record<string, AnimConfig>;
  sounds: Record<string, string>;
  abilities: CatAbility[];
  physics?: Partial<CatPhysics>;
  memorial?: boolean;
}

export interface AnimConfig {
  start: number;
  end: number;
  frameRate: number;
  repeat?: number;
}

export interface CatAbility {
  id: string;
  name: string;
  description?: string;
  key: string;
  cooldown: number;
  animation?: string;
  sound?: string;
}

export interface CatPhysics {
  speed: number;
  jumpForce: number;
  gravity: number;
}
```

---

## Cat Manager System

```typescript
// CatManager.ts
class CatManager {
  private scene: Phaser.Scene;
  private currentCatIndex: number = 0;
  private currentCat: Cat | null = null;
  private selectorBar: CatSelectorBar;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.selectorBar = new CatSelectorBar(scene);
  }

  // Initialize with first cat
  init(): void {
    this.spawnCat(0);
    this.selectorBar.setActive(0);
  }

  // Swap to next cat in roster
  swapNext(): void {
    const nextIndex = (this.currentCatIndex + 1) % CAT_ROSTER.length;
    this.swapTo(nextIndex);
  }

  // Swap to specific cat
  swapTo(index: number): void {
    if (index === this.currentCatIndex) return;

    // Store current position/velocity
    const pos = this.currentCat?.getPosition();
    const vel = this.currentCat?.getVelocity();

    // Remove current cat
    this.currentCat?.destroy();

    // Spawn new cat at same position
    this.spawnCat(index, pos, vel);
    this.selectorBar.setActive(index);

    // Play swap effect/sound
    this.scene.sound.play('swap_whoosh');
  }

  private spawnCat(index: number, pos?: Vec2, vel?: Vec2): void {
    const config = CAT_ROSTER[index];
    this.currentCat = new Cat(this.scene, config, pos, vel);
    this.currentCatIndex = index;
  }

  getCurrentCat(): Cat {
    return this.currentCat!;
  }
}
```

---

## Cat Selector Bar UI

```typescript
// CatSelectorBar.ts
class CatSelectorBar extends Phaser.GameObjects.Container {
  private portraits: Phaser.GameObjects.Image[] = [];
  private highlight: Phaser.GameObjects.Image;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, scene.scale.height - 60);

    // Create portrait for each cat
    CAT_ROSTER.forEach((cat, i) => {
      const portrait = scene.add.image(
        i * 50 + 40,
        0,
        cat.portrait
      );
      portrait.setInteractive();
      portrait.on('pointerdown', () => this.onSelect(i));
      this.portraits.push(portrait);
      this.add(portrait);
    });

    // Highlight for current cat
    this.highlight = scene.add.image(40, 0, 'selector_highlight');
    this.add(this.highlight);

    scene.add.existing(this);
  }

  setActive(index: number): void {
    this.highlight.setX(index * 50 + 40);

    // Visual feedback
    this.portraits.forEach((p, i) => {
      p.setAlpha(i === index ? 1 : 0.6);
      p.setScale(i === index ? 1.1 : 1);
    });
  }

  private onSelect(index: number): void {
    this.emit('cat-selected', index);
  }
}
```

---

## Phaser Configuration

```typescript
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  scene: [BootScene, MenuScene, GameScene, GameOverScene]
};
```

---

## React-Phaser Integration

### Approach Options
1. **Direct DOM manipulation**: Create Phaser instance in useEffect, attach to div
2. **Library**: Use `phaser-react-ui` or similar wrapper
3. **iframe**: Isolate game (not recommended)

### Recommended Pattern
```tsx
const GameContainer: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current?.destroy(true);
    };
  }, []);

  return <div id="game-container" />;
};
```

---

## State Management

### Game State (Phaser internal)
- Current score
- Current cat index
- Player position/state
- Active entities
- Difficulty level

### Persistent State (localStorage)
- High score
- Settings (sound on/off)
- Last selected cat (optional)

### React Communication (if needed)
- Custom events for score updates
- Callback props for game over

---

## Asset Loading Strategy

### BootScene
```typescript
preload() {
  // Load all cat assets
  CAT_ROSTER.forEach(cat => {
    this.load.spritesheet(cat.spriteSheet, `assets/cats/${cat.id}/spritesheet.png`, {
      frameWidth: cat.frameWidth,
      frameHeight: cat.frameHeight
    });
    this.load.image(cat.portrait, `assets/cats/${cat.id}/portrait.png`);

    // Load cat sounds
    Object.entries(cat.sounds).forEach(([key, file]) => {
      this.load.audio(file, [`assets/cats/${cat.id}/${key}.mp3`, `assets/cats/${cat.id}/${key}.ogg`]);
    });
  });

  // Load shared assets...
}
```

---

## Performance Considerations
- Object pooling for platforms/obstacles
- Off-screen cleanup
- Texture atlases for sprites
- Limit particle effects on mobile
- Preload all cat assets in BootScene (vs. lazy loading)

---

## Dependencies to Add
```json
{
  "phaser": "^3.80.0"
}
```

---

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (touch support)

---

## Code Quality

All code must follow [CODE_STANDARDS.md](./CODE_STANDARDS.md):
- Descriptive naming (functions, variables, classes)
- Comments explaining "why" for complex logic
- JSDoc on all public methods
- Unit tests for core systems (CatManager, ScoreManager, spawners)
- No magic numbers; use named constants

---

## Notes
