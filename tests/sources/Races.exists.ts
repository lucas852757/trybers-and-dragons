import Race, * as Races from '../../src/Races/Race';

class RaceChild extends Race {
  get maxLifePoints(): number {
    return 99;
  }
  
}

const race = new RaceChild('', 80);
