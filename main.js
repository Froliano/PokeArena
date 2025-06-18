import { logMsg, update, attackButton, gameOver, addapt, unlockNextChapter, player, currentEnnemy, setCurrentEnnemy } from './scripts/Utils.js';
import {setCurrentChapter, allChapters, currentChapterNumber, setCurrentChapterNumber, setMaxChapterNumber, maxChapterNumber} from './scripts/Wave.js';
import {saveGame, loadGame}from './scripts/Save.js';
import * as music from './scripts/Music.js';

loadGame(player);

music.playBattleMusic();

let playerTurn = true;

const playerName = document.getElementById('pokemon-player');
playerName.textContent = player.name;

addapt(allChapters[currentChapterNumber].entityPokemon[currentEnnemy]);

update();

function winTheChapter() {
    setCurrentEnnemy(0);
    logMsg('Vous avez gagné le chapitre !');
    music.stopCurrentMusic();
    music.chapterWonSound();
    gameOver('You completed the battle!')
    setCurrentChapterNumber(currentChapterNumber + 1);
    setMaxChapterNumber(Math.max(currentChapterNumber + 1, maxChapterNumber));
    if(currentChapterNumber + 1 > allChapters.length) {
        setCurrentChapter(currentChapterNumber + 1);
    }
    saveGame(player);
    unlockNextChapter();
;
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
            allChapters[currentChapterNumber].entityPokemon[currentEnnemy].currentHP = allChapters[currentChapterNumber].entityPokemon[currentEnnemy].maxHP;
            setCurrentEnnemy(currentEnnemy + 1);
            console.log(allChapters[currentChapterNumber].entityPokemon[currentEnnemy].currentHP, allChapters[currentChapterNumber].entityPokemon[currentEnnemy].maxHP);
            addapt(allChapters[currentChapterNumber].entityPokemon[currentEnnemy]);
            console.log(allChapters[currentChapterNumber].entityPokemon[currentEnnemy].currentHP, allChapters[currentChapterNumber].entityPokemon[currentEnnemy].maxHP);
        }
        playerTurn = true;

    }
    update();
    if(!playerTurn) {
        setTimeout(ennemisTurn, 100); 
    };
})