/* source:  https://app.betrybe.com/course/back-end/poo-solid/polimorfismo/187f1db7-653c-4c03-8c91-cfe338f3dfec/conteudos/254b3b09-8e37-455b-9ccb-acd97f64cab1/sintaxe-com-interfaces-e-generics/ec73cdb2-9b06-48b5-bf4c-c5a6d551c64e?use_case=side_bar */

/* source:  https://app.betrybe.com/course/back-end/poo-solid/polimorfismo/187f1db7-653c-4c03-8c91-cfe338f3dfec/conteudos/254b3b09-8e37-455b-9ccb-acd97f64cab1/sintaxe-com-interfaces-e-generics/ec73cdb2-9b06-48b5-bf4c-c5a6d551c64e?use_case=side_bar */

/* source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b */
/* source: https://www.youtube.com/watch?v=JiIAZV6bIu8 */
import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static lastId = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = 80;
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

  /*  set maxLifePoints(n: number) {
    this.maxLifePoints = n;
  } */
  static createdRacesInstances(): number {
    this.lastId += 1;
    return this.lastId;
  }
}

export default Dwarf;