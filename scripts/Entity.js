import * as music from './Music.js';
const log = document.getElementById('log');

const pokemon = document.getElementById('opponent-pokemon');

function logMsg(message) {
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

class Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100) {
        this.name = name;
        this.currentHP = maxHP;
        this.maxHP = maxHP;
        this.attack = attack;
        this.armor = armor;
        this.isAlive = true;
    }

    actionAttack(defender) {
        let degats = this.attack * (100 / (100 + defender.armor));
        degats = Math.floor(degats); 
        defender.currentHP -= degats;
        if (defender.currentHP <= 0) {
            defender.currentHP = 0;
            defender.die();
        }
        pokemon.style.animation = 'pokemonOpponentAttack 0.3s ease-in-out';
        pokemon.addEventListener('animationend', () => {
            pokemon.style.animation = '';
        }, { once: true });
        music.attackSound();
        logMsg(`L'attaque ennemie inflige ${degats} degats.`);
    }


    die() {
        this.isAlive = false;
        pokemon.style.animation = 'pokemonKO 0.5s';
        pokemon.addEventListener('animationend', () => {
            music.pokeballOutSound();
            pokemon.style.animation = 'pokemonSpawning 1s';
            pokemon.addEventListener('animationend', () => {
                pokemon.style.animation = '';
            }, { once: true });
        }, { once: true });
    }
}

export default Entity;