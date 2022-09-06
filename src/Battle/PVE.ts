import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private person: Fighter;
  private monsters: SimpleFighter[];
  constructor(person: Fighter, monsters: SimpleFighter[]) {
    super(person);
    this.person = person;
    this.monsters = monsters;
  }

  fight():number {
    this.monsters.forEach((monster) => {
      while (this.person.lifePoints > 0 && monster.lifePoints > 0) {
        this.person.attack(monster);
        monster.attack(this.person);
      }
    });
    return super.fight();
  }
}

export default PVE;