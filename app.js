window.onload = function () {
  let inputRock = document.querySelector('#rock')
  let inputPaper = document.querySelector('#paper')
  let inputScissor = document.querySelector('#scissor')
  let computerChoice = document.querySelector('#computerchoice')
  let finalResult = document.querySelector('#result')

  function playGame() {
    document.querySelector('#resultButton').onclick = () => {
      console.log(result(getUserChoice(), getComputerChoice()))

      computerChoice.innerText = 'Computer choice: ' + getComputerChoice() + ' - User choice: ' + getUserChoice()
      finalResult.innerText = 'The result is: ' + result()
    }
  }

  playGame()
}

function getUserChoice(userChoice) {
  document.querySelector('#rock').onclick = () => {
    userChoice = 'ROCK'
    return userChoice
  }

  document.querySelector('#paper').onclick = () => {
    userChoice = 'PAPER'
    return userChoice
  }

  document.querySelector('#scissor').onclick = () => {
    userChoice = 'SCISSOR'
    return userChoice
  }

  document.querySelector('#pickButton').onclick = () => {
    console.log(userChoice)
    return userChoice
  }
}

//Explain how Math.floor & Math.random works
function getComputerChoice(computerChoice) {
  let computerChoiceRandom = Math.floor(Math.random() * 3)
  if (computerChoiceRandom === 0) {
    computerChoice = 'ROCK'
    return computerChoice
  } else if (computerChoiceRandom === 1) {
    computerChoice = 'PAPER'
    return computerChoice
  } else {
    computerChoice = 'SCISSOR'
    return computerChoice
  }
}

//Somehow it never goes into the if statements, goes directly to the else, figure out why.
//userChoice always seems to be 'undefined'?
function result(userChoice, computerChoice) {
  //ROCK
  if (userChoice === 'ROCK' && computerChoice === 'SCISSOR') {
    console.log('You win. Rock beats scissor')
    return 'You win. Rock beats scissor'
  } else if (userChoice === 'ROCK' && computerChoice === 'PAPER') {
    console.log('You loose. Paper beats rock')
    return 'You loose. Paper beats rock'
  } else if (userChoice === 'ROCK' && computerChoice === 'ROCK') {
    console.log('Draw. You both choose rock')
    return 'Draw. You both choose rock'
  }
  //SCISSOR
  else if (userChoice === 'SCISSOR' && computerChoice === 'PAPAER') {
    console.log('You win. Scissor beats paper')
    return 'You win. Scissor beats paper'
  } else if (userChoice === 'SCISSOR' && computerChoice === 'ROCK') {
    console.log('You loose. Rock beats scissor')
    return 'You loose. Rock beats scissor'
  } else if (userChoice === 'SCISSOR' && computerChoice === 'SCISSOR') {
    console.log('Draw. You both choose scissor')
    return 'Draw. You both choose scissor'
  }
  //PAPER
  else if (userChoice === 'PAPER' && computerChoice === 'ROCK') {
    console.log('You win. Paper beats rock')
    return 'You win. Paper beats rock'
  } else if (userChoice === 'PAPER' && computerChoice === 'SCISSOR') {
    console.log('You loose. Scissor beats paper')
    return 'You loose. Scissor beats paper'
  } else if (userChoice === 'PAPER' && computerChoice === 'PAPER') {
    console.log('Draw. You both choose paper')
    return 'Draw. You both choose paper'
  } else {
    console.log('ERROR! You didnt pick anything')
    return 'ERROR! You didnt pick anything'
  }
}
