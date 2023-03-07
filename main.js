// ******* QUERY SELECTORS ********
var playerOneToken = document.querySelector('#tokenOne');
var playerTwoToken = document.querySelector('#tokenTwo');
var winCountOne = document.querySelector('#winCountOne');
var winCountTwo = document.querySelector('#winCountTwo');

var roundControl = document.querySelector('.roundControl');
var roundDisplay = document.querySelector('#roundDisplay');
var turnDisplay = document.querySelector('#turnDisplay');
var turnStatus = document.querySelector('#turnStatus');

var squareOne = document.querySelector('#squareOne');
var squareTwo = document.querySelector('#squareTwo');
var squareThree = document.querySelector('#squareThree');
var squareFour = document.querySelector('#squareFour');
var squareFive = document.querySelector('#squareFive');
var squareSix = document.querySelector('#squareSix');
var squareSeven = document.querySelector('#squareSeven');
var squareEight = document.querySelector('#squareEight');
var squareNine = document.querySelector('#squareNine');
var entireBoard = document.querySelector('#gameBoard');

// ******* DATA MODEL ******* 
var newGame = new Game();
var playerOne = newGame.playerOne;
var playerTwo = newGame.playerTwo;

// ******* EVENT LISTENERS ******* 
squareOne.addEventListener('click', playerTurn);
squareTwo.addEventListener('click', playerTurn);
squareThree.addEventListener('click', playerTurn);
squareFour.addEventListener('click', playerTurn);
squareFive.addEventListener('click', playerTurn);
squareSix.addEventListener('click', playerTurn);
squareSeven.addEventListener('click', playerTurn);
squareEight.addEventListener('click', playerTurn);
squareNine.addEventListener('click', playerTurn);

// ******* EVENT HANDLERS
function changeToken() {
  if (newGame.playingNow === 'playerTwo') {
    turnDisplay.innerHTML = `<img id="turnStatus" src="./assets/playertwoturn2.png" alt="player one turn"/>` 
  } 
  else if (newGame.playingNow === 'playerOne') 
  turnDisplay.innerHTML = `<img id="turnStatus" src="./assets/playeroneturn2.png" alt="player one turn"/>`
  }

function displayRound() {
  if (newGame.currentRound === 1) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/round1.png" alt="round 1"/>`
    setTimeout(changeToken, 1000)
  } else if (newGame.currentRound === 2) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/round2.png" alt="round 2"/>`
    setTimeout(changeToken, 1000)
  } else if (newGame.currentRound === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/round3.png" alt="round 3"/>
    <div id="turnDisplay"></div>`
    setTimeout(changeToken, 1000)
  } else if (newGame.playerOne.wins === 3 || newGame.playerTwo.wins === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/gameover.png" alt="game over"/>
    <div id="turnDisplay"></div>`
    setTimeout(changeToken, 3000)
    setTimeout(endGame, 3000)
  }
}
function domBoardReset() {
  squareOne.innerText = ''
  squareOne.className = ''
  squareOne.classList.add('square-one')
  squareOne.addEventListener('click', playerTurn)
  squareTwo.innerText = ''
  squareTwo.className = ''
  squareTwo.classList.add('square-two')
  squareTwo.addEventListener('click', playerTurn)
  squareThree.innerText = ''
  squareThree.className = ''
  squareThree.classList.add('square-three')
  squareThree.addEventListener('click', playerTurn)
  squareFour.innerText = ''
  squareFour.className = ''
  squareFour.classList.add('square-four')
  squareFour.addEventListener('click', playerTurn)
  squareFive.innerText = ''
  squareFive.className = ''
  squareFive.classList.add('square-five')
  squareFive.addEventListener('click', playerTurn)
  squareSix.innerText = ''
  squareSix.className = ''
  squareSix.classList.add('square-six')
  squareSix.addEventListener('click', playerTurn)
  squareSeven.innerText = ''
  squareSeven.className = ''
  squareSeven.classList.add('square-seven')
  squareSeven.addEventListener('click', playerTurn)
  squareEight.innerText = ''
  squareEight.className = ''
  squareEight.classList.add('square-eight')
  squareEight.addEventListener('click', playerTurn)
  squareNine.innerText = ''
  squareNine.className = ''
  squareNine.classList.add('square-nine')
  squareNine.addEventListener('click', playerTurn)
  }

