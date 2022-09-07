"use strict";
/* source:  https://app.betrybe.com/course/back-end/poo-solid/polimorfismo/187f1db7-653c-4c03-8c91-cfe338f3dfec/conteudos/254b3b09-8e37-455b-9ccb-acd97f64cab1/sintaxe-com-interfaces-e-generics/ec73cdb2-9b06-48b5-bf4c-c5a6d551c64e?use_case=side_bar */
Object.defineProperty(exports, "__esModule", { value: true });
/* source:  https://app.betrybe.com/course/back-end/poo-solid/polimorfismo/187f1db7-653c-4c03-8c91-cfe338f3dfec/conteudos/254b3b09-8e37-455b-9ccb-acd97f64cab1/sintaxe-com-interfaces-e-generics/ec73cdb2-9b06-48b5-bf4c-c5a6d551c64e?use_case=side_bar */
/* source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b */
/* source: https://www.youtube.com/watch?v=JiIAZV6bIu8 */
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._name = name;
        this._dexterity = dexterity;
        this._maxLifePoints = 80;
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
    /*  set maxLifePoints(n: number) {
      this.maxLifePoints = n;
    } */
    static createdRacesInstances() {
        this.lastId += 1;
        return this.lastId;
    }
}
Dwarf.lastId = 0;
exports.default = Dwarf;
