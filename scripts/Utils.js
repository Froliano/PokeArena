import {currentChapterNumber, activePokeball, allChapters} from './Wave.js';
import * as music from './Music.js';

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
        update(player);
    }, { once: true });

}

function update(player) {
    opponentName.textContent = allChapters[currentChapterNumber].entityPokemon[0].name;
    activePokeball(allChapters[currentChapterNumber].jsonPokemon.length);
    allChapters[currentChapterNumber].updateChapterIcon();
    
    attackUpgradeButton.querySelector(".stat-value").textContent = player.attack;
    armorUpgradeButton.querySelector(".stat-value").textContent = player.armor;
    maxHpUpgradeButton.querySelector(".stat-value").textContent = player.maxHP;
    
    opponentImage.src = `https://play.pokemonshowdown.com/sprites/gen5ani/${allChapters[currentChapterNumber].jsonPokemon[0].sprite}`;
    playerHpBar.style.width = (player.currentHP / player.maxHP * 100) + '%';
    playerXpBar.style.width = (player.xp / 100 * 100) + '%';
    opponentHpBar.style.width = (allChapters[currentChapterNumber].entityPokemon[0].currentHP / allChapters[currentChapterNumber].entityPokemon[0].maxHP * 100) + '%';
    playerHpText.textContent = `${player.currentHP} / ${player.maxHP} HP`;
    opponentHpText.textContent = `${allChapters[currentChapterNumber].entityPokemon[0].currentHP} / ${allChapters[currentChapterNumber].entityPokemon[0].maxHP} HP`;
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

window.showMenu = showMenu;
window.hideMenu = hideMenu;
export { 
    logMsg, 
    upgradeMenu,
    update,
    attackButton,
    showMenu,
    hideMenu,
};
