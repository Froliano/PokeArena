import Entity from './Entity.js';
import { logMsg, upgradeMenu } from './Utils.js';

class Player extends Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100, level = 1) {
        super(name, attack, armor, maxHP);
        this.level = level;
        this.xp = 0;
    }

    die() {
        console.log(`${this.name} has died.`);
    }

    winXP(amount) {
        this.xp += amount;
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
            this.winXP(0);
        }
        logMsg(`attaque qui inflige ${degats} dégâts.`);
    }

    levelUp() {
        this.level++;
        logMsg(`${this.name} a atteint le niveau ${this.level} !`);
        upgradeMenu(this);
    }

    heal() {
        this.currentHP += this.maxHP * 0.5; // Soigne 20% des PV max
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }
        logMsg(`${this.name} a été soigné.`);
    }

    upgradeAttack() {
        this.attack += 5;
        logMsg(`${this.name} a amélioré son attaque à ${this.attack}.`);
    }

    upgradeArmor() {
        this.armor += 5;
        logMsg(`${this.name} a amélioré son armure à ${this.armor}.`);
    }

    upgradeMaxHP() {
        this.maxHP += 20;
        logMsg(`${this.name} a augmenté ses PV maximum à ${this.maxHP}.`);
    }

}

export default Player;