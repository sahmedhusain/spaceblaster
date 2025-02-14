import { GAME_STATE, startGame, pauseGame, isGameRunning } from './game.js';
import { KEY_CODE_LEFT, KEY_CODE_RIGHT, KEY_CODE_SPACE } from './game.js';

export function toggleMute() {
  GAME_STATE.isMuted = !GAME_STATE.isMuted;
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audio => {
    audio.muted = GAME_STATE.isMuted;
  });
}

export function onKeyDown(event) {
  if (event.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = true;
  } else if (event.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = true;
  } else if (event.keyCode === KEY_CODE_SPACE) {
    if (!isGameRunning) {
      startGame();
    } else {
      GAME_STATE.spacePressed = true;
    }
  } else if (event.keyCode === 80) { // 'P' key
    pauseGame();
  } else if (event.keyCode === 77) { // 'M' key
    toggleMute();
  }
}

export function onKeyUp(event) {
  if (event.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = false;
  } else if (event.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = false;
  } else if (event.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = false;
  }
}