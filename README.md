# Space Blaster 🚀

[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://html.spec.whatwg.org/)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

Welcome to **Space Blaster**, a thrilling space shooter game built with HTML, CSS, and JavaScript. In this game, players control a spaceship to defend against waves of enemies, shoot lasers, and achieve high scores. It's a fun and engaging experience that showcases classic arcade-style gameplay in the browser.

## ✨ Features

Here are the main features that make Space Blaster exciting:

- **Player Movement and Controls** 🎮: Move your spaceship left and right using arrow keys. Smooth controls allow precise navigation across the screen.
- **Laser Shooting** 🔫: Fire lasers at enemies by pressing the space bar. Lasers travel upwards to destroy incoming threats.
- **Enemy Waves** 👾: Face increasing waves of enemies that move and shoot back. Each wave brings more challenge.
- **Scoring System** 🏆: Earn points for destroying enemies. The HUD displays your current score, time, and lives.
- **Lives and Health** ❤️: Start with multiple lives. Lose a life when hit by enemy lasers. Game over when lives reach zero.
- **Pause and Resume** ⏸️: Press 'P' to pause the game at any time and resume when ready.
- **Mute/Unmute Sounds** 🔇: Press 'M' to toggle sound effects on or off for a customizable experience.
- **Game Over and Congratulations Screens** 🏅: See your final score on game over. Reach certain milestones for congratulations.
- **Restart Functionality** 🔄: Easily restart the game after game over to try for a better score.

These features combine to create an addictive and replayable game.

## 🛠️ Technologies Used

Space Blaster is built using these web technologies:

- **HTML** 🌐: Structures the game interface and user elements.
- **CSS** 🎨: Styles the game layout, HUD, and screens for a polished look.
- **JavaScript** ⚡: Handles game logic, animations, event handling, and interactions.
- **DOM Manipulation** 🖼️: Used for rendering and animating game elements via HTML and CSS.
- **Audio API** 🔊: Manages sound effects for shooting, explosions, and background music.

These technologies ensure the game runs smoothly in modern web browsers.

## 🎯 What We Aim For

Our goal with Space Blaster is to provide an entertaining space shooter experience that captures the essence of classic arcade games. The game focuses on core mechanics like movement, shooting, and survival against enemy waves.

The game revolves around these key elements:

1. **Player** 👤: The spaceship controlled by the user.
2. **Enemies** 👾: AI-controlled entities that move and attack.
3. **Lasers** 🔫: Projectiles fired by the player and enemies.
4. **HUD** 📊: Displays score, time, and lives.

Game state is managed through JavaScript variables and functions.

### Game Logic Overview

The game loop updates continuously:

- **Player Update**: Handles movement based on key inputs.
- **Laser Update**: Moves player and enemy lasers, checks collisions.
- **Enemy Update**: Moves enemies, spawns new ones, fires enemy lasers.
- **Collision Detection**: Detects hits between lasers and entities.
- **Rendering**: Updates the DOM for visuals.

Here's a simple representation:

```
Player Input → Update Positions → Check Collisions → Render Frame → Repeat
```

| Component | Purpose                  | Key Functions                  |
| --------- | ------------------------ | ------------------------------ |
| Player    | User-controlled ship     | createPlayer(), updatePlayer() |
| Enemies   | AI opponents             | createEnemy(), updateEnemies() |
| Lasers    | Projectiles              | createLaser(), updateLasers()  |
| HUD       | Game information display | updateHUD()                    |

### User Flow Representation

Players interact with the game like this:

```
Start Game → Move & Shoot → Survive Waves → Game Over → Restart
```

- **Steps**: Begin by starting, control the ship, defeat enemies, repeat.
- **Progression**: Score increases with each enemy destroyed.

This flow keeps players engaged.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- No additional installations required.

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/sahmedhusain/spaceblaster.git
   ```
2. Navigate to the project folder:
   ```bash
   cd spaceblaster
   ```
3. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```
   Or simply double-click the file.

## 📖 How to Use

Once the game is loaded in your browser:

1. **Start the Game**: Click the "Start" button to begin.
2. **Control the Ship**: Use left/right arrow keys to move.
3. **Shoot Lasers**: Press space bar to fire.
4. **Pause**: Press 'P' to pause/resume.
5. **Mute Sounds**: Press 'M' to toggle audio.
6. **Restart**: After game over, click to restart.

The game guides you through each action.

### Game Mechanics

- **Movement**: Continuous left/right within screen bounds.
- **Shooting**: Unlimited lasers with cooldown.
- **Enemies**: Spawn from top, move downwards.
- **Collisions**: Lasers destroy on contact, player loses life on hit.

## 🧠 Application Logic Explanation

Space Blaster uses game development principles for smooth gameplay:

1. **Game Loop**: Uses `requestAnimationFrame` for 60 FPS updates.
2. **Event Handling**: Listens for key presses and releases.
3. **Object Management**: Arrays store players, enemies, lasers.
4. **Rendering**: DOM updates for visuals.
5. **State Management**: Tracks game state (playing, paused, over).

### Collision Detection Logic

Collisions are checked each frame:

- For each player laser and enemy: if overlapping, destroy both, increase score.
- For each enemy laser and player: if overlapping, destroy laser, decrease lives.

### Audio Management

Sounds are played using Audio objects:

- Background music loops during gameplay.
- Sound effects for shooting and explosions.
- Mute flag controls all audio.

### HUD Updates

The HUD is updated each frame:

- Time: Increments continuously.
- Score: Increases on enemy destruction.
- Lives: Decreases on player hit.

This keeps players informed.

## 🔍 Deep Logic Explanation

### Game Initialization

When the game starts, the `init()` function is called:

- Creates the player object with initial position, size, and properties.
- Initializes empty arrays for lasers, enemy lasers, and enemies.
- Sets up the game state variables: score = 0, lives = 3, time = 60 seconds.
- Loads audio files and prepares them for playback.

### Main Game Loop

The `update()` function runs continuously via `requestAnimationFrame`:

1. **Calculate Delta Time**: Compute time elapsed since last frame for consistent updates.
2. **Update Player**: Move player based on key presses, respecting boundaries.
3. **Update Lasers**: Move all player lasers upwards, remove off-screen ones.
4. **Update Enemy Lasers**: Move enemy lasers downwards, check collisions with player.
5. **Update Enemies**: Move enemies in formation, spawn new waves, fire lasers.
6. **Check Collisions**: Detect and handle laser-enemy and laser-player hits.
7. **Update HUD**: Refresh score, time, lives display.
8. **Check Game End**: If time runs out or lives = 0, end game.

### Player Movement Logic

- Left/Right keys set velocity.
- Position updated based on velocity and delta time.
- Boundaries prevent moving off-screen.

### Enemy AI Logic

- Enemies move in a grid pattern: left to right, down on edge.
- Periodically fire lasers at random intervals.
- When all enemies destroyed, spawn new wave.

### Laser Mechanics

- Player lasers: Fired on space press, with cooldown to prevent spam.
- Enemy lasers: Fired randomly, travel downwards.
- Collision: Rectangle overlap detection for simplicity.

### Scoring and Lives

- Destroy enemy: +10 points.
- Player hit: -1 life.
- Time bonus: Points based on remaining time at end.

### Pause and Mute Logic

- Pause toggles game loop execution.
- Mute sets volume to 0 for all audio.

This deep dive shows how each component interacts for a cohesive game experience.

## 📊 ERD (Entity Relationship Diagram)

Since Space Blaster is a game with dynamic objects rather than a database, the "ERD" represents the relationships between game entities.

![ERD](./img/erd.png)

This diagram illustrates the core game objects and their interactions.

## 📈 Flowchart

![Game Flowchart](./img/TL9BKy8m4BxtL-on71JFPHWOyJcZ8mCodcEpj94qsqbI47-zcmGG54zDjjzhDpjsNbZVDHhkHODmfsbJrbp9OZqh5WujK8l6WJ8IFozht-X1Lan5XQ19I3V8r1BoY2krAbSEve4wwe6lqK2-HTVB00fbbCzxS06FV512go-4AdZI-mUMddKO55r3aeYynagP1D94RK1iQgKHyXXsrXcZJ3KAyipjMYby8ZuBvkqf027WL8ij.png)

## Terminal Examples 💻

### Opening the Game in Browser 🖥️

```bash
$ cd spaceblaster
$ open index.html
# Or on Linux: xdg-open index.html
# Or on Windows: start index.html
```

### Checking File Structure 📁

```bash
$ ls -la
total 32
drwxr-xr-x   9 user  group    288 Dec 24 12:00 .
drwxr-xr-x  15 user  group    480 Dec 24 12:00 ..
-rw-r--r--   1 user  group   1075 Dec 24 12:00 LICENSE.md
-rw-r--r--   1 user  group   1234 Dec 24 12:00 README.md
-rw-r--r--   1 user  group   2345 Dec 24 12:00 control.js
-rw-r--r--   1 user  group   3456 Dec 24 12:00 enemy.js
-rw-r--r--   1 user  group   4567 Dec 24 12:00 game.js
-rw-r--r--   1 user  group   5678 Dec 24 12:00 index.html
-rw-r--r--   1 user  group   6789 Dec 24 12:00 laser.js
-rw-r--r--   1 user  group   7890 Dec 24 12:00 player.js
drwxr-xr-x   3 user  group     96 Dec 24 12:00 css
drwxr-xr-x   5 user  group    160 Dec 24 12:00 img
drwxr-xr-x   4 user  group    128 Dec 24 12:00 sound
```

### Running a Local Server (Optional) 🌐

For better experience, serve via HTTP:

```bash
$ python3 -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
# Then open http://localhost:8000 in browser
```

## Screenshots 📸

![Game Demo](./img/ScreenRecording2025-12-24at23.18.49-ezgif.com-video-to-gif-converter.gif)

![Gameplay Screenshot](./img/gameplay.jpeg)
![Game Over Screen](./img/gameover.jpeg)
![Start Screen](./img/enter.jpeg)

## 🛠️ Under the Hood

### Data Handling

The game manages game state with JavaScript objects:

- **Player Data**: Position, lives, score.
- **Enemy Data**: Position, speed, health.
- **Laser Data**: Position, velocity, owner.

Inputs are validated to prevent invalid states.

### Code Structure

The code is organized across files:

- **index.html**: Game page structure.
- **css/main.css**: Styling for UI elements.
- **js/game.js**: Main game loop and state.
- **js/player.js**: Player-related functions.
- **js/enemy.js**: Enemy logic.
- **js/laser.js**: Laser mechanics.
- **js/control.js**: Input handling.

### Error Management

The game handles errors gracefully:

- Invalid key presses are ignored.
- DOM rendering errors are logged.
- Audio loading failures fall back to silent mode.

The game is optimized for smooth performance.

## 🤝 Contributing

We'd love your help! Fork the repo, make changes, and send a pull request. Please follow JavaScript best practices and test in multiple browsers.

## 📄 License

Licensed under MIT - check [LICENSE.md](LICENSE.md) for more.

## 🙏 Acknowledgments

This project was created as part of a web game development learning experience, focusing on DOM manipulation and JavaScript game loops. Inspired by classic space shooters.

## 👥 Authors

- **Sayed Ahmed Husain** - [sayedahmed97.sad@gmail.com](mailto:sayedahmed97.sad@gmail.com)
- **Qassim Aljaffer**

## 📚 What I Learned

Building this taught me:

- Game development with HTML5 Canvas.
- JavaScript event handling and game loops.
- Object-oriented programming in JS.
- Audio and graphics integration.
- Cross-browser compatibility.

## Limitations 🚫

- No levels or progressive difficulty.
- Limited enemy variety.
- Basic graphics and sounds.
- No high score persistence.

## Future Improvements 🔮

- Add multiple levels with increasing challenge.
- Introduce power-ups and special weapons.
- Improve graphics with sprites and animations.
- Implement online leaderboards.
- Add multiplayer mode.
