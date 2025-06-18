import Player from './scripts/Player.js';
import { logMsg, update, attackButton } from './scripts/Utils.js';
import {currentChapter, setCurrentChapter, allChapters, currentChapterNumber} from './scripts/Wave.js';
import {saveGame, loadGame}from './scripts/Save.js';
import * as music from './scripts/Music.js';

const player = new Player('Heros', 100, 50, 200);
loadGame(player);

music.playBattleMusic();

let playerTurn = true;
let win = false;

const playerName = document.getElementById('pokemon-player');
playerName.textContent = player.name;

if(currentChapterNumber > allChapters.length) {
    await setCurrentChapter();
}
update(player, playerTurn, win);

function winTheChapter() {
    logMsg('Vous avez gagné le chapitre !');
    win = true;
    saveGame(player);
    attackButton.disabled = true;

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
        }
        else {
            allChapters[currentChapterNumber].entityPokemon.shift();
            allChapters[currentChapterNumber].jsonPokemon.shift();
        }
        playerTurn = true;

    }
    update(player, playerTurn, win);
    if(!win && !playerTurn) {
        setTimeout(ennemisTurn, 1000); 
    };
})