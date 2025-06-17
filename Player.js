import Entity from './Entity.js';

class Player extends Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100, level = 1) {
        super(name, attack, armor, maxHP);
        this.level = level;
        this.xp = 50;
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

    levelUp() {
        this.level += 1;
        this.health = 100;
    }
}

export default Player;