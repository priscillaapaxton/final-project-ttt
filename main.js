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
var playerOne = new Player(1, "X")
var playerTwo = new Player(2, "O")
var newGame = new Game()
var currentPlayer = "playerOne"

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
  if (turnDisplay.innerText === 'ITS PLAYER 1 TURN') {
    turnDisplay.innerText = 'ITS PLAYER 2 TURN'
    var currentPlayer = "playerTwo"
  } else if (turnDisplay.innerText === 'ITS PLAYER 2 TURN') {
    turnDisplay.innerText = 'ITS PLAYER 1 TURN'
    var currentPlayer = "playerOne"
  }
  }


function playerTurn(event) {
  if (newGame[event.target.id] === undefined) {
    console.log(`${event.target.id} was clicked`)
    newGame[event.target.id] = currentPlayer 
    changeTurn()
    newGame.switchTurn()
    newGame.checkWinStatus(playerOne, playerTwo)
    newGame.gameScoreCheck(playerOne, playerTwo)
  }
}


