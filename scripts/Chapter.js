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
                const div = document.createElement("div");
                div.id = `chapter${this.id}`;
                div.className = "chapter-cover";

                const trainerImg = document.createElement("img");
                trainerImg.className = "chapter-cover-trainer";
                trainerImg.src = `https://play.pokemonshowdown.com/sprites/trainers/${this.trainer}.png`;

                const decorationImg = document.createElement("img");
                decorationImg.className = "chapter-cover-decoration";
                decorationImg.src = "/assets/img/pokeball.png";

                const span = document.createElement("span");
                span.textContent = `Battle ${this.id}`;

                div.appendChild(trainerImg);
                div.appendChild(decorationImg);
                div.appendChild(span);

                chapterSelection.appendChild(div);
            }
        }
    }

    async updateChapterIcon() {
        const trainerImg = document.getElementById("opponent-trainer");
        trainerImg.src = `https://play.pokemonshowdown.com/sprites/trainers/${this.trainer}.png`;
    }

    
}

export default Chapter;
