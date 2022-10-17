let computerChoiceDisplay = document.getElementById('computer-Choice');
let userChoiceDisplay = document.getElementById('player-Choice');
let resultDisplay = document.getElementById('result');
let possibleChoices = document.querySelectorAll('button');


let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))


function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1 //or multiply by 3 since the length of possibleChoices is 3
  
  if (randomNumber === 1) {
    computerChoice = 'Rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'Paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You Win!';
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'You Lose!';
  }
  if (computerChoice === 'Paper' && userChoice=== 'Scissors') {
    result = 'You Win!';
  }
  if (computerChoice === 'Paper' && userChoice=== 'Rock') {
    result = 'You Lose!';
  }
  if (computerChoice === 'Scissors' && userChoice=== 'Rock') {
    result = 'You Win!';
  }
  if (computerChoice === 'Scissors' && userChoice=== 'Paper') {
    result = 'You Lose!';
  }
  resultDisplay.innerHTML = result;
} 
