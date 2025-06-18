import { currentChapterNumber, setCurrentChapterNumber } from "./Wave.js";

function saveGame(player) {
    let gameState = {
        player: {
            name: player.name,
            currentHP: player.currentHP,
            maxHP: player.maxHP,
            attack: player.attack,
            armor: player.armor,
            xp: player.xp,
            level: player.level
        },
        currentChapterNumber: currentChapterNumber
    };
    
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGame(player) {
    let gameState = JSON.parse(localStorage.getItem('gameState'));
    if (gameState) {
        player.name = gameState.player.name;
        player.currentHP = gameState.player.currentHP;
        player.maxHP = gameState.player.maxHP;
        player.attack = gameState.player.attack;
        player.armor = gameState.player.armor;
        player.xp = gameState.player.xp;
        player.level = gameState.player.level;
        setCurrentChapterNumber(gameState.currentChapterNumber);
    }
}

export { saveGame, loadGame};