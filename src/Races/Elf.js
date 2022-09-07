"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._name = name;
        this._dexterity = dexterity;
        this._maxLifePoints = 99;
    }
    get name() {
        return this._name;
    }
    get dexterity() {
        return this._dexterity;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        this.lastId += 1;
        return this.lastId;
    }
}
Elf.lastId = 0;
exports.default = Elf;
