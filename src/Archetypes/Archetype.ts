import { EnergyType } from '../TypeEnergyType';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string, special = 0, cost = 0) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  protected static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get name(): string {
    return this._name;
  }

  get special():number {
    return this._special;
  }

  get cost() {
    return this._cost;
  }
}

export default Archetype;