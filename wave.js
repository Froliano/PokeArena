import Entity from './Entity.js';

let currentChapterNumber = 1;   
let currentChapter;
let currentWave;

async function setCurrentChapterchapter() {
    /*create a random chapter with 4 to 6 pokemon with the json*/
    currentChapter = [];
    let randomNumber = Math.floor(Math.random() * 3) + 4;

    let statsData = await fetch('pokemon_stats.json');
    statsData = await statsData.json();
    for (let i = 0; i < randomNumber; i++) {
        const randomIndex = Math.floor(Math.random() * statsData.length);
        let currentPokemon = statsData[randomIndex];
        currentChapter.push(currentPokemon);
    }
    setCurrentWave();
}

async function setCurrentWave() {
    /*create a wave with the current chapter pokemon and transform them in Entity*/
    currentWave = [];
    for (let pokemon of currentChapter) {
        let entity = new Entity(pokemon.name, pokemon.attack, pokemon.armor, pokemon.hp);
        currentWave.push(entity);
    }
}


export { currentChapter, currentWave, currentChapterNumber, setCurrentChapterchapter };