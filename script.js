let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    const randomElement = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return randomElement
}

function getHumanChoice (){
    let choice = prompt("Pick Rock Paper or Scissors");
    console.log(choice);
    return choice;
}



function playRound (playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        //tie
        console.log("tie");
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper' || 
    playerChoice == 'Paper' && computerChoice == 'Scissors' || 
    playerChoice == 'Scissors' && computerChoice == 'Rock' )
    {
        //Player Lost
        console.log("computer win");
        computerScore++;

    } else if (computerChoice == 'Rock' && playerChoice == 'Paper' || 
    computerChoice == 'Paper' && playerChoice == 'Scissors' || 
    computerChoice == 'Scissors' && playerChoice == 'Rock' )
    {
        //Player Win
        console.log("player win");
        humanScore++;

    } else {
        console.log("Error :P")
    }
    console.log(playerChoice, computerChoice);
}

function play () {
    playRound(getHumanChoice(), getComputerChoice());
}


for (let i = 0; i < 5; i++) {
    play();
}
if (computerScore > humanScore){
    console.log("Computer wins");
} else if (computerScore < humanScore) {
    console.log("Human wins");
} else if (computerScore == humanScore) {
    console.log("Tie")
} else {
    console.log("Error")
}
