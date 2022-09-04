import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  setLifePoints(n: number):void {
    this._lifePoints = n;
  }

  attack(enemy: SimpleFighter): void {
    // throw new Error('Method not implemented.');
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    // throw new Error('Method not implemented.');
    // static l = 0;
    const damage = this.lifePoints - attackPoints;
    if (damage > 0) {
      this.setLoseLifPoints(1);
      if (this.lifePoints <= 0) {
        this.setLifePoints(-1);
      }
    }
    
    return this.lifePoints;
  }

  setLoseLifPoints(n: number) {
    this._lifePoints -= n;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}

export default Monster;