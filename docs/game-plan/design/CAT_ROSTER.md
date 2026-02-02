# Cat Roster & Character System

## Overview
The game features multiple playable cats, each representing a real cat (past or present). Players can swap between cats during gameplay, with each cat having unique abilities, animations, and sounds.

---

## Character Swap System

### Swap Mechanics
- **Swap Button**: (TBD - key/button to swap)
- **Swap Behavior**: Instant? Brief animation/transition?
- **Cooldown**: None / Short cooldown between swaps?
- **Mid-air Swap**: Allowed?

### UI: Cat Selector Bar
- Position: Bottom of screen
- Shows: All available cats as portrait/icon images
- Current cat: Highlighted (glow, border, enlarged?)
- Layout: Horizontal list, scrollable if many cats?

```
┌────────────────────────────────────────────────────────┐
│                    GAME AREA                           │
│                                                        │
│                                                        │
├────────────────────────────────────────────────────────┤
│  [Cat1]  [Cat2]  [*Cat3*]  [Cat4]  [Cat5]             │
│                   current                              │
└────────────────────────────────────────────────────────┘
```

---

## Cat Configuration Structure

Each cat is defined with the following properties:

```typescript
interface CatConfig {
  id: string;
  name: string;
  description: string;

  // Visual
  spriteSheet: string;           // Path to sprite sheet
  portrait: string;              // Icon for selector bar
  frameWidth: number;
  frameHeight: number;
  animations: CatAnimations;

  // Audio
  sounds: CatSounds;

  // Abilities
  abilities: CatAbility[];

  // Physics (optional overrides)
  physics?: {
    jumpForce?: number;
    speed?: number;
    // etc.
  };

  // Metadata
  isUnlocked: boolean;           // Future: unlockable cats?
  memorial?: boolean;            // Passed cats (visual indicator?)
}

interface CatAnimations {
  idle: AnimationConfig;
  run: AnimationConfig;
  jump: AnimationConfig;
  fall: AnimationConfig;
  attack: AnimationConfig;
  // Ability-specific animations
  [abilityKey: string]: AnimationConfig;
}

interface CatSounds {
  jump?: string;
  land?: string;
  attack?: string;
  hurt?: string;
  meow?: string;                 // Idle/random sound
  // Ability-specific sounds
  [abilityKey: string]: string;
}

interface CatAbility {
  id: string;
  name: string;
  description: string;
  key: string;                   // Input to trigger
  cooldown: number;              // Seconds
  animation: string;             // Animation key
  sound?: string;                // Sound key
  effect: AbilityEffect;         // What it does
}
```

---

## Cat Roster

Fill in details for each cat:

### Cat 1: [Name]
| Property | Value |
|----------|-------|
| **Name** | |
| **Description** | |
| **Personality** | |
| **Status** | Current / Memorial |
| **Special Ability** | |
| **Ability Description** | |

**Visual Notes:**
- Color/pattern:
- Distinguishing features:

**Sound Notes:**
- Voice/meow style:

---

### Cat 2: [Name]
| Property | Value |
|----------|-------|
| **Name** | |
| **Description** | |
| **Personality** | |
| **Status** | Current / Memorial |
| **Special Ability** | |
| **Ability Description** | |

**Visual Notes:**
- Color/pattern:
- Distinguishing features:

**Sound Notes:**
- Voice/meow style:

---

### Cat 3: [Name]
| Property | Value |
|----------|-------|
| **Name** | |
| **Description** | |
| **Personality** | |
| **Status** | Current / Memorial |
| **Special Ability** | |
| **Ability Description** | |

**Visual Notes:**
- Color/pattern:
- Distinguishing features:

**Sound Notes:**
- Voice/meow style:

---

<!-- Copy template above for additional cats -->

## Ability Ideas

| Ability | Effect | Good For Cat Type |
|---------|--------|-------------------|
| Double Jump | Extra jump mid-air | Agile/young cats |
| Dash | Quick horizontal burst | Energetic cats |
| Pounce | Diagonal attack leap | Hunter cats |
| Float/Glide | Slow fall | Fluffy/long-hair cats |
| Wall Cling | Stick to walls briefly | Climber cats |
| Speed Boost | Temporary speed increase | Hyper cats |
| Ground Pound | Slam down from air | Chonky cats |
| Screech | Stun nearby enemies | Loud cats |
| Stealth | Brief invincibility | Sneaky cats |
| Healing Purr | Regenerate health | Calm/old cats |

---

## Memorial Cats
For cats that have passed, consider:
- [ ] Subtle visual indicator (halo, star, wings?)
- [ ] Special unlock message/tribute when selected
- [ ] Unique idle animation (looking up, peaceful)

---

## Future Considerations
- [ ] Unlockable cats (beat distance milestones?)
- [ ] Cat-specific achievements
- [ ] Costume/skin variants per cat
