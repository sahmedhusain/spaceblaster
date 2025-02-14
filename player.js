import { GAME_STATE, GAME_WIDTH, PLAYER_WIDTH, PLAYER_MAX_SPEED, LASER_COOLDOWN, setPosition, clamp } from './game.js';
import { createLaser } from './laser.js';

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

export function createPlayer($game) {
  const $player = document.createElement('img');
  $player.src = 'img/player-blue-1.png';
  $player.className = 'player';
  $game.appendChild($player);
  setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

export function updatePlayer(dt, $game) {
  if (GAME_STATE.leftPressed) {
    GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED;
  }
  if (GAME_STATE.rightPressed) {
    GAME_STATE.playerX += dt * PLAYER_MAX_SPEED;
  }

  GAME_STATE.playerX = clamp(GAME_STATE.playerX, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);

  if (GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0) {
    createLaser($game, GAME_STATE.playerX, GAME_STATE.playerY);
    GAME_STATE.playerCooldown = LASER_COOLDOWN;
  }
  if (GAME_STATE.playerCooldown > 0) {
    GAME_STATE.playerCooldown -= dt;
  }

  const $player = document.querySelector('.player');
  setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}