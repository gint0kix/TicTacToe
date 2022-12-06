function playerFactory(name,symbol){
    const playerName = name;
    const playerSymbol = symbol
    const newPlayerObject={
        getPlayerName(){
            return playerName;
        },
        getPlayerSymbol(){
            return playerSymbol;
        }
    }
    return newPlayerObject;
}
export{playerFactory}