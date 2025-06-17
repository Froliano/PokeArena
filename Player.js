import Entity from './Entity.js';
import { logMsg } from './utils.js';

class Player extends Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100, level = 1) {
        super(name, attack, armor, maxHP);
        this.level = level;
        this.xp = 60;
    }

    die() {
        console.log(`${this.name} has died.`);
    }

    winXP(amount) {
        this.xp += amount;
        console.log(`${this.name} gained ${amount} XP. Total XP: ${this.xp}`);
        if (this.xp >= 100) {
            this.levelUp();
            this.xp -= 100;
        }
    }

    actionAttack(defender) {
        let degats = this.attack * (100 / (100 + defender.armor)); //formule de dégâts lol
        degats = Math.floor(degats); 
        defender.currentHP -= degats;
        if (defender.currentHP <= 0) {
            defender.currentHP = 0;
            defender.die();
            this.winXP(50);
        }
        logMsg(`attaque qui inflige ${degats} dégâts.`);
    }

    levelUp() {
        this.level++;
        logMsg(`${this.name} a atteint le niveau ${this.level} !`);
    }

}

export default Player;