import Race from '../../src/Races/Race';

class RaceChild extends Race {
  get maxLifePoints(): number {
    return 99;
  }
}

const race = new RaceChild('', 80);
race.name = 'RaceChild';
