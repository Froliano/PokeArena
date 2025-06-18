import Entity from "./Entity.js";
import Chapter from "./Chapter.js";
import {chapter1, chapter2, chapter3, chapter4, chapter5, chapter6} from "./initChapter.js";

let currentChapterNumber = 0;

let allChapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6];

let currentChapter;
let currentWave;

const pokeball = document.querySelectorAll("#opponent-amount img");

async function setCurrentChapter() {
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
  console.log(currentChapter);
  let newChapter = new Chapter(currentChapterNumber, currentChapter, currentWave);
  allChapters.push(newChapter);
}

async function setCurrentWave() {
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

function activePokeball(number) {
  for (let i = 0; i < 6; i++) {
    if (i < number) {
      pokeball[i].classList.remove("none");
    } else {
      pokeball[i].classList.add("none");
    }
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
  allChapters
};