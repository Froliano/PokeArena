import Player from './Player.js';
import Entity from './Entity.js';
import { logMsg } from './utils.js';
import {currentChapter, currentWave, currentChapterNumber, setCurrentChapterchapter} from './wave.js';

const player = new Player('Heros', 100, 50, 200);

let playerTurn = true;
let win = false;

const playerHpBar = document.getElementById('player-hp');
const playerXpBar = document.getElementById('player-xp');
const opponentHpBar = document.getElementById('opponent-hp');
const playerHpText = document.getElementById('player-hp-text');
const opponentHpText = document.getElementById('opponent-hp-text');
const attackButton = document.getElementById('attack-button');
const playerName = document.getElementById('pokemon-player');
const opponentName = document.getElementById('pokemon-opponent');
const opponentImage = document.getElementById('opponent-pokemon');

playerName.textContent = player.name;

await setCurrentChapterchapter();
update();

async function update() {
    opponentName.textContent = currentWave[0].name;
    opponentImage.src = `https://play.pokemonshowdown.com/sprites/gen5ani/${currentChapter[0].sprite}`;
    playerHpBar.style.width = (player.currentHP / player.maxHP * 100) + '%';
    playerXpBar.style.width = (player.xp / 100 * 100) + '%';
    opponentHpBar.style.width = (currentWave[0].currentHP / currentWave[0].maxHP * 100) + '%';
    playerHpText.textContent = `${player.currentHP} / ${player.maxHP} HP`;
    opponentHpText.textContent = `${currentWave[0].currentHP} / ${currentWave[0].maxHP} HP`;
    attackButton.disabled = !playerTurn || win;
}

function winTheChapter() {
    logMsg('Vous avez gagné le chapitre !');
    win = true;
};
    

function ennemisTurn() {
    currentWave[0].actionAttack(player);
    playerTurn = true;
    update();
}

attackButton.addEventListener('click', () => {
    player.actionAttack(currentWave[0]);
    playerTurn = false;
    if (!currentWave[0].isAlive) {
        if (currentWave.length === 1) {
            winTheChapter();
        }
        else {
            currentWave.shift();
            currentChapter.shift();
        }
        playerTurn = true;
        logMsg(`${currentWave[0].name} a été vaincu !`);
    }
    update();
    if(!win && !playerTurn) {
        setTimeout(ennemisTurn, 1000); 
    };
})