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

    if (playerSelection === computerSelection){
        return [`Draw! ${playerSelection} ties ${computerSelection}`, 1, 1];
    }else if ((playerSelection === "rock" && computerSelection === "paper") ||
              (playerSelection === "paper" && computerSelection === "scissors") ||
              (playerSelection === "scissors" && computerSelection === "rock")){
        return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
    }else if ((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")){
        return [`You Win! ${playerSelection} beats ${computerSelection}`, 1, 0];
    }else{
        return ["Bad input, try again.", 0, 0]
    }
}

function game(){
    let playerTotalPoints, computerTotalPoints;
    playerTotalPoints = computerTotalPoints = 0;

    for (let i=0; i < 5; i++){
        playerSelection = prompt("Input your choice: Rock, Paper, or Scissors.");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result[0]);
        playerTotalPoints += result[1];
        computerTotalPoints += result[2];

        if (result[0] === "Bad input, try again."){
            i--;
        }
    }

    if (playerTotalPoints > computerTotalPoints){
        console.log("You Win!")
    }else if (playerTotalPoints < computerTotalPoints){
        console.log("You Lose.")
    }else{
        console.log("You Tied.")
    }
}