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

### v1 Starter Cats (3 cats)

These 3 were chosen for diverse abilities and distinct visual appearances.

---

### Cat 1: Milky Moo
| Property | Value |
|----------|-------|
| **Name** | Milky Moo |
| **Description** | The smallest cat at 8lbs, gets random zoomies and sprints across the house |
| **Personality** | Energetic, chirpy, playful (throws hedgehog toy to herself) |
| **Status** | Current |
| **Special Ability** | Speed Boost (Zoomies) |
| **Ability Description** | Temporary 2x speed burst for 2 seconds. 5s cooldown. |

**Visual Notes:**
- Color/pattern: Light-colored / white-ish calico or tabby (check real photos)
- Distinguishing features: Small and sleek, expressive face
- Sprite priority: Smallest cat sprite (slightly smaller hitbox possible)

**Sound Notes:**
- Voice/meow style: Chirpy! Uses existing `/sounds/MilkChirp.mp3`

---

### Cat 2: Bitty
| Property | Value |
|----------|-------|
| **Name** | Bitty |
| **Description** | The momma of the house (despite being a boy), food-obsessed, prettiest light green eyes |
| **Personality** | Sweet, sensitive, chonky food lover |
| **Status** | Current |
| **Special Ability** | Ground Pound |
| **Ability Description** | Slam down from mid-air, destroying obstacles below. 4s cooldown. |

**Visual Notes:**
- Color/pattern: Tabby, noticeably chunkier/rounder than other cat sprites
- Distinguishing features: Light green/white eyes, round body shape
- Sprite priority: Largest/roundest cat sprite

**Sound Notes:**
- Voice/meow style: Purring. Uses existing `/sounds/BittyPurring.mp3`

---

### Cat 3: Bones
| Property | Value |
|----------|-------|
| **Name** | Bones |
| **Description** | Found as a tiny skinny kitten, biggest chicken, momma's boy |
| **Personality** | Skittish, timid, but sweet. Plays tug-of-war like a dog. |
| **Status** | Current |
| **Special Ability** | Double Jump |
| **Ability Description** | Can jump a second time mid-air. Passive ability (no cooldown). |

**Visual Notes:**
- Color/pattern: Dark/black cat, lean and lanky
- Distinguishing features: Skinny/angular build, big eyes (scared look)
- Sprite priority: Tallest/skinniest cat sprite

**Sound Notes:**
- Voice/meow style: Tiny, almost crying meow. Uses existing `/sounds/BonesCrying.mp3`

---

### Future Cats (Post-v1)

| Cat | Suggested Ability | Priority | Notes |
|-----|-------------------|----------|-------|
| Triscuit | Screech (stun) | High | Found screaming, very vocal |
| Wilson | Wall Cling | High | One-eyed, snuggly |
| Umbra | Pounce (diagonal attack) | Medium | Grumpy hunter |
| Pixie | Stealth (brief invincibility) | Medium | Partially blind but fearless |
| Wobbles | Float/Glide (slow fall) | Medium | CH makes him wobbly |
| Pancake | Dash | Medium | Flirty then runs away |
| Bucket | Float/Glide | Memorial | No hip bone, goofball |
| Eli | Healing Purr | Memorial | Elder cat, tripaw'd |
| Jack | Dash | Low | Kitten, "Glue" |
| Shelby | Speed Boost | Low | Kitten, runs and cries |

<!-- Copy the Cat template above for each when adding to v1 -->

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
