//QUERYSELECTORS//
var playerOneToken = document.querySelector('#tokenOne')
var playerTwoToken = document.querySelector('#tokenTwo')
var playerOneScore = document.querySelector('#scoreOne')
var playerTwoScore = document.querySelector('#scoreTwo')

var turnDisplay = document.querySelector('#roundDisplay')

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

// function changeTurn() {
//   if (turnDisplay.innerText === `ITS playerOne TURN`) {
//     turnDisplay.innerText = `ITS playerTwo TURN`
//     currentPlayer = 'playerTwo'
//   } else if (turnDisplay.innerText === 'ITS playerTwo TURN') {
//     turnDisplay.innerText = 'ITS playerOne TURN'
//     currentPlayer = 'playerOne'
//   } 
// }

function changeTurn() {
  if (newGame.playerTwoTurn === true) {
    currentPlayer = 'playerTwo'
    playerTwoToken.classList.add('player-one-turn-true')
  } else if (newGame.playerOneTurn === true) {
    currentPlayer = 'playerOne'
    playerTwoToken.classList.remove('player-one-turn-true')
    playerTwoToken.classList.add('player-one-turn-false')
  }
}

// function changeTurn() {
//   if (newGame.playerOneTurn === true) {
//     currentPlayer = 'playerTwo'
//     playerOneToken.classList.add('player-one-turn-false')
//     playerOneToken.classList.remove('player-one-turn-true')
//     playerTwoToken.classList.add('player-one-turn-true')
//   } else if (newGame.playerTwoTurn === true) {
//     currentPlayer = 'playerOne'
//     playerTwoToken.classList.add('player-one-turn-false')
//     playerTwoToken.classList.remove('player-one-turn-true')
//     playerOneToken.classList.add('player-one-turn-true')
//   }
// }

function newBoard() {
  if (newGame.currentWin === 'playerOne') {  
    currentPlayer = 'playerTwo'
  } else if (newGame.currentWin === 'playerTwo') {
    currentPlayer = 'playerOne'
  }
  newGame.resetBoard()
  console.log('game reset')
  
  squareOne.innerText = ''
  squareOne.className = ''
  squareOne.classList.add('square-one')
  squareTwo.innerText = ''
  squareTwo.className = ''
  squareTwo.classList.add('square-two')
  squareThree.innerText = ''
  squareThree.className = ''
  squareThree.classList.add('square-three')
  squareFour.innerText = ''
  squareFour.className = ''
  squareFour.classList.add('square-four')
  squareFive.innerText = ''
  squareFive.className = ''
  squareFive.classList.add('square-five')
  squareSix.innerText = ''
  squareSix.className = ''
  squareSix.classList.add('square-six')
  squareSeven.innerText = ''
  squareSeven.className = ''
  squareSeven.classList.add('square-seven')
  squareEight.innerText = ''
  squareEight.className = ''
  squareEight.classList.add('square-eight')
  squareNine.innerText = ''
  squareNine.className = ''
  squareNine.classList.add('square-nine')
  turnDisplay.innerText = `Round ${newGame.currentRound}`
}

function displayWinner() {
  if (newGame.currentWin){
  turnDisplay.innerText = `${newGame.currentWin} wins!`
  setTimeout(newBoard,1000)
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
  if (!event.target.innerText) {
    if (event.target.id === 'squareOne') {
      event.target.classList.add('active-color1')
    } if (event.target.id === 'squareTwo') {
      event.target.classList.add('active-color2')
    } if (event.target.id === 'squareThree') {
      event.target.classList.add('active-color3')
    } if (event.target.id === 'squareFour') {
      event.target.classList.add('active-color4')
    } if (event.target.id === 'squareFive') {
      event.target.classList.add('active-color5')
    }  if (event.target.id === 'squareSix') {
      event.target.classList.add('active-color6')
    } if (event.target.id === 'squareSeven') {
      event.target.classList.add('active-color7')
    } if (event.target.id === 'squareEight') {
      event.target.classList.add('active-color8')
    } if (event.target.id === 'squareNine') {
      event.target.classList.add('active-color9')
    }  
  } 
  // squareChange()
  event.target.innerText = newGame[currentPlayer].token
  newGame.updateBoard(event)
  displayWin()
  changeTurn()
  checkDraw()
}

