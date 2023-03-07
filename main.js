//QUERY SELECTORS//
var playerOneToken = document.querySelector('#tokenOne')
var playerTwoToken = document.querySelector('#tokenTwo')
var winCountOne = document.querySelector('#winCountOne')
var winCountTwo = document.querySelector('#winCountTwo')

var roundDisplay = document.querySelector('#roundDisplay')
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

//DATA MODEL//
var newGame = new Game()
var playerOne = newGame.playerOne
var playerTwo = newGame.playerTwo
var currentPlayer = 'playerOne'

//EVENT LISTENERS//
squareOne.addEventListener('click', playerTurn)
squareTwo.addEventListener('click', playerTurn)
squareThree.addEventListener('click', playerTurn)
squareFour.addEventListener('click', playerTurn)
squareFive.addEventListener('click', playerTurn)
squareSix.addEventListener('click', playerTurn)
squareSeven.addEventListener('click', playerTurn)
squareEight.addEventListener('click', playerTurn)
squareNine.addEventListener('click', playerTurn)

//FUNCTIONS//

function changeTurn() {
  if (newGame.playerTwoTurn === true) {
    currentPlayer = 'playerTwo' 
  } 
  else if (newGame.playerOneTurn === true) 
  currentPlayer = 'playerOne'
  }

function changeToken() {
  if (newGame.playerTwoTurn === true) {
    turnDisplay.innerHTML = `<img id="turnStatus" src="./playertwoturn2.png" alt="player one turn"/>` 
  } 
  else if (newGame.playerOneTurn === true) 
  turnDisplay.innerHTML = `<img id="turnStatus" src="./playeroneturn2.png" alt="player one turn"/>`
  }

function displayRound() {
  if (newGame.currentRound === 1) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./round1.png" alt="round 1"/>
    <div id="turnDisplay"></div>`
    setTimeout(changeTurn, 1000)
    setTimeout(changeToken, 1000)
  } else if (newGame.currentRound === 2) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./round2.png" alt="round 2"/>
    <div id="turnDisplay"></div>`
    setTimeout(changeTurn, 1000)
    setTimeout(changeToken, 1000)
  } else if (newGame.currentRound === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./round3.png" alt="round 3"/>
    <div id="turnDisplay"></div>`
    setTimeout(changeTurn, 1000)
    setTimeout(changeToken, 1000)
  } else if (newGame.playerOne.wins === 3 || newGame.playerTwo.wins === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./gameover.png" alt="game over"/>
    <div id="turnDisplay"></div>`
    setTimeout(changeTurn, 1000)
    setTimeout(changeToken, 1000)
  }
}

function endGame() {
  if (newGame.playerOne.wins === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./round3.png" alt="round 3"/> `
  } else if (newGame.playerTwo.wins === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./round3.png" alt="round 3"/> `
  }
  newGame.newGame()
  currentPlayer = 'playerOne'
  roundDisplay.innerHTML = `<img id="roundStatus" src="./round1.png" alt="round 1"/>
    <div id="turnDisplay"></div>`
  turnDisplay.innerHTML = `<img id="turnStatus" src="./playeroneturn2.png" alt="player one turn"/>`
  winCountOne.src = './zero.png' 
  winCountOne.alt = 'zero'
  winCountTwo.src = './zero.png' 
  winCountTwo.alt = 'zero'
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
}

function newBoard() {
  displayRound()
  if (newGame.currentWin === 'playerOne') {  
    currentPlayer = 'playerTwo'
  } else if (newGame.currentWin === 'playerTwo') {
    currentPlayer = 'playerOne'
  }
  newGame.resetBoard()
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
}

function displayWinner() {
  if (newGame.currentWin === 'playerOne') {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./player1winss.png" alt="Player One Wins!"/>
    `
  setTimeout(newBoard,1000)
  changeTurn()
  changeToken()
} else if (newGame.currentWin === 'playerTwo') {
  roundDisplay.innerHTML = `<img id="roundStatus" src="./player2winss.png" alt="Player Two Wins!"/>`
  setTimeout(newBoard,1000)
  changeTurn()
  changeToken()
}
}

function checkDraw() {
  if (newGame.draw === true) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./draw.png" alt="Draw!"/>`
    setTimeout(newBoard,1000)
    changeTurn()
    changeToken()
  }
}

function playerOneScoreDisplay() {
  if (newGame.playerOne.wins === 1) {
    winCountOne.src = './one.png'
    winCountOne.alt = 'one'
  } else if (newGame.playerOne.wins === 2) {
    winCountOne.src = './two.png' 
    winCountOne.alt = 'two'
  } else if (newGame.playerOne.wins === 3) {
    winCountOne.src = './three.png'
    winCountOne.alt = 'three.png'
    setTimeout(endGame, 3000)
}
}

function playerTwoScoreDislay() {
  if (newGame.playerTwo.wins === 1) {
    winCountTwo.src = './one.png'
    winCountTwo.alt = 'one'
  } else if (newGame.playerTwo.wins === 2) {
    winCountTwo.src = './two.png' 
    winCountTwo.alt = 'two'
  } else if (newGame.playerTwo.wins === 3) {
    winCountTwo.src = './three.png'
    winCountTwo.alt = 'three.png'
    setTimeout(endGame, 3000)
}
}

function displayScore() {
playerOneScoreDisplay()
playerTwoScoreDislay()
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

function playerTurn(event) {
  if (!event.target.innerText) {
    if (!event.target.innerText) {
      if (event.target.id === 'squareOne') {
        event.target.classList.add('active-color13579')
      } if (event.target.id === 'squareTwo') {
        event.target.classList.add('active-color2468')
      } if (event.target.id === 'squareThree') {
        event.target.classList.add('active-color13579')
      } if (event.target.id === 'squareFour') {
        event.target.classList.add('active-color2468')
      } if (event.target.id === 'squareFive') {
        event.target.classList.add('active-color13579')
      } if (event.target.id === 'squareSix') {
        event.target.classList.add('active-color2468')
      }if (event.target.id === 'squareSeven') {
        event.target.classList.add('active-color13579')
      } if (event.target.id === 'squareEight') {
        event.target.classList.add('active-color2468')
      } if (event.target.id === 'squareNine') {
        event.target.classList.add('active-color13579')
      }  
    } 
  event.target.innerHTML =  `<img src="${newGame[currentPlayer].token}" class="token"/>`
  newGame.updateBoard(event)
  displayWin()
  checkDraw()
  changeTurn()
  changeToken()
  }
}