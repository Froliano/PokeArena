import Entity from "./Entity.js";
import Chapter from "./Chapter.js";

let chapter1 = new Chapter(1, [
    {
        "name": "Magmar",
        "attack": 62,
        "armor": 86,
        "hp": 82,
        "sprite": "magmar.gif"
    },
    {
        "name": "Kabuto",
        "attack": 60,
        "armor": 86,
        "hp": 87,
        "sprite": "kabuto.gif"
    },
    {
        "name": "Vaporeon",
        "attack": 61,
        "armor": 65,
        "hp": 89,
        "sprite": "vaporeon.gif"
    },
    {
        "name": "Dodrio",
        "attack": 87,
        "armor": 79,
        "hp": 74,
        "sprite": "dodrio.gif"
    },
    {
        "name": "Doduo",
        "attack": 82,
        "armor": 83,
        "hp": 82,
        "sprite": "doduo.gif"
    },
    {
        "name": "Exeggutor",
        "attack": 68,
        "armor": 77,
        "hp": 79,
        "sprite": "exeggutor.gif"
    }
], 
[
    new Entity("Magmar", 62, 86, 82),
    new Entity("Kabuto", 60, 86, 87),
    new Entity("Vaporeon", 61, 65, 89),
    new Entity("Dodrio", 87, 79, 74),
    new Entity("Doduo", 82, 83, 82),
    new Entity("Exeggutor", 68, 77, 79)
], "camper-gen6");

let chapter2 = new Chapter(2, [
    {
        "name": "Vaporeon",
        "attack": 61,
        "armor": 65,
        "hp": 89,
        "sprite": "vaporeon.gif"
    },
    {
        "name": "Pinsir",
        "attack": 76,
        "armor": 78,
        "hp": 67,
        "sprite": "pinsir.gif"
    },
    {
        "name": "Charmander",
        "attack": 85,
        "armor": 76,
        "hp": 76,
        "sprite": "charmander.gif"
    },
    {
        "name": "Magmar",
        "attack": 62,
        "armor": 86,
        "hp": 82,
        "sprite": "magmar.gif"
    },
    {
        "name": "Cloyster",
        "attack": 84,
        "armor": 67,
        "hp": 81,
        "sprite": "cloyster.gif"
    }
], 
[
    new Entity("Vaporeon", 61, 65, 89),
    new Entity("Pinsir", 76, 78, 67),
    new Entity("Charmander", 85, 76, 76),
    new Entity("Magmar", 62, 86, 82),
    new Entity("Cloyster", 84, 67, 81)
], "hilbert-wonderlauncher");

let chapter3 = new Chapter(3, [
    {
        "name": "Parasect",
        "attack": 90,
        "armor": 84,
        "hp": 61,
        "sprite": "parasect.gif"
    },
    {
        "name": "Kabutops",
        "attack": 60,
        "armor": 61,
        "hp": 85,
        "sprite": "kabutops.gif"
    },
    {
        "name": "Bulbasaur",
        "attack": 64,
        "armor": 70,
        "hp": 78,
        "sprite": "bulbasaur.gif"
    },
    {
        "name": "Onix",
        "attack": 79,
        "armor": 75,
        "hp": 90,
        "sprite": "onix.gif"
    },
    {
        "name": "Venusaur",
        "attack": 66,
        "armor": 86,
        "hp": 62,
        "sprite": "venusaur.gif"
    },
    {
        "name": "Dodrio",
        "attack": 87,
        "armor": 79,
        "hp": 74,
        "sprite": "dodrio.gif"
    }
], 
[
    new Entity("Parasect", 90, 84, 61),
    new Entity("Kabutops", 60, 61, 85),
    new Entity("Bulbasaur", 64, 70, 78),
    new Entity("Onix", 79, 75, 90),
    new Entity("Venusaur", 66, 86, 62),
    new Entity("Dodrio", 87, 79, 74)
], "n-masters");

let chapter4 = new Chapter(4, [
    {
        "name": "Porygon",
        "attack": 81,
        "armor": 81,
        "hp": 83,
        "sprite": "porygon.gif"
    },
    {
        "name": "Geodude",
        "attack": 65,
        "armor": 62,
        "hp": 63,
        "sprite": "geodude.gif"
    },
    {
        "name": "Dratini",
        "attack": 85,
        "armor": 60,
        "hp": 89,
        "sprite": "dratini.gif"
    },
    {
        "name": "Kakuna",
        "attack": 82,
        "armor": 90,
        "hp": 87,
        "sprite": "kakuna.gif"
    },
    {
        "name": "Poliwhirl",
        "attack": 63,
        "armor": 87,
        "hp": 88,
        "sprite": "poliwhirl.gif"
    }
],
[
    new Entity("Porygon", 81, 81, 83),
    new Entity("Geodude", 65, 62, 63),
    new Entity("Dratini", 85, 60, 89),
    new Entity("Kakuna", 82, 90, 87),
    new Entity("Poliwhirl", 63, 87, 88)
], "blue-masters");

let chapter5 = new Chapter(5, [
    {
        "name": "Poliwag",
        "attack": 88,
        "armor": 79,
        "hp": 66,
        "sprite": "poliwag.gif"
    },
    {
        "name": "Magnemite",
        "attack": 89,
        "armor": 81,
        "hp": 73,
        "sprite": "magnemite.gif"
    },
    {
        "name": "Mewtwo",
        "attack": 63,
        "armor": 88,
        "hp": 68,
        "sprite": "mewtwo.gif"
    },
    {
        "name": "Golduck",
        "attack": 82,
        "armor": 87,
        "hp": 60,
        "sprite": "golduck.gif"
    },
    {
        "name": "Jolteon",
        "attack": 61,
        "armor": 72,
        "hp": 78,
        "sprite": "jolteon.gif"
    }
],
[
    new Entity("Poliwag", 88, 79, 66),
    new Entity("Magnemite", 89, 81, 73),
    new Entity("Mewtwo", 63, 88, 68),
    new Entity("Golduck", 82, 87, 60),
    new Entity("Jolteon", 61, 72, 78)
], "red-masters");

let chapter6 = new Chapter(6, [
    {
        "name": "Electrode",
        "attack": 67,
        "armor": 77,
        "hp": 81,
        "sprite": "electrode.gif"
    },
    {
        "name": "Venonat",
        "attack": 66,
        "armor": 77,
        "hp": 90,
        "sprite": "venonat.gif"
    },
    {
        "name": "Moltres",
        "attack": 71,
        "armor": 74,
        "hp": 80,
        "sprite": "moltres.gif"
    },
    {
        "name": "Zapdos",
        "attack": 80,
        "armor": 87,
        "hp": 85,
        "sprite": "zapdos.gif"
    },
    {
        "name": "Haunter",
        "attack": 89,
        "armor": 89,
        "hp": 84,
        "sprite": "haunter.gif"
    },
    {
        "name": "Spearow",
        "attack": 67,
        "armor": 65,
        "hp": 80,
        "sprite": "spearow.gif"
    }
],
[
    new Entity("Electrode", 67, 77, 81),
    new Entity("Venonat", 66, 77, 90),
    new Entity("Moltres", 71, 74, 80),
    new Entity("Zapdos", 80, 87, 85),
    new Entity("Haunter", 89, 89, 84),
    new Entity("Spearow", 67, 65, 80)
], "cynthia-gen7");

export {chapter1, chapter2, chapter3, chapter4, chapter5, chapter6};
