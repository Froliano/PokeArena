import * as music from './Music.js';
const log = document.getElementById('log');

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
        music.attackSound();
        logMsg(`attaque qui inflige ${degats} dégâts.`);
    }


    die() {
        this.isAlive = false;
    }
}

export default Entity;