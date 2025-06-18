import Player from './scripts/Player.js';
import { logMsg, update, attackButton, gameOver } from './scripts/Utils.js';
import {setCurrentChapter, allChapters, currentChapterNumber, setCurrentChapterNumber} from './scripts/Wave.js';
import {saveGame, loadGame}from './scripts/Save.js';
import * as music from './scripts/Music.js';

const player = new Player('Pikachu', 150, 80, 200);
loadGame(player);

music.playBattleMusic();

let playerTurn = true;
let win = false;

const playerName = document.getElementById('pokemon-player');
playerName.textContent = player.name;

update(player);

    function winTheChapter() {
    logMsg('Vous avez gagné le chapitre !');
    music.stopCurrentMusic();
    music.chapterWonSound();
    gameOver('You completed the battle!')
    //win = true;
    setCurrentChapterNumber(currentChapterNumber + 1);
    if(currentChapterNumber + 1 > allChapters.length) {
        setCurrentChapter(currentChapterNumber);
    }
    update(player);
    saveGame(player);
};
    

function ennemisTurn() {
    allChapters[currentChapterNumber].entityPokemon[0].actionAttack(player);
    playerTurn = true;
    update(player);
    attackButton.disabled = false;
    

}

attackButton.addEventListener('click', () => {
    attackButton.disabled = true;
    player.actionAttack(allChapters[currentChapterNumber].entityPokemon[0]);
    playerTurn = false;
    if (!allChapters[currentChapterNumber].entityPokemon[0].isAlive) {
        logMsg(`${allChapters[currentChapterNumber].entityPokemon[0].name} a été vaincu !`);
        attackButton.disabled = false;

        if (allChapters[currentChapterNumber].entityPokemon.length === 1) {
            winTheChapter();
            return;
        }
        else {
            allChapters[currentChapterNumber].entityPokemon.shift();
            allChapters[currentChapterNumber].jsonPokemon.shift();
        }
        playerTurn = true;

    }
    update(player);
    if(!win && !playerTurn) {
        setTimeout(ennemisTurn, 100); 
    };
})