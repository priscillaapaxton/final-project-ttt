class Game {
  constructor() {
    this.playerOneTurn = true
    this.playerTwoTurn = false
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
    //how do I make my conditionals check for a specific string?
    //could I make them check to see if they all have the same value?
    //would it be easier to check if each player's arrays contained numbers?
  }
  checkWinStatus(player) {
    if (this.squareOne === player && this.squareTwo === player && this.squareThree === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareFour === player && this.squareFive === player && this.squareSix === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareSeven === player && this.squareEight === player && this.squareNine === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareOne === player && this.squareFour === player && this.squareSeven === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareTwo === player && this.squareFive === player && this.squareEight === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareThree === player && this.squareSix === player && this.squareNine === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareOne === player && this.squareFive === player && this.squareNine === player) {
      player.wins += 1
      this.resetBoard()
    } else if (this.squareThree === player && this.squareFive === player && this.squareSeven === player) {
      player.wins += 1
      this.resetBoard()
    }
  }
  gameScoreCheck(playerOne, playerTwo) {
    if (playerOne.wins === 3 || playerTwo.wins === 3) {
      console.log('Game Over')
    }
  }
}