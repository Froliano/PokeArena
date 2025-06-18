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
], "ash-hoenn");

export {chapter1};