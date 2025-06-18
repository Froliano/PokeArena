import { addapt, hideMenu, update } from "./Utils.js";
import { setCurrentChapterNumber, currentChapterNumber, allChapters } from "./Wave.js";

class Chapter
{
    constructor(id, jsonPokemon = [], entityPokemon = [], trainer="aaron") {
        this.id = id;
        this.jsonPokemon = jsonPokemon;
        this.entityPokemon = entityPokemon;
        this.trainer = trainer;
        const chapterElement = document.getElementById(`chapter${this.id}`);
        if (chapterElement) {
            const chapterIcon = chapterElement.querySelector(".chapter-cover-trainer");
            chapterIcon.src = `https://play.pokemonshowdown.com/sprites/trainers/${this.trainer}.png`;
        }
        else
        {
            const chapterSelection = document.getElementById("chapter-selection");
            if (chapterSelection) {
                const chapterElement = document.createElement("div");
                chapterElement.id = `chapter${this.id}`;
                chapterElement.className = "chapter-cover";
                
                const trainerImg = document.createElement("img");
                trainerImg.className = "chapter-cover-trainer";
                trainerImg.src = `https://play.pokemonshowdown.com/sprites/trainers/${this.trainer}.png`;
                
                const decorationImg = document.createElement("img");
                decorationImg.className = "chapter-cover-decoration";
                decorationImg.src = "/assets/img/pokeball.png";
                
                const span = document.createElement("span");
                span.textContent = `Battle ${this.id}`;
                
                chapterElement.appendChild(trainerImg);
                chapterElement.appendChild(decorationImg);
                chapterElement.appendChild(span);
                
                chapterSelection.appendChild(chapterElement);
            }
        }

        document.getElementById(`chapter${this.id}`).addEventListener("click", () => {
            console.log(`Chapter ${this.id} selected`);
            setCurrentChapterNumber(this.id - 1);
            console.log(`Current chapter number set to ${currentChapterNumber}`);
            update()
            addapt(allChapters[currentChapterNumber].entityPokemon[0]);
            hideMenu();
        });

    }

    updateChapterIcon() {
        const trainerImg = document.getElementById("opponent-trainer");
        trainerImg.src = `https://play.pokemonshowdown.com/sprites/trainers/${this.trainer}.png`;
    }

    
}

export default Chapter;
