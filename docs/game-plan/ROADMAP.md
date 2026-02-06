# Implementation Roadmap

## Code Quality Expectations

All code must follow the standards in [CODE_STANDARDS.md](./technical/CODE_STANDARDS.md):

- **Readable**: Descriptive function/variable names, self-documenting code
- **Commented**: Complex logic explained with "why" comments, JSDoc on public APIs
- **Tested**: Unit tests for core logic, integration tests for systems
- **Maintainable**: Another developer can understand and extend the code

---

## Phase 1: Setup & Integration
- [ ] Install `phaser` and `react-router-dom` dependencies
- [ ] Wrap App in `BrowserRouter`, set up routes for `/` and `/play`
- [ ] Create `PlayPage.tsx` with `React.lazy()` for code splitting
- [ ] Create `GameContainer.tsx` React wrapper component for Phaser
- [ ] Add "Play" button/link to TopBar navigation (links to `/play`)
- [ ] Initialize Phaser game instance inside GameContainer with basic config
- [ ] Verify game canvas renders and cleans up on unmount

**Quality gates:**
- [ ] ESLint passes with no errors
- [ ] Navigating to `/play` loads the game, back button returns to cat cards
- [ ] Phaser instance properly destroyed on route change (no memory leaks)

---

## Phase 2: Core Game Mechanics
- [ ] Initialize Phaser game instance
- [ ] Implement base player class with physics
- [ ] Add basic physics (gravity, collision)
- [ ] Implement jump mechanics
- [ ] Implement attack mechanics
- [ ] Create infinite scrolling ground/platforms
- [ ] Add procedural platform generation

**Quality gates:**
- [ ] Unit tests for physics calculations (jump force, gravity)
- [ ] Unit tests for platform generation algorithm
- [ ] All public methods have JSDoc comments
- [ ] Complex algorithms have explanatory comments

---

## Phase 3: Cat Character System
- [ ] Define cat configuration structure (types.ts)
- [ ] Create cat roster configuration file (cats.ts)
- [ ] Implement Cat entity class (extends base player)
- [ ] Build CatManager for character spawning/swapping
- [ ] Create CatSelectorBar UI component
- [ ] Implement character swap logic
- [ ] Add swap input handling (keyboard + click)
- [ ] Add swap transition effects/sounds

**Quality gates:**
- [ ] Unit tests for CatManager (swap logic, bounds checking)
- [ ] Unit tests for cat config validation
- [ ] Test swapping preserves position/momentum
- [ ] All cat system classes have JSDoc documentation

---

## Phase 4: v1 Cat Implementation (3 cats)
For each starter cat (Milky Moo, Bitty, Bones):
- [ ] Generate AI pixel art sprite sheet (32x32 frames)
- [ ] Generate AI pixel art portrait (48x48)
- [ ] Map existing real cat sounds to game events
- [ ] Implement special ability logic
- [ ] Add configuration to cats.ts
- [ ] Test in-game

### v1 Cat Checklist
| Cat | Sprites | Portrait | Sounds | Ability | Config | Tested |
|-----|---------|----------|--------|---------|--------|--------|
| Milky Moo | [ ] | [ ] | [x] MilkChirp | Speed Boost | [ ] | [ ] |
| Bitty | [ ] | [ ] | [x] BittyPurring | Ground Pound | [ ] | [ ] |
| Bones | [ ] | [ ] | [x] BonesCrying | Double Jump | [ ] | [ ] |

**Quality gates:**
- [ ] Each ability has unit tests
- [ ] Config file is validated (no missing required fields)
- [ ] All 3 cats can be swapped between during gameplay

---

## Phase 5: Game Content
- [ ] Design and implement obstacles
- [ ] Add collectibles/scoring system
- [ ] Implement difficulty progression
- [ ] Add particle effects
- [ ] Create death/restart mechanics

**Quality gates:**
- [ ] Unit tests for ScoreManager
- [ ] Unit tests for DifficultyManager progression curves
- [ ] Obstacle spawner tested for edge cases

---

## Phase 6: Polish & UI
- [ ] Add start screen with cat preview
- [ ] Implement game over screen with score
- [ ] Add high score tracking (localStorage)
- [ ] Sound effects and music
- [ ] Mobile touch controls
- [ ] Pause functionality
- [ ] Memorial cat visual treatment (if desired)

**Quality gates:**
- [ ] localStorage operations have error handling
- [ ] UI components are documented

---

## Phase 7: Testing & Launch
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness testing
- [ ] Performance profiling and optimization
- [ ] Cat swap stress testing
- [ ] Full unit test suite passes
- [ ] Code review for readability
- [ ] Deploy to production

**Quality gates:**
- [ ] All unit tests pass
- [ ] No ESLint errors or warnings
- [ ] Code coverage > 70% for core systems
- [ ] No console errors during gameplay

---

## Dependencies

```
Phase 1 (Setup)
    │
    ▼
Phase 2 (Core Mechanics)
    │
    ├──────────────────┐
    ▼                  ▼
Phase 3 (Cat System)  Phase 5 (Content)
    │                  │
    ▼                  │
Phase 4 (Cats)         │
    │                  │
    └───────┬──────────┘
            ▼
      Phase 6 (Polish)
            │
            ▼
      Phase 7 (Launch)
```

---

## Definition of Done

A feature is complete when:
1. Code follows naming conventions and style guidelines
2. Complex logic has explanatory comments
3. Public APIs have JSDoc documentation
4. Unit tests cover core logic paths
5. Code has been reviewed for clarity
6. Feature works in all target browsers

---

## Notes
<!-- Add any implementation notes, decisions, or blockers here -->
