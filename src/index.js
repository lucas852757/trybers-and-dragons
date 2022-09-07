"use strict";
/* source: https://app.betrybe.com/course/back-end/poo-solid/polimorfismo/187f1db7-653c-4c03-8c91-cfe338f3dfec/conteudos/254b3b09-8e37-455b-9ccb-acd97f64cab1/classe-abstrata-e-metodo-abstrato/f97a7443-bc67-4017-b215-bb0f2645cd18?use_case=side_bar */
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBattles = exports.pve = exports.pvp = exports.monster2 = exports.monster1 = exports.player3 = exports.player2 = exports.player1 = void 0;
const Battle_1 = require("./Battle");
const Character_1 = require("./Character");
const Monster_1 = require("./Monster");
const Dragon_1 = require("./Dragon");
const player1 = new Character_1.default('');
exports.player1 = player1;
const player2 = new Character_1.default('');
exports.player2 = player2;
const player3 = new Character_1.default('');
exports.player3 = player3;
player1.levelUp();
player1.levelUp();
player1.levelUp();
const monster1 = new Monster_1.default();
exports.monster1 = monster1;
const monster2 = new Dragon_1.default();
exports.monster2 = monster2;
const pvp = new Battle_1.PVP(player2, player3);
exports.pvp = pvp;
const pve = new Battle_1.PVE(player1, [monster1, monster2]);
exports.pve = pve;
const runBattles = (battles) => {
    battles.forEach((battle) => battle.fight());
};
exports.runBattles = runBattles;
