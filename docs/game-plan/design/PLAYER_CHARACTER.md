# Player Character System

## Overview
The game features multiple playable cat characters. All cats share a base set of animations and abilities, but each has unique sprites, sounds, and one or more special abilities.

For individual cat details, see: [CAT_ROSTER.md](./CAT_ROSTER.md)

---

## Base Character Template

All cats must implement these core animations and abilities.

### Base Sprite Specifications

#### Dimensions (Standardized)
- **Frame Size**: (e.g., 32x32, 64x64 pixels) - all cats use same size
- **Scale in Game**:
- **Portrait Size**: (for selector bar icons)

#### Required Animations (All Cats)
| Animation | Frames | Loop? | Notes |
|-----------|--------|-------|-------|
| Idle | | Yes | Breathing, tail swish |
| Run | | Yes | Movement cycle |
| Jump | | No | Launch pose |
| Fall | | Yes | Falling pose |
| Land | | No | Impact squash |
| Attack | | No | Basic swipe/pounce |
| Hurt | | No | Take damage |
| Death | | No | Game over |
| Swap In | | No | Appearing (optional) |
| Swap Out | | No | Disappearing (optional) |

#### Optional Animations (Per Cat)
| Animation | Purpose |
|-----------|---------|
| Special Ability | Unique ability animation |
| Idle Variant | Personality quirk (yawn, groom, etc.) |
| Victory | Score milestone celebration |

---

## Base Physics Properties
These are defaults; individual cats may override.

| Property | Default | Notes |
|----------|---------|-------|
| Hitbox Size | | Collision box |
| Gravity Scale | 1.0 | Some cats may float/fall slower |
| Jump Force | | |
| Move Speed | | |
| Max Fall Speed | | Terminal velocity |
| Attack Range | | Swipe distance |
| Attack Cooldown | | Seconds |

---

## State Machine

```
                    ┌─────────────┐
                    │    IDLE     │◄──────────────┐
                    └──────┬──────┘               │
                           │ movement             │ land
                           ▼                      │
                    ┌─────────────┐               │
            ┌──────►│    RUN      │───────────────┤
            │       └──────┬──────┘               │
            │              │ jump                 │
            │              ▼                      │
            │       ┌─────────────┐               │
            │       │    JUMP     │               │
            │       └──────┬──────┘               │
            │              │ apex/release         │
            │              ▼                      │
            │       ┌─────────────┐               │
            │       │    FALL     │───────────────┘
            │       └──────┬──────┘
            │              │
            │              ▼
            │       ┌─────────────┐
            └───────│   ATTACK    │ (can trigger from most states)
                    └─────────────┘

    ANY STATE ──────► HURT ──────► DEAD (if health = 0)
    ANY STATE ──────► SWAP_OUT ──► SWAP_IN (new cat)
    ANY STATE ──────► SPECIAL_ABILITY (if cat has one)
```

---

## Sprite Sheet Format

Each cat needs a sprite sheet in this format:

```
cat_[name]_spritesheet.png
cat_[name]_portrait.png
```

### Sprite Sheet Layout Options

**Option A: Single row per animation**
```
Row 0: Idle frames
Row 1: Run frames
Row 2: Jump frames
Row 3: Fall frames
Row 4: Attack frames
Row 5: Special ability frames
...
```

**Option B: Texture atlas with JSON**
```json
{
  "frames": {
    "idle_0": { "x": 0, "y": 0, "w": 32, "h": 32 },
    "idle_1": { "x": 32, "y": 0, "w": 32, "h": 32 },
    ...
  }
}
```

---

## Audio Per Cat

Each cat should have:

| Sound | Required? | Notes |
|-------|-----------|-------|
| Jump | Optional | Default if not provided |
| Land | Optional | Default if not provided |
| Attack | Recommended | Unique per cat |
| Hurt | Recommended | |
| Meow/Voice | Recommended | Personality sound |
| Special Ability | If applicable | |

---

## Adding a New Cat Checklist

- [ ] Create sprite sheet with all required animations
- [ ] Create portrait image for selector bar
- [ ] Record/source unique sounds (optional)
- [ ] Define special ability (if any)
- [ ] Add entry to cat configuration file
- [ ] Add entry to [CAT_ROSTER.md](./CAT_ROSTER.md)
- [ ] Test all animations in-game
- [ ] Test swap transition

---

## Visual Reference
<!-- Add reference images, style guides, or sketches here -->

---

## Notes
