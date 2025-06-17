import Player from './player.js';
import Entity from './Entity.js';

const player = new Player('Héros', 10, 20, 100);

const slime = new Entity('Slime', 10, 5, 20);
const gobelin = new Entity('Gobelin', 15, 10, 30);

let ennemiesChapiter1 = [slime, gobelin];
let playerTurn = true;
let win = false;


const log = document.getElementById('log');
const playerHpBar = document.getElementById('player-hp');
const playerXpBar = document.getElementById('player-xp');
const opponentHpBar = document.getElementById('opponent-hp');
const playerHpText = document.getElementById('player-hp-text');
const opponentHpText = document.getElementById('opponent-hp-text');
const attackButton = document.getElementById('attack-button');

update();

function attack(attacker, defender) {
    let degats = attacker.attack * (100 / (100 + defender.armor)); //formule de dégâts lol
    degats = Math.floor(degats); 
    defender.takeDamage(degats);
    if (defender.currentHP <= 0) {
        if (ennemiesChapiter1.length === 1) {
            winTheChapter();
            return;
        }
        ennemiesChapiter1.shift();

        playerTurn = false;
    }
    playerTurn = !playerTurn;
    logMsg(`attaque qui inflige ${degats} dégâts.`);
}


function logMsg(message) {
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

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
        attack(ennemiesChapiter1[0], player);
        update();
}

attackButton.addEventListener('click', () => {
    attack(player, ennemiesChapiter1[0]);
    update();
    if(!win && !playerTurn) {
        setTimeout(ennemisTurn, 1000); 
    };
})