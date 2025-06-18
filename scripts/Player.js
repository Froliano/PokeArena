import Entity from './Entity.js';
import { logMsg, showMenu, upgradeMenu, gameOver } from './Utils.js';
import * as music from './Music.js';

class Player extends Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100, level = 1) {
        super(name, attack, armor, maxHP);
        this.level = level;
        this.xp = 0;
        this.xpToNextLevel = 100;
    }

    die() {
        console.log(`${this.name} has died.`);
        gameOver(`${this.name} blacked out!`);
    }

    winXP(amount) {
        this.xp += amount;
        while(this.xp >= 100) {
            this.levelUp();
            this.xp -= 100;
            music.levelUpSound();
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
        music.attackSound();
        logMsg(`attaque qui inflige ${degats} dégâts.`);
    }

    levelUp() {
        this.level++;
        logMsg(`${this.name} a atteint le niveau ${this.level} !`);
        upgradeMenu(this);
        this.xpToNextLevel = Math.round(this.xpToNextLevel * 1.2); // Augmente le coût d'XP pour le prochain niveau
    }

    heal() {
        this.currentHP += this.maxHP * 0.5; // Soigne 20% des PV max
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }
        music.healSound();
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