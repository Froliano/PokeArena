import Entity from './Entity.js';
import { logMsg, showMenu, upgradeMenu, gameOver } from './Utils.js';
import * as music from './Music.js';
import { currentChapterNumber } from './Wave.js';
import { loadGame } from './Save.js';

const pokemon = document.getElementById('player-pokemon');

class Player extends Entity {
    constructor(name, attack = 15, armor = 20, maxHP = 100, level = 1) {
        super(name, attack, armor, maxHP);
        this.name = name;
        this.level = level;
        this.xp = 0;
        this.xpToNextLevel = 100;
        this.money = 0;
        this.currentMon = "pikachu-alola.gif";
    }

    die() {
        console.log(`${this.name} has died.`);
        pokemon.style.animation = 'pokemonKO 0.5s';
        pokemon.addEventListener('animationend', () => {
            pokemon.style.opacity = '0';
            setTimeout(() => {
                pokemon.style.animation ='';
                pokemon.style.opacity = '1';
                loadGame(this);
                this.currentHP = this.maxHP;
            },3000);
        }, { once: true });
        music.stopCurrentMusic();
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

            const xpGain = 50 + (currentChapterNumber - 1) * 20;
            this.winXP(xpGain);
        }
        pokemon.style.animation = 'pokemonAttack 0.3s ease-in-out';
        pokemon.addEventListener('animationend', () => {
            pokemon.style.animation = '';
        }, { once: true });
        music.attackSound();
        logMsg(`Votre attaque inflige ${degats} degets.`);
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
        logMsg(`${this.name} a ete soigne.`);
    }

    upgradeAttack() {
        this.attack += 5;
        logMsg(`${this.name} a ameliore son attaque a ${this.attack}.`);
    }

    upgradeArmor() {
        this.armor += 5;
        logMsg(`${this.name} a ameliore son armure a ${this.armor}.`);
    }

    upgradeMaxHP() {
        this.maxHP += 20;
        logMsg(`${this.name} a augmente ses PV maximum a ${this.maxHP}.`);
    }

    addMoney(amount) {
        this.money += amount;
        document.querySelector('#money-amount .value').textContent = `${this.money}`;
        logMsg(`Vous avez gagne ${amount} pieces. Total: ${this.money} pieces.`);
    }
    removeMoney(amount) {
        this.money -= amount;
        document.querySelector('#money-amount .value').textContent = `${this.money}`;
        logMsg(`Vous avez depense ${amount} pieces. Total: ${this.money} pieces.`);
    }

    refreshMon() {
        pokemon.src = `https://play.pokemonshowdown.com/sprites/gen5ani-back/${this.currentMon}`;
        logMsg(`${this.name} a change de Pokemon en ${this.currentMon}.`);
    }

}

export default Player;