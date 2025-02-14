import { GAME_STATE, setPosition, ENEMY_LASER_SPEED, GAME_HEIGHT, rectIntersect, updateHUD, LASER_MAX_SPEED, showCongratulations, showGameOver } from './game.js';
import { destroyEnemy } from './enemy.js';

export function createLaser($game, x, y) {
  const $element = document.createElement('img');
  $element.src = 'img/laser-blue-1.png';
  $element.className = 'laser';
  $game.appendChild($element);
  const laser = { x, y, $element, isDead: false };
  GAME_STATE.lasers.push(laser);
  setPosition($element, x, y);
  const audio = new Audio('sound/sfx-laser1.ogg');
  audio.muted = GAME_STATE.isMuted;
  audio.play();
}

export function destroyLaser($game, laser) {
  $game.removeChild(laser.$element);
  laser.isDead = true;
}

export function destroyEnemyLaser($game, laser) {
  $game.removeChild(laser.$element);
  laser.isDead = true;
}

export function createEnemyLaser($game, x, y) {
  const $element = document.createElement('img');
  $element.src = 'img/laser-red-1.png';
  $element.className = 'enemy-laser';
  $game.appendChild($element);
  const laser = { x, y, $element, isDead: false };
  GAME_STATE.enemyLasers.push(laser);
  setPosition($element, x, y);
  const audio = new Audio('sound/sfx-laser2.ogg'); // Ensure this path is correct
  audio.muted = GAME_STATE.isMuted;
  audio.play();
}

export function updateEnemyLasers(dt, $game) {
  const enemyLasers = GAME_STATE.enemyLasers;
  for (let i = 0; i < enemyLasers.length; i++) {
    const laser = enemyLasers[i];
    laser.y += dt * ENEMY_LASER_SPEED;
    if (laser.y > GAME_HEIGHT) {
      destroyEnemyLaser($game, laser);
    } else {
      setPosition(laser.$element, laser.x, laser.y);
      const r1 = laser.$element.getBoundingClientRect();
      const $player = document.querySelector('.player');
      const r2 = $player.getBoundingClientRect();
      if (rectIntersect(r1, r2)) {
        destroyEnemyLaser($game, laser);
        GAME_STATE.lives--;
        updateHUD();
        if (GAME_STATE.lives <= 0) {
          showGameOver();
        }
      }
    }
  }
  GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(laser => !laser.isDead);
}

export function updateLasers(dt, $game) {
  const lasers = GAME_STATE.lasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y -= dt * LASER_MAX_SPEED;
    if (laser.y < 0) {
      destroyLaser($game, laser);
    } else {
      setPosition(laser.$element, laser.x, laser.y);
      const r1 = laser.$element.getBoundingClientRect();
      const enemies = GAME_STATE.enemies;
      for (let j = 0; j < enemies.length; j++) {
        const enemy = enemies[j];
        if (enemy.isDead) continue;
        const r2 = enemy.$element.getBoundingClientRect();
        if (rectIntersect(r1, r2)) {
          destroyEnemy($game, enemy);
          destroyLaser($game, laser);
          GAME_STATE.score += 10;
          if (GAME_STATE.enemies.every(enemy => enemy.isDead)) {
            showCongratulations();
          }
          break;
        }
      }
    }
  }
  GAME_STATE.lasers = GAME_STATE.lasers.filter(laser => !laser.isDead);
}
