import Assassin from "./assassin.js";
import Berzerker from "./berzerker.js";
import Fighter from "./fighter.js";
import Monk from "./monk.js";
import Paladin from "./paladin.js";

class Game {
  constructor (turnLeft = 10) {
    this.turnLeft = turnLeft;
    this.characters = [
      new Fighter(),
      new Paladin(),
      new Monk(),
      new Berzerker(),
      new Assassin()
    ];
  }
}

let newGame = new Game();
console.log(newGame);