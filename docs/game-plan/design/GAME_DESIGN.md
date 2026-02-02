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
| **Run** | Horizontal movement (or auto-scroll?) |
| **Jump** | Vertical movement to reach platforms, avoid obstacles |
| **Attack** | Basic attack to hit obstacles/enemies |
| **Swap Cat** | Switch to a different cat from the roster |
| **Special Ability** | Unique ability per cat |

### Player Movement
- **Horizontal**: Auto-scroll or player-controlled?
- **Jump**: Single jump? Double jump? Variable height?
- **Attack**: Swipe/paw animation, short range

### Character Swap System
- **Trigger**: Button press (keyboard key / on-screen button)
- **Behavior**: Instant swap or brief transition animation?
- **Restrictions**: Cooldown? Mid-air allowed?
- **UI**: Cat selector bar at bottom of screen (see [CAT_ROSTER.md](./CAT_ROSTER.md))

### Controls
| Action | Keyboard | Mobile |
|--------|----------|--------|
| Jump | | |
| Move Left | | |
| Move Right | | |
| Attack | | |
| Swap Cat | | |
| Pause | | |

### Scrolling Behavior
- **Direction**: Left-to-right / Right-to-left / Vertical
- **Speed**: Constant / Accelerating over time
- **Camera**: Fixed on player / Leading ahead

---

## Game Elements

### Platforms
| Type | Behavior | Sprite Notes |
|------|----------|--------------|
| | | |

### Obstacles
| Type | Behavior | Damage/Effect |
|------|----------|---------------|
| | | |

### Collectibles
| Item | Points | Effect |
|------|--------|--------|
| | | |

### Power-ups
| Power-up | Duration | Effect |
|----------|----------|--------|
| | | |

---

## Scoring System
- **Base Score**:
- **Collectible Bonus**:
- **Distance Bonus**:
- **Combo System**:
- **Cat-specific bonuses?**:

---

## Difficulty Progression
- **How does difficulty increase?**
- **Speed curve**:
- **Platform density**:
- **Obstacle frequency**:

---

## Visual Style
- **Art Style**: Pixel art / Vector / Hand-drawn
- **Color Palette**:
- **Animation Style**:
- **Cat Portraits**: Style for selector bar icons

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
