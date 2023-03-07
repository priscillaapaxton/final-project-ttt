class Game {
  constructor() {
    this.currentRound = 1
    this.playingNow = 'playerOne'
    this.currentWin = undefined
    this.draw = false
    this.playerOne = new Player(1, './assets/cartoken2.png')
    this.playerTwo = new Player(2, './assets/cartoken.png')
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
      this[event.target.id] = this.playingNow
      this.checkWinStatus(this.playingNow)
    }
    this.switchTurn()
  }
  newGame() {
    this.currentRound = 1
    this.playingNow = 'playerOne'
    this.playerOne = new Player(1, './assets/cartoken2.png')
    this.playerTwo = new Player(2, './assets/cartoken.png')
    this.resetBoard()
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
    this.draw = false
  }
 checkWinStatus() {
  if (this.squareOne === this.playingNow && this.squareTwo === this.playingNow && this.squareThree === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareFour === this.playingNow && this.squareFive === this.playingNow && this.squareSix === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareSeven === this.playingNow && this.squareEight === this.playingNow && this.squareNine === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareOne === this.playingNow && this.squareFour === this.playingNow && this.squareSeven === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareTwo === this.playingNow && this.squareFive === this.playingNow && this.squareEight === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareThree === this.playingNow && this.squareSix === this.playingNow && this.squareNine === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareOne === this.playingNow && this.squareFive === this.playingNow && this.squareNine === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareThree === this.playingNow && this.squareFive === this.playingNow && this.squareSeven === this.playingNow) {
    this.currentWin = this.playingNow
    this[this.playingNow].wins += 1
    this.currentRound += 1
  } else if (this.squareOne && this.squareTwo && this.squareThree && this.squareFour && this.squareFive && this.squareSix && this.squareSeven && this.squareEight && this.squareNine) {
    this.draw = true
  }
}
switchTurn() {
  if (this.playingNow === 'playerOne') {
    this.playingNow = 'playerTwo'
  } else if (this.playingNow === 'playerTwo') {
    this.playingNow = 'playerOne'
    }
  }
}

