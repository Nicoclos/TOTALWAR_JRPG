import Assassin from "./assassin.js";
import Berzerker from "./berzerker.js";
import Fighter from "./fighter.js";
import Monk from "./monk.js";
import Paladin from "./paladin.js";
import Turn from "./turn.js";

class Game {
  constructor (turnLeft = 10) {
    this.turnLeft = turnLeft;
    this.sentōki = [
      new Fighter(),
      new Paladin(),
      new Monk(),
      new Berzerker(),
      new Assassin()
    ];
  }

  newTurn = () => {
    this.turnLeft -= 1;
  }

  gameProcess = () => {
    if (this.turnLeft === 10) {
      console.log("三、二、一、開始 !");
    }

    if (this.sentōki.hasStatus === "loser"){
      this.sentōki = false;
    }

    if (this.turnLeft === 0) {
      console.log(" DING DING DING ! THE FIGHT IS OVER");
      if (this.sentōki.hp >= 1) {
        hasStatus = "winner";
        if (this.sentōki.hasStatus === "winner") {
          console.log(`Congratulations to our winner(s) of the day ! ${this.sentōki.filter((won) => won.hasStatus === "winner")}`);
        }
        
        anotherOne = () => {
          let restart = prompt("Do you want to play once more ?")
          if (restart == "Yes", "Let's go") {
            new Game(this.turnLeft = 10)
          }
          
          else {
            console.log("You're just a sucker anyway ! Go away noob !")
          }
    
        }
  
      }
    }
  }
}

let newGame = new Game();
console.log(newGame);

let newTurn = new Turn();
console.log(newTurn);