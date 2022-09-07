"use strict";
/* source: https://n4n3.files.wordpress.com/2010/12/poo-aula-assinatura-de-mc3a9todos-1s2011-20110310.pdf */
Object.defineProperty(exports, "__esModule", { value: true });
/* source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b */
class Race {
    constructor(name, dexterity) {
        this._name = name;
        this._dexterity = dexterity;
    }
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
    get name() {
        return this._name;
    }
    get dexterity() {
        return this._dexterity;
    }
}
exports.default = Race;
