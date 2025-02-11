# Make Your Game

## Overview
This project is a simple space shooter game where the player controls a spaceship to shoot down enemies. The game includes features such as player movement, shooting lasers, enemy waves, and a scoring system.

## Features
- Player can move left and right using arrow keys.
- Player can shoot lasers using the space bar.
- Enemies move and shoot back at the player.
- HUD displays time, score, and lives.
- Game over and congratulations screens.
- Pause and restart functionality.

## Usage
1. Open `index.html` in a web browser.
2. Click the "Start" button to begin the game.
3. Use the left and right arrow keys to move the spaceship.
4. Press the space bar to shoot lasers.
5. Press 'P' to pause/resume the game.
6. Press 'M' to mute/unmute the game sounds.

## Code Explanation
- `index.html`: The main HTML file that structures the game interface.
- `css/main.css`: The CSS file that styles the game interface.
- `js/game.js`: The JavaScript file that contains the game logic and functionality.

### JavaScript Functions
- `init()`: Initializes the game by creating the player and enemies.
- `update()`: Main game loop that updates the game state.
- `startGame()`: Starts the game.
- `pauseGame()`: Pauses or resumes the game.
- `resetGame()`: Resets the game state.
- `createPlayer()`, `createEnemy()`, `createLaser()`, `createEnemyLaser()`: Functions to create game elements.
- `updatePlayer()`, `updateLasers()`, `updateEnemyLasers()`, `updateEnemies()`: Functions to update game elements.
- `showCongratulations()`, `showGameOver()`: Functions to display end game screens.
- `onKeyDown()`, `onKeyUp()`: Event handlers for key presses.

## Conclusion
This project demonstrates a basic implementation of a space shooter game using HTML, CSS, and JavaScript. It includes player controls, enemy interactions, and a scoring system.

## Limitations
- The game does not have levels or increasing difficulty.
- Limited enemy types and behaviors.
- Basic graphics and sound effects.

## Future Improvements
- Add more levels with increasing difficulty.
- Introduce different types of enemies and power-ups.
- Improve graphics and sound effects.
- Implement a high score system.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Authors
- Sayed Ahmed Husain
- Qassim Aljaffer 

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.