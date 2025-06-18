import {currentChapterNumber, activePokeball, allChapters, maxChapterNumber} from './Wave.js';
import * as music from './Music.js';
import Player from './Player.js';


const player = new Player('Pikachu', 150, 80, 200);
let currentEnnemy = 0;


const log = document.getElementById('log');
const upgradeMenuButton = document.getElementById('upgrade-screen');
const attackUpgradeButton = document.getElementById('atk-stat');
const armorUpgradeButton = document.getElementById('def-stat');
const maxHpUpgradeButton = document.getElementById('hp-stat');
const healButton = document.getElementById('heal-stat');
const playerStats = document.getElementById('player-stats');

const playerHpBar = document.getElementById('player-hp');
const playerXpBar = document.getElementById('player-xp');
const opponentHpBar = document.getElementById('opponent-hp');
const playerHpText = document.getElementById('player-hp-text');
const opponentHpText = document.getElementById('opponent-hp-text');
const attackButton = document.getElementById('attack-button');
const opponentName = document.getElementById('pokemon-opponent');
const opponentImage = document.getElementById('opponent-pokemon');

const menu = document.getElementById('menu');

function logMsg(message) {
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

function upgradeMenu(player)
{
    upgradeMenuButton.classList.add('active');
    healButton.classList.add('active');

    playerStats.addEventListener('click', (event) => {
        const clickedId = event.target.id;
        if(clickedId === 'atk-stat') {
            player.upgradeAttack();
        }
        else if(clickedId === 'def-stat') {
            player.upgradeArmor();
        }
        else if(clickedId === 'hp-stat') {
            player.upgradeMaxHP();
        }
        else if(clickedId === 'heal-stat') {
            player.heal();
        }
        upgradeMenuButton.classList.remove('active');
        healButton.classList.remove('active');
        update();
    }, { once: true });

}

function update() {

    opponentName.textContent = allChapters[currentChapterNumber].entityPokemon[currentEnnemy].name;
    activePokeball(allChapters[currentChapterNumber].entityPokemon.length, currentEnnemy);
    allChapters[currentChapterNumber].updateChapterIcon();
    
    attackUpgradeButton.querySelector(".stat-value").textContent = player.attack;
    armorUpgradeButton.querySelector(".stat-value").textContent = player.armor;
    maxHpUpgradeButton.querySelector(".stat-value").textContent = player.maxHP;
    
    opponentImage.src = `https://play.pokemonshowdown.com/sprites/gen5ani/${allChapters[currentChapterNumber].jsonPokemon[currentEnnemy].sprite}`;
    playerHpBar.style.width = (player.currentHP / player.maxHP * 100) + '%';
    playerXpBar.style.width = (player.xp / 100 * 100) + '%';
    opponentHpBar.style.width = (allChapters[currentChapterNumber].entityPokemon[currentEnnemy].currentHP / allChapters[currentChapterNumber].entityPokemon[currentEnnemy].maxHP * 100) + '%';
    playerHpText.textContent = `${player.currentHP} / ${player.maxHP} HP`;
    opponentHpText.textContent = `${allChapters[currentChapterNumber].entityPokemon[currentEnnemy].currentHP} / ${allChapters[currentChapterNumber].entityPokemon[currentEnnemy].maxHP} HP`;
}

function showMenu() {
    if (!menu.classList.contains('active')) {
        menu.classList.remove('inactive');
        menu.classList.add('active');
        music.stopCurrentMusic();
        music.playMenuMusic();
    }
}

function hideMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.add('inactive');
        music.stopCurrentMusic();
        music.playBattleMusic();
    }
}

function gameOver(message) {
    document.getElementById('game-over').classList.add('active');
    document.getElementById('game-over-message').textContent = message;
    setTimeout(() => {
        document.getElementById('game-over').classList.remove('active');
        showMenu();
    }, 3000);
}

function addapt(entity)
{
    entity.maxHP = entity.maxHP + (currentChapterNumber * 10);
    entity.currentHP = entity.maxHP;
    entity.attack = entity.attack + (currentChapterNumber * 3);
    entity.armor = entity.armor + (currentChapterNumber * 3);
    update();
}

function unlockNextChapter() {
    for (let i = 1; i <= maxChapterNumber; i++) {
        if (i <= 6) {
            const chapterElement = document.getElementById(`chapter${i}`).classList.remove("locked");
        }
    }
}

function setCurrentEnnemy(index) {
    currentEnnemy = index;
    addapt(allChapters[currentChapterNumber].entityPokemon[currentEnnemy]);
}

window.showMenu = showMenu;
window.hideMenu = hideMenu;
export { 
    logMsg, 
    upgradeMenu,
    update,
    attackButton,
    unlockNextChapter,
    showMenu,
    hideMenu,
    gameOver,
    addapt,
    setCurrentEnnemy,
    player,
    currentEnnemy,
};
