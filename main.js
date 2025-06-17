import Player from './Player.js';
import Entity from './Entity.js';
import { logMsg } from './utils.js';

const player = new Player('Héros', 10, 20, 100);

const slime = new Entity('Slime', 10, 5, 20);
const gobelin = new Entity('Gobelin', 15, 10, 30);

let ennemiesChapiter1 = [slime, gobelin];
let playerTurn = true;
let win = false;

const playerHpBar = document.getElementById('player-hp');
const playerXpBar = document.getElementById('player-xp');
const opponentHpBar = document.getElementById('opponent-hp');
const playerHpText = document.getElementById('player-hp-text');
const opponentHpText = document.getElementById('opponent-hp-text');
const attackButton = document.getElementById('attack-button');

update();



function update() {
    playerHpBar.style.width = (player.currentHP / player.maxHP * 100) + '%';
    playerXpBar.style.width = (player.xp / 100 * 100) + '%';
    opponentHpBar.style.width = (ennemiesChapiter1[0].currentHP / ennemiesChapiter1[0].maxHP * 100) + '%';
    playerHpText.textContent = `${player.currentHP} / ${player.maxHP} HP`;
    opponentHpText.textContent = `${ennemiesChapiter1[0].currentHP} / ${ennemiesChapiter1[0].maxHP} HP`;
    attackButton.disabled = !playerTurn || win;
}

function winTheChapter() {
    console.log('Vous avez gagné le chapitre !');
    win = true;
};
    

function ennemisTurn() {
    ennemiesChapiter1[0].actionAttack(player);
    playerTurn = true;
    update();
}

attackButton.addEventListener('click', () => {
    player.actionAttack(ennemiesChapiter1[0]);
    playerTurn = false;
    if (!ennemiesChapiter1[0].isAlive) {
        if (ennemiesChapiter1.length === 1) {
            winTheChapter();
        }
        else {
            ennemiesChapiter1.shift();
        }
        playerTurn = true;
        logMsg(`${ennemiesChapiter1[0].name} a été vaincu !`);
    }
    update();
    if(!win && !playerTurn) {
        setTimeout(ennemisTurn, 1000); 
    };
})