"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(person, monsters) {
        super(person);
        this.person = person;
        this.monsters = monsters;
    }
    fight() {
        this.monsters.forEach((monster) => {
            while (this.person.lifePoints > 0 && monster.lifePoints > 0) {
                this.person.attack(monster);
                monster.attack(this.person);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
