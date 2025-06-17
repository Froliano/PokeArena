let joueur = {
    maxHP: 100,
    currentHP: 100,     
    armure: 50,
    attaque: 15,
    xp: 0,
    niveau: 1,
};

let slime = {
    maxHP: 30,
    currentHP: 30,
    armure: 10,
    attaque: 10
};

let gobelin = {
    maxHP: 50,
    currentHP: 50,
    armure: 20,
    attaque: 5
};

let ennemis = [slime, gobelin, gobelin, slime, gobelin];
let currentEnnemi = 0;
let playerTurn = true;

const log = document.getElementById('log');
const playerHpBar = document.getElementById('player-hp');
const opponentHpBar = document.getElementById('opponent-hp');
const playerHpText = document.getElementById('player-hp-text');
const opponentHpText = document.getElementById('opponent-hp-text');
const attackButton = document.getElementById('attack-button');

function attaquer(attaquant, defenseur) {
    let degats = attaquant.attaque * (100 / (100 + defenseur.armure)); //formule de dégâts lol
    defenseur.currentHP -= degats;
    if (defenseur.currentHP < 0) {
        defenseur.currentHP = 0;
        die(defenseur);
        xpGain(attaquant);
    }
    logMsg(`${attaquant} attaque ${defenseur} et inflige ${degats} dégâts.`);
}

function xpGain(joueur) {
    joueur.xp += 10;
    logMsg(`Vous avez gagné 10 XP. Total XP: ${joueur.xp}`);
    if (joueur.xp >= 100) {
        joueur.niveau++;
        joueur.xp = 0;
    }
}

function die(monstre) {
    if (currentEnnemi < ennemis.length - 1) {
        currentEnnemi++;
        logMsg(`Le monstre ${monstre} est mort. Vous passez au monstre suivant.`);
    }
}

function logMsg(message) {
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

function update() {
    playerHpBar.style.width = (player.currentHP / player.maxHP * 100) + '%';
    opponentHpBar.style.width = (ennemis[currentEnnemi].currentHP / ennemis[currentEnnemi].maxHP * 100) + '%';
    playerHpText.textContent = `${player.currentHP} / ${player.maxHp} HP`;
    opponentHpText.textContent = `${ennemis[currentEnnemi].currentHP} / ${ennemis[currentEnnemi].maxHp} HP`;
    attackButton.disabled = !playerTurn || player.currentEnnemi == 0 
}

function ennemisTurn() {
    attaquer(ennemis[currentEnnemi], joueur);
    playerTurn = true;
    update();
}

attackButton.addEventListener('click', () => {
    attaquer(joueur, ennemis[currentEnnemi]);
    playerTurn = false;
    update();
    setTimeout(ennemisTurn, 1000); // Attendre avant que l'ennemi attaque
})