class Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100) {
        this.name = name;
        this.currentHP = maxHP;
        this.maxHP = maxHP;
        this.attack = attack;
        this.armor = armor;
    }

    takeDamage(amount) {
        this.currentHP -= amount;
        if (this.currentHP < 0) {
            this.currentHP = 0;
            this.die();
        }
    }

    die() {
        console.log(`${this.name} has died.`);
    }
}

export default Entity;