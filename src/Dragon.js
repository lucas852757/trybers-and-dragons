"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = require("./Monster");
class Dragon extends Monster_1.default {
    constructor(lifePoints = 999) {
        super(lifePoints);
        this._lifePoints = lifePoints;
    }
}
exports.default = Dragon;
