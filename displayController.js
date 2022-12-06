
const displayController = (() => {
  let gameBoard = null;

  function onClickCell(e) {
    const targetCell = e.target;
    const targetCellId = targetCell.dataset.cellReference;
    const currentPlayerSymbol = gameBoard.getCurrentPlayer().getPlayerSymbol()
    if(!gameBoard.isCellEmpty(targetCellId)){
      return;
    }
    targetCell.textContent= currentPlayerSymbol;
    gameBoard.updateBoard(targetCellId,currentPlayerSymbol);
    const {result,player} = gameBoard.checkForWinner()
    if(result==='Win'){
      document.querySelector('#result-div').textContent = `${player} is the Winner!`
      document.querySelector('.board').classList.add('disable-cells');

    }else if(result==='Tie'){
      document.querySelector('#result-div').textContent = `Its a Tie!`; 
    }
    gameBoard.switchPlayers();
  }

  function setBoardReference(newBoard) {
    gameBoard = newBoard;
  }
  function resetBoard(){
    const gameCells = document.querySelectorAll('.cell');
    const gameCellArray = [...gameCells];
    gameCellArray.forEach((cell)=>{cell.textContent=""});
    document.querySelector('#result-div').textContent = '';
    gameBoard.resetGame();
  }
  function renderBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
    console.log(gameBoard);
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", onClickCell);
      cell.dataset.cellReference = i;
      board.appendChild(cell);
    }
    document.querySelector('body').prepend(board);
  }
  return { renderBoard, setBoardReference, resetBoard};
})();

export { displayController };
