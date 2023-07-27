// Simple rock, paper, scissor game against the computer.

let playerScore, computerScore, roundNumber;
playerScore = computerScore = roundNumber = 0;

// Generates scoreboard and initial values.
const scoreboard = document.querySelector('.scoreboard');
const resultText = document.createElement('div');
scoreboard.appendChild(resultText);
const scores = document.querySelector('.scores');
const playerDiv = document.createElement('div');
const computerDiv = document.createElement('div')
playerDiv.textContent = `${playerScore}`;
computerDiv.textContent = `${computerScore}`;
scores.appendChild(playerDiv);
scores.appendChild(computerDiv);

// Variables for the rock, paper, scissor games.
const rock = document.querySelector('#rock');
rock.addEventListener('click', (event) => {
    gameResults(playRound("rock", getComputerChoice()));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', (event) => {
    gameResults(playRound("paper", getComputerChoice()));
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', (event) => {
    gameResults(playRound("scissor", getComputerChoice()));
});

// Decides a random choice for the computer.
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10000);
    switch(randomNumber % 3){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

// Plays a full round of rock, paper, scissors using
// players input and computer input, and returns reseults.
function playRound(playerSelection="rock", computerSelection){

    if (playerSelection === null){
        return ["Game prematurely ended.", 0, 0];
    } 
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return [`Draw! ${playerSelection} ties ${computerSelection}`, 1, 1];
    }else if ((playerSelection === "rock" && computerSelection === "paper") ||
              (playerSelection === "paper" && computerSelection === "scissor") ||
              (playerSelection === "scissor" && computerSelection === "rock")){
        return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
    }else if ((playerSelection === "rock" && computerSelection === "scissor") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissor" && computerSelection === "paper")){
        return [`You Win! ${playerSelection} beats ${computerSelection}`, 1, 0];
    }else{
        return ["Bad input, try again.", 0, 0]
    }
}

function gameResults(results){

    playerScore += results[1];
    computerScore += results[2];
    playerDiv.textContent = `${playerScore}`;
    computerDiv.textContent = `${computerScore}`;

    roundNumber++;
    if (roundNumber === 5){
        // Essentially the game is "over" after 5 rounds.
        if (playerScore > computerScore){
            resultText.textContent = "You beat the computer!";
        }else if (playerScore < computerScore){
            resultText.textContent = "You lost to the computer.";
        }else{
            resultText.textContent = "You tied with the computer.";
        }
        playerScore = computerScore = roundNumber = 0;
        return;
    }

    resultText.textContent = results[0];
}