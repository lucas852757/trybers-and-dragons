"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        this.lastId += 1;
        return this.lastId;
    }
}
Ranger.lastId = 0;
exports.default = Ranger;
