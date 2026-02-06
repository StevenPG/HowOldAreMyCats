# Game Design Document

## Core Concept
A tribute game showcasing beloved cats (past and present). Players control a cat through an infinite scrolling platformer, with the unique ability to swap between different cats mid-gameplay. Each cat has its own personality reflected through unique sprites, abilities, animations, and sounds.

**Genre**: 2D Infinite Scrolling Platformer
**Theme**: Cat tribute/showcase
**Target Audience**: Cat lovers, casual gamers, site visitors
**Tone/Mood**: Fun, nostalgic, celebratory

---

## Gameplay Mechanics

### Core Actions
| Action | Description |
|--------|-------------|
| **Run** | Player-controlled horizontal movement (left/right) |
| **Jump** | Variable-height jump (hold for higher), single jump by default |
| **Attack** | Basic paw swipe attack, short range melee |
| **Swap Cat** | Cycle to next cat from the roster |
| **Special Ability** | Unique ability per cat (cooldown-based) |

### Player Movement
- **Horizontal**: Player-controlled (left/right input), camera follows player
- **Jump**: Single jump with variable height (hold jump key longer = higher). Some cats may have double jump as a special ability.
- **Attack**: Paw swipe animation, short range. Destroys breakable obstacles.

### Character Swap System
- **Trigger**: Q key (keyboard) / tap portrait (mobile)
- **Behavior**: Instant swap with brief particle effect (no freeze/pause)
- **Restrictions**: 0.5s cooldown between swaps. Mid-air swap allowed.
- **UI**: Cat selector bar at bottom of screen (see [CAT_ROSTER.md](./CAT_ROSTER.md))

### Controls
| Action | Keyboard | Mobile |
|--------|----------|--------|
| Jump | Space / W / Up Arrow | Tap right side of screen |
| Move Left | A / Left Arrow | Virtual D-pad (left) |
| Move Right | D / Right Arrow | Virtual D-pad (right) |
| Attack | J / Z | Attack button |
| Swap Cat | Q | Tap cat portrait |
| Special | K / X | Special button |
| Pause | Escape / P | Pause button |

### Scrolling Behavior
- **Direction**: Camera follows player horizontally, world scrolls in both directions
- **Speed**: Player-controlled (not auto-scroll). World generates platforms ahead of player.
- **Camera**: Follows player with slight lead in the direction of movement

---

## Game Elements

### Platforms
| Type | Behavior | Sprite Notes |
|------|----------|--------------|
| Ground | Static, solid | Grass/dirt tile, tileable |
| Floating | Static, one-way (pass through from below) | Wooden plank |
| Crumbling | Falls after 1s of standing on it | Cracks appear, then falls |
| Bouncy | Launches player extra high | Spring/trampoline visual |

### Obstacles
| Type | Behavior | Damage/Effect |
|------|----------|---------------|
| Spike | Static, ground-level | Instant death / 1 damage |
| Vacuum | Static, placed on platforms | 1 damage, knockback |
| Water spray | Periodic activation | 1 damage (cats hate water!) |

### Collectibles
| Item | Points | Effect |
|------|--------|--------|
| Treat | 10 | Basic score pickup |
| Catnip | 50 | Bonus score, brief speed boost |
| Toy mouse | 100 | Rare, high value |

### Power-ups
| Power-up | Duration | Effect |
|----------|----------|--------|
| Churu tube | 5s | Invincibility |
| Cardboard box | 3s | Shield (absorb 1 hit) |

---

## Scoring System
- **Base Score**: 1 point per pixel traveled to the right
- **Collectible Bonus**: Treats (10), Catnip (50), Toy mouse (100)
- **Distance Bonus**: Milestone bonuses at 1000, 5000, 10000 distance
- **Combo System**: Collecting items within 2s of each other increases multiplier (2x, 3x, max 5x)
- **Cat-specific bonuses?**: Deferred to later phase

---

## Difficulty Progression
- **How does difficulty increase?**: Platform gaps widen, obstacles more frequent, crumbling platforms appear
- **Speed curve**: N/A (player-controlled speed), but platform generation gets harder
- **Platform density**: Decreases over distance (more gaps)
- **Obstacle frequency**: Increases logarithmically with distance traveled

---

## Visual Style
- **Art Style**: Pixel art (AI-generated, 32x32 base frame size)
- **Color Palette**: Warm, cozy tones. Each cat retains real-life coloring.
- **Animation Style**: 2-frame idle, 4-frame run, snappy jumps
- **Cat Portraits**: 48x48 pixel art portraits for selector bar

---

## Audio
- **Music Style**:
- **Sound Effects Needed**:
  - [ ] Jump (per cat?)
  - [ ] Land
  - [ ] Attack (per cat?)
  - [ ] Collect item
  - [ ] Hit obstacle
  - [ ] Game over
  - [ ] Menu sounds
  - [ ] Cat swap sound
  - [ ] Cat-specific meows/sounds

---

## UI/UX

### Start Screen
- Game title
- Play button
- Cat roster preview?
- High score display
- Settings/mute button

### In-Game HUD
```
┌────────────────────────────────────────────────────────┐
│ Score: 12450                              [⏸] [🔊]    │
│                                                        │
│                    GAME AREA                           │
│                                                        │
│                                                        │
├────────────────────────────────────────────────────────┤
│  [🐱]  [🐱]  [*🐱*]  [🐱]  [🐱]     [Swap: Q]         │
│               ▲ current                                │
└────────────────────────────────────────────────────────┘
```

- Current score (top)
- Pause button
- Mute button
- **Cat Selector Bar** (bottom)
  - All available cats as icons/portraits
  - Current cat highlighted
  - Swap button/key indicator

### Game Over Screen
- Final score
- High score
- Distance traveled
- Current cat displayed
- Play again button
- Return to main site

---

## References & Inspiration
<!-- Link to or describe games that inspire this project -->
- Jetpack Joyride (infinite scrolling, simple mechanics)
- Flappy Bird (one-touch gameplay)
- Super Mario Run (auto-runner with depth)
- Alto's Adventure (beautiful endless runner)
-
