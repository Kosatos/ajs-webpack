// TODO: write your code here
import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from "./modules/Game";

console.log("app worked");

const game = new Game();
game.start();
