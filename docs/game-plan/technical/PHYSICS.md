# Physics & Collision System

## Physics Engine
Using Phaser's built-in Arcade Physics

---

## World Settings

| Property | Value | Notes |
|----------|-------|-------|
| Gravity Y | | Affects fall speed |
| Gravity X | | Usually 0 |
| World Bounds | | Set to none for infinite scroll |

---

## Player Physics

| Property | Value | Notes |
|----------|-------|-------|
| Body Size | | Hitbox dimensions |
| Offset | | Hitbox position adjustment |
| Max Velocity X | | |
| Max Velocity Y | | Terminal velocity |
| Drag X | | Ground friction |
| Bounce | | Usually 0 for platformers |

### Jump Mechanics
- **Jump Force**:
- **Variable Jump**: (hold for higher?)
- **Coyote Time**: (ms grace period after leaving platform)
- **Jump Buffer**: (ms input buffer before landing)

---

## Collision Groups

| Group | Collides With | Notes |
|-------|---------------|-------|
| Player | Platforms, Obstacles, Collectibles | |
| Platforms | Player | |
| Obstacles | Player | |
| Collectibles | Player | Overlap only |

---

## Collision Responses

### Player <-> Platform
- Stop downward velocity
- Allow pass-through from below? (one-way platforms)

### Player <-> Obstacle
- Trigger death/damage
- Knockback?

### Player <-> Collectible
- Destroy collectible
- Add score
- Play effect

---

## Moving Platform Physics
- Carried velocity transfer to player?
- Platform types (moving, falling, bouncy)

---

## Edge Cases
- [ ] Stuck between platforms
- [ ] Clipping through fast-moving platforms
- [ ] Landing on corners

---

## Debug Visualization
```typescript
physics: {
  arcade: {
    debug: true  // Shows hitboxes
  }
}
```

---

## Notes
