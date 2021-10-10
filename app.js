window.onload = function () {
  let inputSten = document.getElementById('sten')
  let inputSaks = document.getElementById('saks')
  let inputPapir = document.getElementById('papir')
  let computerChoice = document.getElementById('computerchoice')
  console.log(inputSten)
  console.log(inputSaks)
  console.log(inputPapir)

  let userChoice = 0
  let computerChoiceRandom = Math.random()
  console.log(computerChoice)

  computerChoice.innerText = 'Computeren valgte: ' + computerChoiceRandom
}
