import { gameBoard } from "./gameBoard.js";
import { displayController } from "./displayController.js";
import {playerFactory} from "./playerFactory.js"
const GAMEBOARD = gameBoard;
const DISPLAY_CONTROLLER = displayController;
DISPLAY_CONTROLLER.setBoardReference(GAMEBOARD);
DISPLAY_CONTROLLER.renderBoard();
const steve = playerFactory('steve','X');
const bob = playerFactory('bob','O');
GAMEBOARD.setPlayers(steve,bob);
document.querySelector('#reset-btn').addEventListener('click',DISPLAY_CONTROLLER.resetBoard);

