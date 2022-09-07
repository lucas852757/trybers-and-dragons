// lecture/27.2
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number; 
  private _dexterity: number; 
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  add():void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  setLoseLifPoints(n: number):void {
    this._lifePoints -= n;
  }

  setStrength(n: number) {
    this._strength = n;
  }

  setDexterity(n: number) {
    this._dexterity = n;
  }

  setDefense(n: number) {
    this._defense = n;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: SimpleFighter): void {
    if (enemy.lifePoints === this.lifePoints) {
      this._lifePoints = -2;
    }
  }

  levelUp(): void {
    this.add();
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
      this._lifePoints = this._maxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    
    return this._lifePoints;
  }
  
  get race() {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get energy(): Energy {
    const fakeObj = {
      type_: this._archetype.energyType,
      amount: this._energy.amount, 
    };
    return fakeObj;
  } 

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  set maxLifePoints(n: number) {
    this._maxLifePoints = n;
  }
}

export default Character;
