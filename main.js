//QUERYSELECTORS//
var playerOneToken = document.querySelector('#tokenOne')
var playerTwoToken = document.querySelector('#tokenTwo')
var playerOneScore = document.querySelector('#scoreOne')
var playerTwoScore = document.querySelector('#scoreTwo')

var turnDisplay = document.querySelector('#turnDisplay')

var squareOne = document.querySelector('#squareOne')
var squareTwo = document.querySelector('#squareTwo')
var squareThree = document.querySelector('#squareThree')
var squareFour = document.querySelector('#squareFour')
var squareFive = document.querySelector('#squareFive')
var squareSix = document.querySelector('#squareSix')
var squareSeven = document.querySelector('#squareSeven')
var squareEight = document.querySelector('#squareEight')
var squareNine = document.querySelector('#squareNine')
var entireBoard = document.querySelector('#gameBoard')

//DATAMODEL//
var newGame = new Game()
var playerOne = newGame.playerOne
var playerTwo = newGame.playerTwo
var currentPlayer = 'playerOne'

//EVENTLISTENERS//
squareOne.addEventListener('click', playerTurn)
squareTwo.addEventListener('click', playerTurn)
squareThree.addEventListener('click', playerTurn)
squareFour.addEventListener('click', playerTurn)
squareFive.addEventListener('click', playerTurn)
squareSix.addEventListener('click', playerTurn)
squareSeven.addEventListener('click', playerTurn)
squareEight.addEventListener('click', playerTurn)
squareNine.addEventListener('click', playerTurn)

//FUNCTOINS//

function changeTurn() {
  if (turnDisplay.innerText === `ITS playerOne TURN`) {
    turnDisplay.innerText = `ITS playerTwo TURN`
    currentPlayer = 'playerTwo'
  } else if (turnDisplay.innerText === 'ITS playerTwo TURN') {
    turnDisplay.innerText = 'ITS playerOne TURN'
    currentPlayer = 'playerOne'
  } 
}

function newBoard() {
  if (newGame.currentWin === 'playerOne') {  
    currentPlayer = 'playerTwo'
  } else if (newGame.currentWin === 'playerTwo') {
    currentPlayer = 'playerOne'
  }
  newGame.resetBoard()
  console.log('game reset')
  // entireBoard.innerHTML = `
  // <box id="squareOne"></box>
  // <box id="squareTwo"></box>
  // <box id="squareThree"></box>
  // <box id="squareFour"></box>
  // <box id="squareFive"></box>
  // <box id="squareSix"></box>
  // <box id="squareSeven"></box>
  // <box id="squareEight"></box>
  // <box id="squareNine"></box>
  // `
  squareOne.innerText = ''
  squareTwo.innerText = ''
  squareThree.innerText = ''
  squareFour.innerText = ''
  squareFive.innerText = ''
  squareSix.innerText = ''
  squareSeven.innerText = ''
  squareEight.innerText = ''
  squareNine.innerText = ''
  turnDisplay.innerText = `ITS ${currentPlayer} TURN`
}

function displayWinner() {
  if (newGame.currentWin){
  turnDisplay.innerText = `${newGame.currentWin} wins!`
  setTimeout(newBoard,1000)
  // newGame.resetBoard()
}
}

function checkDraw() {
  if (newGame.draw === true) {
    turnDisplay.innerText = `IT'S A DRAW! SORRY!`
    setTimeout(newBoard,1000)
  }
}

function displayScore() {
  if (newGame.playerOne.wins > 0) {
    playerOneScore.innerText = `WINS: ${newGame.playerOne.wins}`
    endGame()
  }if (newGame.playerTwo.wins > 0) {
    playerTwoScore.innerText = `WINS: ${newGame.playerTwo.wins}`
    endGame()
  }
}

function displayWin() {
  if (newGame.currentWin === 'playerOne') {
    displayScore()
    displayWinner()
  } else if (newGame.currentWin === 'playerTwo') {
    displayScore()
    displayWinner()
  }
}

function endGame() {
  if (newGame.playerOne.wins === 3 || newGame.playerTwo.wins === 3) {
    turnDisplay.innerText = 'GAME OVER'
    setTimeout(newBoard,3000)
  }
}

function playerTurn(event) {
  console.log('click')
  event.target.innerText = newGame[currentPlayer].token
  newGame.updateBoard(event)
  displayWin()
  changeTurn()
}
