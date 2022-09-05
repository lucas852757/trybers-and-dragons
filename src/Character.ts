// lecture/27.2
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
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

  setMaxPoints(n: number) {
    this._maxLifePoints = n;
  }

  setLoseLifPoints(n: number):void {
    this._lifePoints -= n;
  }

  setLifePoints(n: number):void {
    this._lifePoints = n;
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

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    if (enemy.lifePoints === this.lifePoints) {
      this.setLifePoints(-2);
    }
  }

  levelUp(): void {
    this.add();
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
      this.setMaxPoints(this._maxLifePoints);
      this.setLifePoints(this._maxLifePoints);
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.defense - attackPoints;
    if (damage > 0) {
      this.setLoseLifPoints(1);
      if (this.lifePoints <= 0) {
        this.setLifePoints(-1);
      }
    }
    
    return this.lifePoints;
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
