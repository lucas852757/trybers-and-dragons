"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this.player1 = player1;
        this.player2 = player2;
    }
    fight() {
        while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
            this.player1.attack(this.player2);
            this.player2.attack(this.player1);
        }
        return super.fight();
    }
}
exports.default = PVP;
