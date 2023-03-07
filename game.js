class Game {
  constructor() {
    this.currentRound = 1
    this.playerOneTurn = true
    this.playerTwoTurn = false
    this.playerOne = new Player(1, './cartoken.png')
    this.playerTwo = new Player(2, './cartoken2.png')
    this.squareOne = undefined
    this.squareTwo = undefined
    this.squareThree = undefined
    this.squareFour = undefined
    this.squareFive = undefined
    this.squareSix = undefined
    this.squareSeven = undefined
    this.squareEight = undefined
    this.squareNine = undefined
    this.currentWin = undefined
    this.draw = false
  }
  updateBoard(event) {
    if (this[event.target.id] === undefined) {
      this[event.target.id] = currentPlayer
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
    this.currentWin = undefined
    this.currentWin = undefined
    this.draw = false
  }
 checkWinStatus(currentPlayer) {
  if (this.squareOne === currentPlayer && this.squareTwo === currentPlayer && this.squareThree === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
    console.log(`${currentPlayer} won`)
  } else if (this.squareFour === currentPlayer && this.squareFive === currentPlayer && this.squareSix === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareSeven === currentPlayer && this.squareEight === currentPlayer && this.squareNine === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareOne === currentPlayer && this.squareFour === currentPlayer && this.squareSeven === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareTwo === currentPlayer && this.squareFive === currentPlayer && this.squareEight === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareThree === currentPlayer && this.squareSix === currentPlayer && this.squareNine === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareOne === currentPlayer && this.squareFive === currentPlayer && this.squareNine === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareThree === currentPlayer && this.squareFive === currentPlayer && this.squareSeven === currentPlayer) {
    this.currentWin = currentPlayer
    this[currentPlayer].wins += 1
    this.currentRound += 1
  } else if (this.squareOne && this.squareTwo && this.squareThree && this.squareFour && this.squareFive && this.squareSix && this.squareSeven && this.squareEight && this.squareNine) {
    this.draw = true
  }
}
switchTurn() {
  if (this.playerOneTurn) {
    this.playerTwoTurn = true 
    this.playerOneTurn = false
  } else if (this.playerTwoTurn) {
    this.playerOneTurn = true
    this.playerTwoTurn = false
  }
}
}

