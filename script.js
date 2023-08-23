let playerWins = 0
let computerWins = 0
let ties = 0

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) return 'rock'
  else if (random === 1) return 'paper'
  else return 'scissors'
}

const getPlayerChoice = () => {
  let choice
  do
    choice = prompt(
      'What is your choice: rock, paper, or scissors?'
    ).toLowerCase()
  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')
  return choice
}

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
    return `You win! ${playerChoice} beats ${computerChoice}`
  } else if (winner === 'computer') {
    computerWins += 1
    return `You lose! ${computerChoice} beats ${playerChoice}`
  } else {
    ties += 1
    return `Tie! ${computerChoice} ties ${playerChoice}`
  }
}

const game = () => {
  for (i = 0; i < 5; i++) {
    console.log(determineWinner(getComputerChoice(), getPlayerChoice()))
  }
  console.log(
    `GAME OVER! \nPlayer wins: ${playerWins} \nComputer wins: ${computerWins} \nTies: ${ties}`
  )
}

game()
