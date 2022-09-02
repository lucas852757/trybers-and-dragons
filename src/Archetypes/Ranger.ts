import { EnergyType } from '../TypeEnergyType';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static lastId = 0;
  private _energyType: 'stamina' = 'stamina';
  constructor(name: string) {
    super(name);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    this.lastId += 1;
    return this.lastId;
  }
}

export default Ranger;