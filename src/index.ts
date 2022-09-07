/* source: https://app.betrybe.com/course/back-end/poo-solid/polimorfismo/187f1db7-653c-4c03-8c91-cfe338f3dfec/conteudos/254b3b09-8e37-455b-9ccb-acd97f64cab1/classe-abstrata-e-metodo-abstrato/f97a7443-bc67-4017-b215-bb0f2645cd18?use_case=side_bar */

import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';

const player1 = new Character('');
const player2 = new Character('');
const player3 = new Character('');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};
export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };