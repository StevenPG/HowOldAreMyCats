# Physics & Collision System

## Physics Engine
Using Phaser's built-in Arcade Physics

---

## World Settings

| Property | Value | Notes |
|----------|-------|-------|
| Gravity Y | 800 | Feels responsive, not floaty |
| Gravity X | 0 | No horizontal gravity |
| World Bounds | None horizontally, floor at y=568 | Infinite scroll right, death pit below |

---

## Player Physics

| Property | Value | Notes |
|----------|-------|-------|
| Body Size | 24x28 | Slightly smaller than 32x32 frame for forgiving collisions |
| Offset | 4, 4 | Center hitbox within frame |
| Max Velocity X | 300 | Comfortable run speed |
| Max Velocity Y | 600 | Terminal velocity |
| Drag X | 600 | Snappy stop, not slidey |
| Bounce | 0 | No bounce on landing |

### Jump Mechanics
- **Jump Force**: -400 (negative = up in Phaser)
- **Variable Jump**: Yes. Release jump early = 60% of full height. Hold = full height.
- **Coyote Time**: 80ms grace period after leaving platform edge
- **Jump Buffer**: 100ms input buffer before landing

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
