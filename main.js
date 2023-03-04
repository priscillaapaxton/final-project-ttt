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
function changeToken() {
gameBoard.html 
}

function changeTurn() {
  if (turnDisplay.innerText === `ITS PLAYER 1 TURN`) {
    turnDisplay.innerText = 'ITS PLAYER 2 TURN'
    currentPlayer = 'playerTwo'
  } else if (turnDisplay.innerText === 'ITS PLAYER 2 TURN') {
    turnDisplay.innerText = 'ITS PLAYER 1 TURN'
    currentPlayer = 'playerOne'
  }
  }

function playerTurn(event) {
  if (newGame[event.target.id] === undefined) {
    console.log(`${event.target.id} was clicked`)
    newGame[event.target.id] = currentPlayer 
    newGame.checkWinStatus(currentPlayer)
    changeTurn()
    newGame.switchTurn()
    newGame.gameScoreCheck(playerOne, playerTwo)
  }
}


//if the turn variable = player1, then the html will look like this with player1 token
//if the turn = player 1, then add this value to the property

//if it were an array: if the turn = player1, push this number into newGame.player1
//if this.playerOne.includes(1, 2, 3) {
//playerOne.wins +=
//}
//if DOM displays


