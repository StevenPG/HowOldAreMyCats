# Asset Requirements

## Cat Character Assets

**Note:** Each cat requires its own set of sprites and sounds. Use the template below for each cat.

### Per-Cat Asset Template

For each cat in the roster, create:

| Asset | Dimensions | Frames | Format | Naming Convention |
|-------|------------|--------|--------|-------------------|
| Sprite sheet | 256x288 (8 cols x 9 rows of 32x32) | varies per anim | PNG | `cat_[name]_spritesheet.png` |
| Portrait/Icon | 48x48 | 1 | PNG | `cat_[name]_portrait.png` |
| Attack sound | - | - | MP3/OGG | `cat_[name]_attack.*` |
| Meow/Voice | - | - | MP3/OGG | `cat_[name]_meow.*` |
| Special ability sound | - | - | MP3/OGG | `cat_[name]_special.*` |

### v1 Cat Roster Status

| Cat Name | Sprite Sheet | Portrait | Sounds | Status |
|----------|--------------|----------|--------|--------|
| Milky Moo | [ ] | [ ] | [x] MilkChirp.mp3 | v1 starter |
| Bitty | [ ] | [ ] | [x] BittyPurring.mp3 | v1 starter |
| Bones | [ ] | [ ] | [x] BonesCrying.mp3 | v1 starter |

### Sprite Sheet Contents (Per Cat)
| Animation | Frames | Row | Status |
|-----------|--------|-----|--------|
| Idle | 2-4 | 0 | [ ] |
| Run | 4-6 | 1 | [ ] |
| Jump | 2-3 | 2 | [ ] |
| Fall | 2 | 3 | [ ] |
| Land | 2 | 4 | [ ] |
| Attack | 3-4 | 5 | [ ] |
| Hurt | 2 | 6 | [ ] |
| Death | 4 | 7 | [ ] |
| Special Ability | 3-4 | 8 | [ ] |

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
- **Custom made**: Cat-specific sounds (already exist in `/sounds/` directory)
- **Asset packs**: Platform tiles, UI elements (explore itch.io free packs)
- **Generated**: Cat sprite sheets and portraits via AI pixel art generation
- **SFX**: BFXR/SFXR for jump, land, collect, hit, game over sounds

---

## Technical Specifications

- **Sprite sheet format**: Row-based (one animation per row, consistent frame width)
- **Standard frame size**: 32x32 pixels
- **Portrait size**: 48x48 pixels (for cat selector bar)
- **Audio formats**: MP3 primary (all target browsers support it). OGG as fallback.
- **Recommended tools**:
  - AI image generation for cat sprites (then manual cleanup if needed)
  - Aseprite (pixel art touch-ups)
  - TexturePacker (sprite sheet assembly)
  - Audacity (audio editing)
  - BFXR/SFXR (retro sound effects)
