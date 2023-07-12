// Simple rock, paper, scissors game against the computer.

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10000);
    switch(randomNumber % 3){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection="rock", computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return `Draw! ${playerSelection} ties ${computerSelection}`;
    }else if ((playerSelection === "rock" && computerSelection === "paper") ||
              (playerSelection === "paper" && computerSelection === "scissors") ||
              (playerSelection === "scissors" && computerSelection === "rock")){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if ((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return "Bad input, try again."
    }
}