import { GAME_STATE, ENEMY_LASER_COOLDOWN, ENEMY_LASER_SPEED, GAME_HEIGHT, setPosition, rectIntersect, updateHUD } from './game.js';
import { destroyEnemyLaser, createEnemyLaser } from './laser.js';


export function createEnemy($game, x, y) {
  const $element = document.createElement('img');
  $element.src = 'img/enemy-red-2.png';
  $element.className = 'enemy';
  $game.appendChild($element);
  const enemy = { x, y, $element, isDead: false, cooldown: ENEMY_LASER_COOLDOWN };
  GAME_STATE.enemies.push(enemy);
  setPosition($element, x, y);
}

export function destroyEnemy($game, enemy) {
  $game.removeChild(enemy.$element);
  enemy.isDead = true;
}

export function updateEnemies(dt, $game) {
  const dx = Math.sin(GAME_STATE.lastTime / 1000.0) * 50;
  const dy = Math.cos(GAME_STATE.lastTime / 1000.0) * 10;

  const enemies = GAME_STATE.enemies;
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    if (enemy.isDead) continue;

    const x = enemy.x + dx;
    const y = enemy.y + dy;
    setPosition(enemy.$element, x, y);

    if (y + enemy.$element.height > GAME_HEIGHT) {
      showGameOver();
      break;
    }

    if (enemy.cooldown <= 0) {
      if (Math.random() < 0.05) {
        createEnemyLaser($game, x, y);
        enemy.cooldown = ENEMY_LASER_COOLDOWN;
      }
    } else {
      enemy.cooldown -= dt;
    }
  }
}