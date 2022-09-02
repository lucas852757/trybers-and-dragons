abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string, special: number, cost: number) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }
}

export default Archetype;