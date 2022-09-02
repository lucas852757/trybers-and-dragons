import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static lastId = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = 74;
  }

  get name():string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this.lastId += 1;
    return this.lastId;
  }
}

export default Orc;