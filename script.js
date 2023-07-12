// Simple rock, paper, scissors game against the computer.

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10000);
    switch(randomNumber % 3){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}