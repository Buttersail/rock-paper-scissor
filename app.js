window.onload = function () {
  let inputRock = document.getElementById('rock')
  let inputPaper = document.getElementById('paper')
  let inputScissor = document.getElementById('scissor')
  let computerChoice = document.getElementById('computerchoice')

  getUserChoice()
  getComputerChoice()
  // result()
  computerChoice.innerText = 'Computer choice: ' + getComputerChoice()
}

function getUserChoice(userChoice) {
  document.getElementById('rock').onclick = function changeContent() {
    console.log('ROCK')
    return (userChoice = 'ROCK')
  }

  document.getElementById('paper').onclick = function changeContent() {
    console.log('PAPER')
    return (userChoice = 'PAPER')
  }

  document.getElementById('scissor').onclick = function changeContent() {
    console.log('SCISSOR')
    return (userChoice = 'SCISSOR')
  }
}

function getComputerChoice(computerChoice) {
  let computerChoiceRandom = Math.floor(Math.random() * 3)
  if (computerChoiceRandom === 0) {
    return (computerChoice = 'ROCK')
  } else if (computerChoiceRandom === 1) {
    return (computerChoice = 'PAPER')
  } else {
    return (computerChoice = 'SCISSOR')
  }
}

// function result() {
//   if (userChoice == 'ROCK' && computerChoice == 'SCISSOR') {
//     console.log('You win')
//   }
// }
