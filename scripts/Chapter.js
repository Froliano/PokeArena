class Chapter
{
    constructor(id, jsonPokemon = [], entityPokemon = [], trainer="aaron") {
        this.id = id;
        this.jsonPokemon = jsonPokemon;
        this.entityPokemon = entityPokemon;
        this.trainer = trainer;
        const chapterIcon = document.getElementById(`chapter-${this.id}`).querySelector(".chapter-cover-trainer");
        chapterIcon.src = `https://play.pokemonshowdown.com/sprites/trainers/${trainer}.png`;
    }

    async updateChapterIcon() {
        const trainerImg = document.getElementById("opponent-trainer");
        trainerImg.src = `https://play.pokemonshowdown.com/sprites/trainers/${trainer}.png`;
    }

    
}

export default Chapter;
