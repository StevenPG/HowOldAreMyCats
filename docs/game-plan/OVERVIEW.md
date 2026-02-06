# Cat Platformer Game - Project Overview

## Project Summary
A 2D infinite scrolling platformer game built with Phaser, integrated into the existing React cat website on the `/play` route. The game serves as a tribute to beloved cats (past and present), featuring multiple playable cat characters that players can swap between during gameplay.

## Key Features
- Infinite scrolling platformer gameplay
- Multiple playable cats, each with unique sprites, sounds, and abilities
- Real-time character swapping via selector bar
- Tribute to real cats (current and memorial)

## Goals
- [ ] Install react-router-dom and set up `/play` route
- [ ] Add a "Play" button to the TopBar navigation
- [ ] Build an engaging 2D platformer with player-controlled movement
- [ ] Implement character swap system with 1-3 starter cats
- [ ] Generate AI pixel art sprites for each starter cat
- [ ] Integrate seamlessly with existing React/MUI styling
- [ ] Lazy-load the game route to minimize impact on main page load

## Key Decisions
- **Routing**: React Router (`react-router-dom`) for `/play` route
- **Movement**: Player-controlled (left/right/jump/attack), NOT auto-runner
- **v1 Scope**: Start with 1-3 playable cats, expand incrementally
- **Art**: AI-generated pixel art based on each cat's real appearance
- **Memorial Cats**: Eli and Bucket (deferred to later phase)

## Tech Stack
- **Game Engine**: Phaser 3
- **Frontend**: React 18 + TypeScript
- **Routing**: react-router-dom v6
- **UI Framework**: MUI (existing)
- **Build Tool**: Create React App (existing)

## Quick Links

### Design
- [Game Design Document](./design/GAME_DESIGN.md) - Core mechanics, controls, scoring
- [Cat Roster](./design/CAT_ROSTER.md) - Character definitions and abilities
- [Player Character System](./design/PLAYER_CHARACTER.md) - Sprite specs, animations
- [Level Design](./design/LEVEL_DESIGN.md) - Procedural generation, difficulty

### Technical
- [Architecture](./technical/ARCHITECTURE.md) - File structure, cat system code
- [Physics](./technical/PHYSICS.md) - Collision, jump mechanics
- [Code Standards](./technical/CODE_STANDARDS.md) - Quality guidelines, naming, testing

### Assets
- [Asset List](./assets/ASSET_LIST.md) - Full asset requirements

### Planning
- [Implementation Roadmap](./ROADMAP.md) - Phased development plan

## Project Status
- [ ] Planning Phase
- [ ] Cat Roster Definition
- [ ] Asset Creation
- [ ] Core Game Development
- [ ] Character Swap System
- [ ] Integration with React
- [ ] Testing & Polish
- [ ] Launch
