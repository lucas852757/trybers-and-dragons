"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lecture/27.2
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._race = new Races_1.Elf(name, this.dexterity);
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = this.race.maxLifePoints / 2;
        this._lifePoints = this.race.maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._dexterity = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    add() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
    }
    setLoseLifPoints(n) {
        this._lifePoints -= n;
    }
    setStrength(n) {
        this._strength = n;
    }
    setDexterity(n) {
        this._dexterity = n;
    }
    setDefense(n) {
        this._defense = n;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    special(enemy) {
        if (enemy.lifePoints === this.lifePoints) {
            this._lifePoints = -2;
        }
    }
    levelUp() {
        this.add();
        if (this._maxLifePoints > this.race.maxLifePoints) {
            this._maxLifePoints = this.race.maxLifePoints;
            this._lifePoints = this._maxLifePoints;
        }
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0) {
            this._lifePoints -= damage;
        }
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
        }
        return this._lifePoints;
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        const fakeObj = {
            type_: this._archetype.energyType,
            amount: this._energy.amount,
        };
        return fakeObj;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    set maxLifePoints(n) {
        this._maxLifePoints = n;
    }
}
exports.default = Character;
