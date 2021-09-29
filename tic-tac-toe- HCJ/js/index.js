import Game from "./game.js"
import Gameview from  "./view.js"


let game= new Game();
let gameView =  new Gameview();
document.querySelector(".restart").addEventListener("click",()=>{
     onRestartClick();
})



let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) =>{
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
        
    })
})

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
    game.nextTurn();
  
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}
gameView.updateBoard(game);