 const gameBoard = (()=>{
    let currentBoard = []
    let player1 = null;
    let player2 = null;
    let currentPlayer = null;
    let turn = 0;       
    function getBoard(){
        return currentBoard;
    }
    function getTurn(){
        return turn;
    }
    function updateBoard(cellId,playerSymbol){
        currentBoard[cellId] = playerSymbol;
        turn++;
    }
    function isCellEmpty(cellId){
        return currentBoard[cellId]===undefined;
    }
    function resetBoard(){
        currentBoard = [];
    }
    function setPlayers(newPlayer1, newPlayer2){
        player1 = newPlayer1;
        player2 = newPlayer2;
        currentPlayer = player1;
    }
    function getCurrentPlayer(){
        return currentPlayer;
    }
    function switchPlayers(){
        currentPlayer = currentPlayer===player1?player2:player1;
    }

    function checkForWinner(){
        let isWinner = false;
        function isAllEqual(arr){
            let result = arr.every(val=>val===arr[0]);
            return result;
          }

        //Check Horizontals
        for(let i=0;i<3;i++){
            let rowInQuestion = [];
            for(let j=0;j<3;j++){
                const targetCell = currentBoard[j+(3*i)];
                if(targetCell===undefined){
                    break;
                }
                rowInQuestion.push(targetCell);
            }
            if(rowInQuestion.length===3){
                if(isAllEqual(rowInQuestion)){
                    isWinner =  true;
                }
            }
        }
        //Check Vertical
        for(let i=0;i<3;i++){
            let columnInQuestion = [];
            for(let j=0;j<9;j+=3){
                const targetCell = currentBoard[i+j];
                if(targetCell===undefined){
                    break;
                }
                columnInQuestion.push(targetCell);
            }
            if(columnInQuestion.length===3){
                if(isAllEqual(columnInQuestion)){
                    isWinner= true;
                }
            }
        }
        //Check L->R diagonal
        let leftToRightDiagonal = [];
        for(let i=0;i<9;i+=4){
            let targetCell= currentBoard[i];
            if(targetCell===undefined){break;}
            leftToRightDiagonal.push(currentBoard[i]);
        }
        if(leftToRightDiagonal.length===3){
            if(isAllEqual(leftToRightDiagonal)){
                isWinner= true;
            }
        }

        //Check R->L diagonal
        let rightToLeftDiagonal = [];
        for(let i=2;i<7;i+=2){
            let targetCell= currentBoard[i];
            if(targetCell===undefined){break;}
            rightToLeftDiagonal.push(currentBoard[i]);
        }
        if(rightToLeftDiagonal.length===3){
            if(isAllEqual(rightToLeftDiagonal)){
                isWinner =  true;
            }
        }

        if(isWinner){
            return {'result':'Win','player':currentPlayer.getPlayerName()};
        }else if(turn===9){
            return {'result':'Tie','player':'N/A'}
        }else{
            return{'result':'Continue','player':'N/A'}
        }
    }
    function resetGame(){
        currentBoard = [];
        turn = 0;
        document.querySelector('.board').classList.remove('disable-cells');
    }
    return{
        getBoard,updateBoard,resetBoard,setPlayers,getCurrentPlayer,switchPlayers,isCellEmpty,checkForWinner,getTurn,resetGame
    }
})();
export{gameBoard};