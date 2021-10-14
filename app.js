window.onload = function () {
  let computerChoice = document.querySelector('#computerchoice')
  let finalResult = document.querySelector('#result')

  function playGame() {
    document.querySelector('#resultButton').onclick = () => {
      computerChoice.innerText = 'Computer choice: ' + getComputerChoice() + ' - User choice: ' + getUserChoice()
      finalResult.innerText = 'The result is: ' + result()
      console.log(result(getUserChoice(), getComputerChoice()))
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

  document.querySelector('#scissors').onclick = () => {
    userChoice = 'SCISSORS'
    return userChoice
  }

  document.querySelector('#pickButton').onclick = () => {
    console.log(userChoice)
    return userChoice
  }
}

//Explain how Math.floor & Math.random works
//Math.floor: This function returns the largest int to a given number, thus rounding down that said int. We do this because we are going to compare to non decimal numbers.
//Math.random: This function is to generate a pseudo random number between 0 and <1. We multiply it by 3 to give us a range of numbers between 0 and 3.
function getComputerChoice(computerChoice) {
  let computerChoiceRandom = Math.floor(Math.random() * 3)
  if (computerChoiceRandom === 0) {
    computerChoice = 'ROCK'
    return computerChoice
  } else if (computerChoiceRandom === 1) {
    computerChoice = 'PAPER'
    return computerChoice
  } else {
    computerChoice = 'SCISSORS'
    return computerChoice
  }
}

//Somehow it never goes into the if statements, goes directly to the else, figure out why.
//userChoice always seems to be 'undefined'?
function result(userChoice, computerChoice) {
  //ROCK
  if (userChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    console.log('You win. Rock beats scissors')
    return 'You win. Rock beats scissors'
  } else if (userChoice === 'ROCK' && computerChoice === 'PAPER') {
    console.log('You loose. Paper beats rock')
    return 'You loose. Paper beats rock'
  } else if (userChoice === 'ROCK' && computerChoice === 'ROCK') {
    console.log('Draw. You both choose rock')
    return 'Draw. You both choose rock'
  }
  //SCISSORS
  else if (userChoice === 'SCISSORS' && computerChoice === 'PAPAER') {
    console.log('You win. Scissors beats paper')
    return 'You win. Scissors beats paper'
  } else if (userChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    console.log('You loose. Rock beats scissors')
    return 'You loose. Rock beats scissors'
  } else if (userChoice === 'SCISSORS' && computerChoice === 'SCISSORS') {
    console.log('Draw. You both choose scissors')
    return 'Draw. You both choose scissors'
  }
  //PAPER
  else if (userChoice === 'PAPER' && computerChoice === 'ROCK') {
    console.log('You win. Paper beats rock')
    return 'You win. Paper beats rock'
  } else if (userChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    console.log('You loose. Scissors beats paper')
    return 'You loose. Scissors beats paper'
  } else if (userChoice === 'PAPER' && computerChoice === 'PAPER') {
    console.log('Draw. You both choose paper')
    return 'Draw. You both choose paper'
  } else {
    console.log('ERROR! You didnt pick anything')
    return 'ERROR! You didnt pick anything'
  }
}

const meh = () => {
  const mehmeh = () => {
    return '5'
  }
}
