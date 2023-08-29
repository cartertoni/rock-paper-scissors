let playerWins = 0
let computerWins = 0
let tiedGames = 0

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) return 'rock'
  else if (random === 1) return 'paper'
  else return 'scissors'
}

// const getPlayerChoice = () => {
//   let choice
//   do
//     choice = prompt(
//       'What is your choice: rock, paper, or scissors?'
//     ).toLowerCase()
//   while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')
//   return choice
// }

const determineWinner = (computerChoice, playerChoice) => {
  let winner
  if (computerChoice === 'rock' && playerChoice === 'paper') {
    winner = 'player'
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    winner = 'computer'
  } else if (computerChoice === 'paper' && playerChoice === 'rock') {
    winner = 'computer'
  } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
    winner = 'player'
  } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
    winner = 'computer'
  } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
    winner = 'player'
  } else {
    winner = 'tie'
  }

  if (winner === 'player') {
    playerWins += 1
    checkForMatchWinner(`You win! ${playerChoice} beats ${computerChoice}`)
  } else if (winner === 'computer') {
    computerWins += 1
    checkForMatchWinner(`You lose! ${computerChoice} beats ${playerChoice}`)
  } else {
    tiedGames += 1
    checkForMatchWinner(`Tie! ${computerChoice} ties ${playerChoice}`)
  }
  return
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button =>
  button.addEventListener('click', () =>
    determineWinner(getComputerChoice(), button.classList.value)
  )
)

const checkForMatchWinner = message => {
  if (playerWins === 5) {
    updateDOM(`Player has won the match!`)
    endMatch()
  } else if (computerWins === 5) {
    updateDOM(`Computer has won the match!`)
    endMatch()
  } else updateDOM(message)
}

const updateDOM = message => {
  const outcome = document.querySelector('.outcome')
  outcome.textContent = message

  const player = document.querySelector('.player-wins')
  player.textContent = `Player wins: ${playerWins}`

  const computer = document.querySelector('.computer-wins')
  computer.textContent = `Computer wins: ${computerWins}`

  const ties = document.querySelector('.ties')
  ties.textContent = `Ties: ${tiedGames}`
}

const endMatch = () => {
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => (button.disabled = true))
}
