import { logMsg, update, attackButton, gameOver, addapt, unlockNextChapter, player, currentEnnemy, setCurrentEnnemy, showMenu } from './scripts/Utils.js';
import {setCurrentChapter, allChapters, currentChapterNumber, setCurrentChapterNumber, setMaxChapterNumber, maxChapterNumber} from './scripts/Wave.js';
import {saveGame, loadGame}from './scripts/Save.js';
import * as music from './scripts/Music.js';

loadGame(player);

music.playBattleMusic();

let playerTurn = true;

const playerName = document.getElementById('pokemon-player');
const runButton = document.getElementById('run-button');
playerName.textContent = player.name;
const eeveeSelect = document.getElementById('player-eevee');
const pikachuSelect = document.getElementById('player-pikachu');

addapt(allChapters[currentChapterNumber].entityPokemon[currentEnnemy]);

update();
showMenu();

function winTheChapter() {
    setCurrentEnnemy(0);
    logMsg('Vous avez gagné le chapitre !');
    music.stopCurrentMusic();
    music.chapterWonSound();
    player.addMoney(100);
    gameOver('You completed the battle!')
    //win = true;
    setCurrentChapterNumber(currentChapterNumber + 1);
    setMaxChapterNumber(currentChapterNumber + 1);
    if(currentChapterNumber + 1 > allChapters.length) {
        setCurrentChapter(currentChapterNumber);
    }
    update(player);
    saveGame(player);
    unlockNextChapter();
}

function ennemisTurn() {
    allChapters[currentChapterNumber].entityPokemon[currentEnnemy].actionAttack(player);
    playerTurn = true;
    update();
    attackButton.disabled = false;
    

}

attackButton.addEventListener('click', () => {
    attackButton.disabled = true;
    player.actionAttack(allChapters[currentChapterNumber].entityPokemon[currentEnnemy]);
    playerTurn = false;
    if (!allChapters[currentChapterNumber].entityPokemon[currentEnnemy].isAlive) {
        logMsg(`${allChapters[currentChapterNumber].entityPokemon[currentEnnemy].name} a été vaincu !`);
        attackButton.disabled = false;

        if (allChapters[currentChapterNumber].entityPokemon.length === currentEnnemy + 1) {
            winTheChapter();
            return;
        }
        else {
            attackButton.disabled = true;
            setTimeout(() => {
                setCurrentEnnemy(currentEnnemy + 1);
                attackButton.disabled = false;
            }, 500);
        }
        playerTurn = true;

    }
    update();
    if(!playerTurn) {
        setTimeout(ennemisTurn, 100); 
    };
})

runButton.addEventListener('click', () => {
    logMsg('Vous avez fui le combat !');
    music.stopCurrentMusic();
    music.runSound();
    gameOver('You ran away!');
    // Reload save to previous state
    loadGame(player);
});

eeveeSelect.addEventListener('click', () => {
    // Check if player has 1000 money
    if (eeveeSelect.classList.contains('locked')) {
        if (player.money >= 1000) {
            player.currentMon = 'eevee.gif';
            player.name = 'Eevee';
            player.removeMoney(1000);
            player.refreshMon();
            eeveeSelect.classList.remove('locked')
            eeveeSelect.classList.add('selected');
            pikachuSelect.classList.remove('selected');
        }
    } else {
        player.currentMon = 'eevee.gif';
        player.name = 'Eevee';
        player.refreshMon();
        eeveeSelect.classList.add('selected');
        pikachuSelect.classList.remove('selected');
    }

});

pikachuSelect.addEventListener('click', () => {
    player.currentMon = 'pikachu-alola.gif';
    player.name = 'Pikachu';
    player.refreshMon();
    pikachuSelect.classList.add('selected');
    eeveeSelect.classList.remove('selected');
});