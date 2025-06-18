import Entity from "./Entity.js";

let currentChapterNumber = 1;
let currentChapter;
let currentWave;

const pokeball = document.querySelectorAll("#opponent-amount img");

async function setCurrentChapter() {
  /*create a random chapter with 4 to 6 pokemon with the json*/
  currentChapter = [];
  let randomNumber = Math.floor(Math.random() * 3) + 4;

  let statsData = await fetch("pokemon_stats.json");
  statsData = await statsData.json();
  for (let i = 0; i < randomNumber; i++) {
    const randomIndex = Math.floor(Math.random() * statsData.length);
    let currentPokemon = statsData[randomIndex];
    currentChapter.push(currentPokemon);
  }
  setCurrentWave();
}

function activePokeball(number) {
  for (let i = 0; i < 6; i++) {
    if (i < number) {
      pokeball[i].classList.remove("none");
    } else {
      pokeball[i].classList.add("none");
    }
  }
}

async function setCurrentWave() {
  /*create a wave with the current chapter pokemon and transform them in Entity*/
  currentWave = [];
  for (let pokemon of currentChapter) {
    let entity = new Entity(
      pokemon.name,
      pokemon.attack,
      pokemon.armor,
      pokemon.hp
    );
    currentWave.push(entity);
  }
}

function setCurrentChapterNumber(number) {
  currentChapterNumber = number;
}

export {
  currentChapter,
  currentWave,
  currentChapterNumber,
  setCurrentChapter,
  setCurrentChapterNumber,
  activePokeball,
};
