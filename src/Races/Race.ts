/* source: https://n4n3.files.wordpress.com/2010/12/poo-aula-assinatura-de-mc3a9todos-1s2011-20110310.pdf */

/* source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b */
abstract class Race {
  protected _name: string;
  protected _dexterity: number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }
}
export default Race;