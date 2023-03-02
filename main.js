var playerOne = new Player(1)
var playerTwo = new Player(2)
var newGame = new Game()

function playerTurn(input, player) {
  if (newGame[input] === undefined) {
    newGame[input] = player 
    newGame.switchTurn()
    newGame.checkWinStatus(player)
    newGame.gameScoreCheck(playerOne, playerTwo)
  }
}


