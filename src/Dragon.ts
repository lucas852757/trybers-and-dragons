import Monster from './Monster';

class Dragon extends Monster {
  protected _lifePoints: number;
  constructor(lifePoints = 999) {
    super(lifePoints);
    this._lifePoints = lifePoints;
  }
}

export default Dragon;