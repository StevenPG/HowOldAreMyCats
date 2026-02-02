# Asset Requirements

## Cat Character Assets

**Note:** Each cat requires its own set of sprites and sounds. Use the template below for each cat.

### Per-Cat Asset Template

For each cat in the roster, create:

| Asset | Dimensions | Frames | Format | Naming Convention |
|-------|------------|--------|--------|-------------------|
| Sprite sheet | | | PNG | `cat_[name]_spritesheet.png` |
| Portrait/Icon | | 1 | PNG | `cat_[name]_portrait.png` |
| Attack sound | - | - | MP3/OGG | `cat_[name]_attack.*` |
| Meow/Voice | - | - | MP3/OGG | `cat_[name]_meow.*` |
| Special ability sound | - | - | MP3/OGG | `cat_[name]_special.*` |

### Cat Roster Status

| Cat Name | Sprite Sheet | Portrait | Sounds | Status |
|----------|--------------|----------|--------|--------|
| | [ ] | [ ] | [ ] | |
| | [ ] | [ ] | [ ] | |
| | [ ] | [ ] | [ ] | |
| | [ ] | [ ] | [ ] | |
| | [ ] | [ ] | [ ] | |

### Sprite Sheet Contents (Per Cat)
| Animation | Frames | Row | Status |
|-----------|--------|-----|--------|
| Idle | | 0 | [ ] |
| Run | | 1 | [ ] |
| Jump | | 2 | [ ] |
| Fall | | 3 | [ ] |
| Land | | 4 | [ ] |
| Attack | | 5 | [ ] |
| Hurt | | 6 | [ ] |
| Death | | 7 | [ ] |
| Special Ability | | 8 | [ ] |

---

## Platforms

| Asset | Dimensions | Tiled? | Format | Status |
|-------|------------|--------|--------|--------|
| Ground tile | | Yes | PNG | [ ] |
| Floating platform | | | PNG | [ ] |
| Special platform | | | PNG | [ ] |

---

## Obstacles

| Asset | Dimensions | Animated? | Format | Status |
|-------|------------|-----------|--------|--------|
| | | | | [ ] |
| | | | | [ ] |

---

## Collectibles

| Asset | Dimensions | Frames | Format | Status |
|-------|------------|--------|--------|--------|
| | | | | [ ] |
| | | | | [ ] |

---

## Power-ups

| Asset | Dimensions | Frames | Format | Status |
|-------|------------|--------|--------|--------|
| | | | | [ ] |

---

## Backgrounds

| Layer | Dimensions | Tiled? | Format | Status |
|-------|------------|--------|--------|--------|
| Sky/Far | | Horizontal | PNG | [ ] |
| Middle layer | | Horizontal | PNG | [ ] |
| Near layer | | Horizontal | PNG | [ ] |

---

## UI Elements

| Asset | Dimensions | States | Format | Status |
|-------|------------|--------|--------|--------|
| Play button | | normal/hover/pressed | PNG | [ ] |
| Pause button | | | PNG | [ ] |
| Score display bg | | | PNG | [ ] |
| Game over panel | | | PNG | [ ] |
| Cat selector bar bg | | | PNG | [ ] |
| Cat selector highlight | | | PNG | [ ] |
| Swap button/indicator | | | PNG | [ ] |

---

## Audio

### Music

| Track | Duration | Loop? | Format | Status |
|-------|----------|-------|--------|--------|
| Menu music | | Yes | MP3/OGG | [ ] |
| Game music | | Yes | MP3/OGG | [ ] |
| Game over | | No | MP3/OGG | [ ] |

### Shared Sound Effects

| Sound | Format | Status |
|-------|--------|--------|
| Jump (default) | MP3/OGG | [ ] |
| Land | MP3/OGG | [ ] |
| Collect item | MP3/OGG | [ ] |
| Hit obstacle | MP3/OGG | [ ] |
| Game over | MP3/OGG | [ ] |
| Button click | MP3/OGG | [ ] |
| Cat swap whoosh | MP3/OGG | [ ] |

---

## Fonts

| Font | Usage | Format | Status |
|------|-------|--------|--------|
| | Score display | TTF/WOFF | [ ] |
| | Menu text | TTF/WOFF | [ ] |

---

## Particles/Effects

| Effect | Frames/Type | Format | Status |
|--------|-------------|--------|--------|
| Jump dust | | PNG | [ ] |
| Death effect | | PNG | [ ] |
| Collect sparkle | | PNG | [ ] |
| Cat swap effect | | PNG | [ ] |

---

## Asset Sources
<!-- Note where assets will come from -->
- **Custom made**:
- **Asset packs**:
- **Generated**:

---

## Technical Specifications

- **Sprite sheet format**: JSON Hash (Phaser compatible) or row-based
- **Standard frame size**: TBD (32x32, 64x64, etc.)
- **Portrait size**: TBD (for cat selector bar)
- **Audio formats**: Provide both MP3 and OGG for browser compatibility
- **Recommended tools**:
  - Aseprite (pixel art)
  - TexturePacker (sprite sheets)
  - Audacity (audio editing)
  - BFXR/SFXR (retro sound effects)
