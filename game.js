class Game {
  constructor() {
    this.playerOneTurn = true
    this.playerTwoTurn = false
    this.playerOne = new Player(1, "x")
    this.playerTwo = new Player(2, "o")
    this.squareOne = undefined
    this.squareTwo = undefined
    this.squareThree = undefined
    this.squareFour = undefined
    this.squareFive = undefined
    this.squareSix = undefined
    this.squareSeven = undefined
    this.squareEight = undefined
    this.squareNine = undefined
  }
  updateBoard(event) {
    if (this[event.target.id] === undefined) {
      this[event.target.id] = currentPlayer
      console.log(`${event.target.id} was clicked`)
      this.checkWinStatus(currentPlayer)
    }
    this.switchTurn()
  }
  resetBoard() {
    this.squareOne = undefined
    this.squareTwo = undefined
    this.squareThree = undefined
    this.squareFour = undefined
    this.squareFive = undefined
    this.squareSix = undefined
    this.squareSeven = undefined
    this.squareEight = undefined
    this.squareNine = undefined
  }
 checkWinStatus(currentPlayer) {
  if (this.squareOne === currentPlayer && this.squareTwo === currentPlayer && this.squareThree === currentPlayer) {
    this[currentPlayer].wins += 1
    console.log(`${currentPlayer} won`)
    this.resetBoard()
  } else if (this.squareFour === currentPlayer && this.squareFive === currentPlayer && this.squareSix === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  } else if (this.squareSeven === currentPlayer && this.squareEight === currentPlayer && this.squareNine === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  } else if (this.squareOne === currentPlayer && this.squareFour === currentPlayer && this.squareSeven === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  } else if (this.squareTwo === currentPlayer && this.squareFive === currentPlayer && this.squareEight === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  } else if (this.squareThree === currentPlayer && this.squareSix === currentPlayer && this.squareNine === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  } else if (this.squareOne === currentPlayer && this.squareFive === currentPlayer && this.squareNine === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  } else if (this.squareThree === currentPlayer && this.squareFive === currentPlayer && this.squareSeven === currentPlayer) {
    this[currentPlayer].wins += 1
    this.resetBoard()
  }
}
switchTurn() {
  if (this.playerOneTurn) {
    this.playerTwoTurn = true 
    this.playerOneTurn = false
    console.log('player 2 turn')
  } else if (this.playerTwoTurn) {
    this.playerOneTurn = true
    this.playerTwoTurn = false
    console.log('player 1 turn')
  }
}
  gameScoreCheck(playerOne, playerTwo) {
    if (playerOne.wins === 3 || playerTwo.wins === 3) {
      console.log('Game Over')
    }
  }
}

