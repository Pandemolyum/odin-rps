// A game of rock paper scissors that is played in the console.
const allButtons = document.querySelectorAll('button');

for (button of allButtons) {
    button.addEventListener('click', (e) => playGame(e.target.textContent));
}

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

let humanScore = 0;
let compScore = 0;

// ============ Functions ============
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === compChoice) {
        result.textContent = "It's a tie!"
        return -1;
    } else if (humanChoice === "rock" && compChoice === "paper") {
        result.textContent = "You lose! Paper beats Rock."
        return 0;
    } else if (humanChoice === "rock" && compChoice === "scissors") {
        result.textContent = "You win! Rock beats Scissors."
        return 1;
    } else if (humanChoice === "paper" && compChoice === "rock") {
        result.textContent = "You win! Paper beats Rock."
        return 1;
    } else if (humanChoice === "paper" && compChoice === "scissors") {
        result.textContent = "You lose! Scissors beat Paper."
        return 0;
    } else if (humanChoice === "scissors" && compChoice === "rock") {
        result.textContent = "You lose! Rock beats Scissors."
        return 0;
    } else if (humanChoice === "scissors" && compChoice === "paper") {
        result.textContent = "You win! Scissors beat Paper."
        return 1;
    } else {
        result.textContent = "You lose. Invalid choice."
        return 0;
    }
}

function playGame(humanChoice) {
    let compChoice = getComputerChoice();
    let result = playRound(humanChoice, compChoice);

    if (result === 1) {
        humanScore++;
    } else if (result === 0) {
        compScore++;
    }

    if (humanScore >= 5) {
        score.textContent = "The score is " + humanScore + "-" + compScore + ". You won!";
    } else if (compScore >= 5) {
        score.textContent = "The score is " + humanScore + "-" + compScore + ". You lost :(";
    } else {
        score.textContent = "The score is " + humanScore + "-" + compScore;
    }
}