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
  private _energy!: Energy;
  private _name: string;

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
    this._energy.type_ = this._archetype.energyType;
    this._energy.amount = getRandomInt(1, 10);
    this._name = name;
  }

  getLoseLifPoints(): number {
    return this._lifePoints;
  }

  setLoseLifPoints(n: number):void {
    this._lifePoints -= n;
  }

  setLifPoints(n: number):void {
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
    // throw new Error('Method not implemented.');
    enemy.receiveDamage(this.strength);
  }

  special(enemy: Fighter): void {
    // throw new Error('Method not implemented.');
    if (enemy.lifePoints === this.lifePoints) {
      this.setLifPoints(-2);
    }
  }

  levelUp(): void {
    // throw new Error('Method not implemented.');
    this.maxLifePoints = getRandomInt(1, 10);
    this.setStrength(getRandomInt(1, 10));
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
      this.setLifPoints(this.maxLifePoints);
    }
  }

  receiveDamage(attackPoints: number): number {
    // throw new Error('Method not implemented.');
    // static l = 0;
    const damage = this.defense - attackPoints;
    if (damage > 0) {
      this.setLoseLifPoints(1);
      if (this.getLoseLifPoints() <= 0) {
        this.setLifPoints(-1);
      }
    }
    
    return this.getLoseLifPoints();
  }

  get name() {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
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

  get energy(): Energy {
    const ret = this._energy;
    return ret;
  } 

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  set maxLifePoints(n: number) {
    this._maxLifePoints = n;
  }
}

export default Character;
