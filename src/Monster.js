"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor(lifePoints = 85, strength = 63) {
        this._lifePoints = lifePoints;
        this._strength = strength;
    }
    setLifePoints(n) {
        this._lifePoints = n;
    }
    attack(enemy) {
        // throw new Error('Method not implemented.');
        enemy.receiveDamage(this._strength);
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._lifePoints;
        if (damage > 0) {
            this._lifePoints -= damage;
        }
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
        }
        return this._lifePoints;
    }
    setLoseLifPoints(n) {
        this._lifePoints -= n;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
}
exports.default = Monster;
