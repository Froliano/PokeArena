import Player from './scripts/Player.js';
import { logMsg, update, attackButton } from './scripts/Utils.js';
import {currentChapter, currentWave, setCurrentChapter} from './scripts/Wave.js';
import {saveGame, loadGame}from './scripts/Save.js';

const player = new Player('Heros', 100, 50, 200);
loadGame(player);

let playerTurn = true;
let win = false;

const playerName = document.getElementById('pokemon-player');
playerName.textContent = player.name;

await setCurrentChapter();
update(player, playerTurn, win);

function winTheChapter() {
    logMsg('Vous avez gagné le chapitre !');
    win = true;
    saveGame(player);
    attackButton.disabled = true;

};
    

function ennemisTurn() {
    currentWave[0].actionAttack(player);
    playerTurn = true;
    update(player);
    attackButton.disabled = false;

}

attackButton.addEventListener('click', () => {
    attackButton.disabled = true;
    player.actionAttack(currentWave[0]);
    playerTurn = false;
    if (!currentWave[0].isAlive) {
        logMsg(`${currentWave[0].name} a été vaincu !`);
        attackButton.disabled = false;

        if (currentWave.length === 1) {
            winTheChapter();
        }
        else {
            currentWave.shift();
            currentChapter.shift();
        }
        playerTurn = true;

    }
    update(player, playerTurn, win);
    if(!win && !playerTurn) {
        setTimeout(ennemisTurn, 1000); 
    };
})