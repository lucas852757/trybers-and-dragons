import Monster from './Monster';

class Dragon extends Monster {
  protected _lifePoints: number;
  constructor(dragonFace = 999) {
    super(dragonFace);
    this._lifePoints = dragonFace;
  }
}

export default Dragon;