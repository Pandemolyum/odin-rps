// A game of rock paper scissors that is played in the console.

playGame();

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

function getHumanChoice() {
    return prompt("What do you pick? Rock, paper, or scissors?")
}

function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === compChoice) {
        console.log("It's a tie!")
        return -1;
    } else if (humanChoice === "rock" && compChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        return 0;
    } else if (humanChoice === "rock" && compChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        return 1;
    } else if (humanChoice === "paper" && compChoice === "rock") {
        console.log("You win! Paper beats Rock.")
        return 1;
    } else if (humanChoice === "paper" && compChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.")
        return 0;
    } else if (humanChoice === "scissors" && compChoice === "rock") {
        console.log("You lose! Rock beats Scissors.")
        return 0;
    } else if (humanChoice === "scissors" && compChoice === "paper") {
        console.log("You win! Scissors beat Paper.")
        return 1;
    } else {
        console.log("You lose. Invalid choice.")
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let result = playRound(humanChoice, compChoice);

        if (result === 1) {
            humanScore++;
        } else if (result === 0) {
            compScore++;
        }

        console.log("The score is " + humanScore + "-" + compScore);
    }
}