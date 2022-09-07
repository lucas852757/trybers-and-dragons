"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(name, special = 0, cost = 0) {
        this._name = name;
        this._special = special;
        this._cost = cost;
    }
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
    get name() {
        return this._name;
    }
    get special() {
        return this._special;
    }
    get cost() {
        return this._cost;
    }
}
exports.default = Archetype;
