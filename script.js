// Simple rock, paper, scissor game against the computer.

let playerScore, computerScore, roundNumber;
playerScore = computerScore = roundNumber = 0;

const scoreboard = document.querySelector('.scoreboard');
const playerDiv = document.createElement('div');
const computerDiv = document.createElement('div')
playerDiv.textContent = `${playerScore}`;
computerDiv.textContent = `${computerScore}`;
scoreboard.appendChild(playerDiv);
scoreboard.appendChild(computerDiv);

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
    alert(results[0]);

}

function game(){
    let playerTotalPoints, computerTotalPoints;
    playerTotalPoints = computerTotalPoints = 0;

    // for (let i=0; i < 5; i++){
    //     playerSelection = prompt("Input your choice: Rock, Paper, or scissor.");
    //     let result = playRound(playerSelection, getComputerChoice());
    //     console.log(result[0]);
    //     playerTotalPoints += result[1];
    //     computerTotalPoints += result[2];

    //     if (result[0] === "Bad input, try again."){
    //         i--;
    //     }else if(result[0] === "Game prematurely ended."){
    //         return;
    //     }
    // }

    if (playerTotalPoints > computerTotalPoints){
        alert("You Win!")
    }else if (playerTotalPoints < computerTotalPoints){
        alert("You Lose.")
    }else{
        alert("You Tied.")
    }
}