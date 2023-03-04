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
  if (turnDisplay.innerText === `ITS PLAYER 1 TURN`) {
    turnDisplay.innerText = 'ITS PLAYER 2 TURN'
    currentPlayer = 'playerTwo'
  } else if (turnDisplay.innerText === 'ITS PLAYER 2 TURN') {
    turnDisplay.innerText = 'ITS PLAYER 1 TURN'
    currentPlayer = 'playerOne'
  }
}

function boardReset() {
  if (turnDisplay.innerText === `${currentPlayer} wins!`) {
    (turnDisplay.innerText === `ITS PLAYER 1 TURN`)
    currentPlayer = 'playerOne'
}
}

function displayScore() {
  if (newGame.playerOne.wins < 4) {
    playerOneScore.innerText = `WINS: ${newGame.playerOne.wins}`
  } else if (newGame.playerTwo.wins < 4) {
    playerTwoScore.innerText = `WINS: ${newGame.playerTwo.wins}`
}
}

function displayWin() {
  if (newGame[currentPlayer].wins === 1) {
    displayScore()
    // setTimeout(() => boardReset(), 2000)
    setTimeout(boardReset,3000)
    turnDisplay.innerText = `${currentPlayer} wins!`
    entireBoard.innerHTML = `
    <box id="squareOne"></box>
    <box id="squareTwo"></box>
    <box id="squareThree"></box>
    <box id="squareFour"></box>
    <box id="squareFive"></box>
    <box id="squareSix"></box>
    <box id="squareSeven"></box>
    <box id="squareEight"></box>
    <box id="squareNine"></box>
    `
  }
}

function playerTurn(event) {
  event.target.innerText = newGame[currentPlayer].token
  newGame.updateBoard(event)
  displayWin()
  changeTurn()
}
// function playerTurn(event) {
//   if (newGame[event.target.id] === undefined) {
//     console.log(`${event.target.id} was clicked`)
//     newGame[event.target.id] = currentPlayer 
//     newGame.checkWinStatus(currentPlayer)
//     newGame.switchTurn()
//     newGame.gameScoreCheck(playerOne, playerTwo)
//   }
// }
// updateBoard(event) {
//   if (event.target.innerText === currentPlayer.token) {
//     this[event.target.id] = currentPlayer
//     console.log(`${event.target.id} was clicked`)
//     this.switchTurn()
//   }
// }


//if the turn variable = player1, then the html will look like this with player1 token
//if the turn = player 1, then add this value to the property

//if it were an array: if the turn = player1, push this number into newGame.player1
//if this.playerOne.includes(1, 2, 3) {
//playerOne.wins +=
//}
//if DOM displays