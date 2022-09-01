/* https://n4n3.files.wordpress.com/2010/12/poo-aula-assinatura-de-mc3a9todos-1s2011-20110310.pdf */
abstract class Race {
  abstract get maxLifePoints(): unknown;

  constructor(private _name: string, private _dexterity: number) {}

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }

  static createdRacesInstances(c:number): number {
    throw new Error('Not implemented');
    return c + 1;
  }
}
export default Race;