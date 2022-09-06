// import Fighter from '../Fighter';
import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  player1: Character | Fighter;
  player2: Character | Fighter;
  constructor(player1: Character | Fighter, player2: Character | Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    
    return super.fight();
  }
}

export default PVP;