import Character from '../Character';
import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private person: Character | Fighter;
  private monsters: [];
  constructor(person: Character | Fighter, monsters: []) {
    super(person);
    this.person = person;
    this.monsters = monsters;
  }

  fight():number {
    this.monsters.forEach((monster: Monster) => {
      while (this.person.lifePoints > 0 && monster.lifePoints > 0) {
        this.person.attack(monster);
        monster.attack(this.person);
      }
    });
    return super.fight();
  }
}

export default PVE;