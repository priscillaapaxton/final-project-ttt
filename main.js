//QUERYSELECTORS//
//EVENTLISTENERS//




var playerOne = new Player(1, "X")
var playerTwo = new Player(2, "O")
var newGame = new Game()

function playerTurn(input, player) {
  if (newGame[input] === undefined) {
    newGame[input] = player 
    newGame.switchTurn()
    newGame.checkWinStatus(player)
    newGame.gameScoreCheck(playerOne, playerTwo)
  }
}