function endGame() {
  if (newGame.playerOne.wins === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/gameover.png" alt="game over"/> `
  } else if (newGame.playerTwo.wins === 3) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/gameover" alt="game over"/> `
  }
  newGame.newGame()
  roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/round1.png" alt="round 1"/>
    <div id="turnDisplay"></div>`
  turnDisplay.innerHTML = `<img id="turnStatus" src="./assets/playeroneturn2.png" alt="player one turn"/>`
  winCountOne.src = './assets/zero.png' 
  winCountOne.alt = 'zero'
  winCountTwo.src = './assets/zero.png' 
  winCountTwo.alt = 'zero'
  domBoardReset()
}


function newBoard() {
  displayRound()
  if (newGame.currentWin === 'playerOne') {  
    turnDisplay.innerHTML = `<img id="turnStatus" src="./assets/playertwoturn2.png" alt="player one turn"/>`
  } else if (newGame.currentWin === 'playerTwo') {
    turnDisplay.innerHTML = `<img id="turnStatus" src="./assets/playeroneturn2.png" alt="player one turn"/>`
  }
  newGame.resetBoard()
  domBoardReset()
}

function displayWinner() {
  if (newGame.currentWin === 'playerOne') {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/player1winss.png" alt="Player One Wins!"/>
    `
  setTimeout(newBoard,1000)
  changeToken()
} else if (newGame.currentWin === 'playerTwo') {
  roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/player2winss.png" alt="Player Two Wins!"/>`
  setTimeout(newBoard,1000)
  changeToken()
}
}

function checkDraw() {
  if (newGame.draw === true) {
    roundDisplay.innerHTML = `<img id="roundStatus" src="./assets/draw.png" alt="Draw!"/>`
    setTimeout(newBoard,1000)
    changeTurn()
    changeToken()
  }
}

function playerOneScoreDisplay() {
  if (newGame.playerOne.wins === 1) {
    winCountOne.src = './assets/one.png'
    winCountOne.alt = 'one'
  } else if (newGame.playerOne.wins === 2) {
    winCountOne.src = './assets/two.png' 
    winCountOne.alt = 'two'
  } else if (newGame.playerOne.wins === 3) {
    winCountOne.src = './assets/three.png'
    winCountOne.alt = 'three'
    setTimeout(endGame, 3000)
}
}

function playerTwoScoreDislay() {
  if (newGame.playerTwo.wins === 1) {
    winCountTwo.src = './assets/one.png'
    winCountTwo.alt = 'one'
  } else if (newGame.playerTwo.wins === 2) {
    winCountTwo.src = './assets/two.png' 
    winCountTwo.alt = 'two'
  } else if (newGame.playerTwo.wins === 3) {
    winCountTwo.src = './assets/three.png'
    winCountTwo.alt = 'three'
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
    newGame.currentWin = undefined
  } else if (newGame.currentWin === 'playerTwo') {
    displayScore()
    displayWinner()
    newGame.currentWin = undefined
  }
}

function playerTurn(event) {
    if (!event.target.innerHTML) {
      if (event.target.id === 'squareOne') {
        event.target.classList.add('active-color13579')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareTwo') {
        event.target.classList.add('active-color2468')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareThree') {
        event.target.classList.add('active-color13579')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareFour') {
        event.target.classList.add('active-color2468')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareFive') {
        event.target.classList.add('active-color13579')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareSix') {
        event.target.classList.add('active-color2468')
        event.target.removeEventListener('click', playerTurn)
      }if (event.target.id === 'squareSeven') {
        event.target.classList.add('active-color13579')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareEight') {
        event.target.classList.add('active-color2468')
        event.target.removeEventListener('click', playerTurn)
      } if (event.target.id === 'squareNine') {
        event.target.classList.add('active-color13579')
        event.target.removeEventListener('click', playerTurn)
      }  
    event.target.innerHTML =  `<img src="${newGame[newGame.playingNow].token}" class="token"/>`
    newGame.updateBoard(event)
    displayWin()
    checkDraw()
    changeToken()
    } 
}