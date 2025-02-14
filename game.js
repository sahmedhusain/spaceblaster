import { createPlayer, updatePlayer } from './player.js';
import { createEnemy, updateEnemies, destroyEnemy } from './enemy.js';
import { createLaser, destroyLaser, createEnemyLaser, updateEnemyLasers, updateLasers } from './laser.js';
import { onKeyDown, onKeyUp } from './control.js'; // Ensure the correct import path

export const KEY_CODE_LEFT = 37; // Left arrow key
export const KEY_CODE_RIGHT = 39; // Right arrow key
export const KEY_CODE_SPACE = 32; // Space key

export const GAME_WIDTH = 1600;
export const GAME_HEIGHT = 660;

export const PLAYER_WIDTH = 100;
export const PLAYER_MAX_SPEED = 600;
export const LASER_MAX_SPEED = 300;
export const LASER_COOLDOWN = 0.1;
export const ENEMY_LASER_SPEED = 200;
export const ENEMY_LASER_COOLDOWN = 2.0;

export const ENEMIES_PER_ROW = 10;
export const ENEMY_HORIZONTAL_PADDING = 80;
export const ENEMY_VERTICAL_PADDING = 70;
export const ENEMY_VERTICAL_SPACING = 80;

export const COUNTDOWN_TIME = 60; // Countdown time in seconds

export const GAME_STATE = {
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  playerX: GAME_WIDTH / 2,
  playerY: GAME_HEIGHT - 50,
  playerCooldown: 0,
  lasers: [],
  enemyLasers: [],
  enemies: [],
  gameOver: false,
  startTime: Date.now(),
  score: 0,
  lives: 3,
  remainingTime: COUNTDOWN_TIME,
  isMuted: false,
};

export let isPaused = false;
export let isGameRunning = false;

export function setPosition($element, x, y) {
  $element.style.transform = `translate(${x}px, ${y}px)`;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function init() {
  const $game = document.querySelector('.game');
  createPlayer($game);

  const enemySpacing = (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);
  for (let j = 0; j < 3; j++) {
    const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING;
    for (let i = 0; i < ENEMIES_PER_ROW; i++) {
      const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
      createEnemy($game, x, y);
    }
  }
}

export function rectIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}

export function showCongratulations() {
  console.log('showCongratulations called');
  const $congratulations = document.querySelector('.congratulations');
  $congratulations.style.display = 'block';
  stopGame();
}

export function showGameOver() {
  console.log('showGameOver called');
  const $gameOver = document.querySelector('.game-over');
  $gameOver.style.display = 'block';
  stopGame();
}

export function showPauseMenu() {
  const $pauseModal = document.getElementById('pause-modal');
  $pauseModal.style.display = 'block';
}

export function hidePauseMenu() {
  const $pauseModal = document.getElementById('pause-modal');
  $pauseModal.style.display = 'none';
}

export function stopGame() {
  GAME_STATE.gameOver = true;
}

export function resetGame() {
  const $game = document.querySelector('.game');
  const $congratulations = document.querySelector('.congratulations');
  const $gameOver = document.querySelector('.game-over');

  $congratulations.style.display = 'none';
  $gameOver.style.display = 'none';

  GAME_STATE.gameOver = false;
  GAME_STATE.lasers = [];
  GAME_STATE.enemyLasers = [];
  GAME_STATE.enemies = [];
  GAME_STATE.playerX = GAME_WIDTH / 2;
  GAME_STATE.playerY = GAME_HEIGHT - 50;
  GAME_STATE.playerCooldown = 0;
  GAME_STATE.startTime = Date.now();
  GAME_STATE.score = 0;
  GAME_STATE.lives = 3;
  GAME_STATE.remainingTime = COUNTDOWN_TIME;

  $game.innerHTML = '';
  hidePauseMenu();
  init();
  isGameRunning = false;
  document.getElementById('start-btn').disabled = false;
  document.getElementById('pause-btn').disabled = true;
  document.getElementById('pause-btn').textContent = 'Pause';
}

export function updateHUD() {
  const $time = document.getElementById('time');
  const $score = document.getElementById('score');
  const $lives = document.getElementById('lives');

  const elapsedTime = Math.floor((Date.now() - GAME_STATE.startTime) / 1000);
  GAME_STATE.remainingTime = COUNTDOWN_TIME - elapsedTime;

  const minutes = Math.floor(GAME_STATE.remainingTime / 60);
  const seconds = GAME_STATE.remainingTime % 60;
  $time.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  $score.textContent = GAME_STATE.score;
  $lives.textContent = GAME_STATE.lives;
}

export function update() {
  if (GAME_STATE.gameOver || isPaused) return;

  const currentTime = Date.now();
  const dt = (currentTime - GAME_STATE.lastTime) / 1000;

  const $game = document.querySelector('.game');
  updatePlayer(dt, $game);
  updateLasers(dt, $game);
  updateEnemyLasers(dt, $game);
  updateEnemies(dt, $game);

  updateHUD();

  if (GAME_STATE.remainingTime <= 0) {
    showGameOver();
    return;
  }

  GAME_STATE.lastTime = currentTime;
  window.requestAnimationFrame(update);
}

export function pauseGame() {
  isPaused = !isPaused;
  if (isPaused) {
    showPauseMenu();
    document.getElementById('pause-btn').textContent = 'Resume';
  } else {
    hidePauseMenu();
    document.getElementById('pause-btn').textContent = 'Pause';
    window.requestAnimationFrame(update);
  }
}

export function startGame() {
  if (!isGameRunning) {
    resetGame();
    isGameRunning = true;
    isPaused = false;
    document.getElementById('start-btn').disabled = true;
    document.getElementById('pause-btn').disabled = false;
    window.requestAnimationFrame(update);
  }
}

export function resumeGame() {
  isPaused = false;
  hidePauseMenu();
  document.getElementById('pause-btn').textContent = 'Pause';
  window.requestAnimationFrame(update);
}

init();
document.getElementById('start-btn').disabled = false;
document.getElementById('pause-btn').disabled = true;

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);


window.startGame = startGame;
window.pauseGame = pauseGame;
window.resumeGame = resumeGame;
window.resetGame = resetGame;

