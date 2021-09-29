export default class Gameview{

    constructor(){
        
    }

    updateBoard(game){
        
        this.updateTurn(game);
       

        for(let i=0; i< game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
             tile.textContent =game.board[i];
            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";

             tile.innerHTML =`<span class="${tileType} "> 
                ${ game.board[i] ? game.board[i] : ""}</span>`
            

        }
       
    }
    updateTurn(game){
        let playerX =document.querySelector(".player-X ")
        let playerO=document.querySelector(".player-O ");
        playerX.classList.remove("active");
        playerO.classList.remove("active");

        if(game.turn == 'X'){
            playerX.classList.add('active');
        }else{
            playerO.classList.add('active');
        }

    }




} 