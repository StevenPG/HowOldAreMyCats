# Level/World Design

## World Theme
- **Setting**: Mix of indoor house and outdoor yard. Game starts inside (shelves, counters, cat trees) and transitions to outdoor (fences, garden, trees) as distance increases. Zones alternate.
- **Visual Theme**: Warm cozy colors, pixel art. Indoor = furniture-as-platforms. Outdoor = fences, branches, garden structures.
- **Background Layers**: Varies by zone (see parallax table below)

---

## Procedural Generation Rules

### Platform Spawning
- **Min/Max Gap Distance**: 80px - 250px (increases with difficulty)
- **Min/Max Height Variation**: +/- 150px from previous platform (within jump range)
- **Platform Width Range**: 64px - 256px (3-8 tiles wide)
- **Special Platform Frequency**: 1 in 8 platforms is crumbling or bouncy

### Obstacle Spawning
- **Minimum Safe Distance**: 200px between obstacles (always jumpable)
- **Spawn Probability Curve**: Starts at 10%, reaches 40% at distance 5000+
- **Grouping Rules**: Never 3+ obstacles in a row without a safe gap

### Collectible Placement
- **Spawn Pattern**: Arcs above platforms, lines along paths
- **Density**: 1-3 treats per platform, catnip every 5th platform, toy mouse every 20th

---

## Difficulty Zones

| Distance | Platform Gaps | Platform Width | Obstacles | Notes |
|----------|---------------|----------------|-----------|-------|
| 0-500 | 80-120px | 128-256px | Rare (10%) | Tutorial/Easy, learn controls |
| 500-2000 | 120-180px | 96-192px | Moderate (25%) | Normal, crumbling platforms appear |
| 2000-5000 | 150-220px | 64-160px | Frequent (35%) | Hard, bouncy platforms appear |
| 5000+ | 180-250px | 64-128px | Dense (40%) | Expert, all platform types |

---

## Background Parallax Layers

### Indoor Zone
| Layer | Speed Ratio | Content |
|-------|-------------|---------|
| Far   | 0.1x        | Wall color / wallpaper pattern, windows |
| Mid   | 0.3x        | Bookshelves, framed cat photos, clock |
| Near  | 0.6x        | Curtains, hanging plants, cat toys |
| Ground| 1.0x        | Floor tiles / carpet, platforms (shelves, counters, cat trees) |

### Outdoor Zone
| Layer | Speed Ratio | Content |
|-------|-------------|---------|
| Far   | 0.1x        | Sky, clouds, distant houses |
| Mid   | 0.3x        | Trees, shed, fence line |
| Near  | 0.6x        | Bushes, flowers, bird feeder |
| Ground| 1.0x        | Grass, dirt, platforms (fences, branches, garden walls) |

Zones transition via a "window/door" connecting segment (~500px wide).

---

## Environmental Hazards
| Hazard | Placement | Effect |
|--------|-----------|--------|
|        |           |        |

---

## Chunk/Segment Design
<!-- If using pre-designed segments that are randomly selected -->

### Segment Types
- **Easy**:
- **Medium**:
- **Hard**:
- **Bonus**:

---

## Sketches & Mockups
<!-- Add visual layouts here -->
