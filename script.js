let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

let rockBtn = document.getElementById("Rock");
rockBtn.addEventListener('click', function(){
    playRound('Rock', getComputerChoice());
});

const paperBtn = document.querySelector("#Paper");
paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

const scissorsBtn = document.querySelector("#Scissors");
scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});

function getComputerChoice () {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    const randomElement = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return randomElement;
}

// function getHumanChoice (){
//     let choice = prompt("Pick Rock Paper or Scissors");
//     console.log(choice);
//     return choice;
// }



function playRound (playerChoice, computerChoice){
    gameCount++;
    if (playerChoice == computerChoice){
        //tie
        document.getElementById("gameResults").innerHTML = "There has been a tie";
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper' || 
    playerChoice == 'Paper' && computerChoice == 'Scissors' || 
    playerChoice == 'Scissors' && computerChoice == 'Rock' )
    {
        //Player Lost
        document.getElementById("gameResults").innerHTML = "Computer wins!";
        computerScore++;

    } else if (computerChoice == 'Rock' && playerChoice == 'Paper' || 
    computerChoice == 'Paper' && playerChoice == 'Scissors' || 
    computerChoice == 'Scissors' && playerChoice == 'Rock' )
    {
        //Player Win
        document.getElementById("gameResults").innerHTML = "Player wins!";
        humanScore++;

    } else {
        console.log("Error :P")
    }
    console.log(playerChoice, computerChoice);

    if (gameCount > 5) {

        if (humanScore > computerScore) {
            document.getElementById("gameResults").innerHTML = "Human wins the match!";
        } else if (humanScore < computerScore){
            document.getElementById("gameResults").innerHTML = "Computer wins the match!";
        } else {
            document.getElementById("gameResults").innerHTML = "There has been an tie?";
        }
        gameCount = 0;
    }

    
}


function play () {
    playRound(getHumanChoice(), getComputerChoice());
    
}
// for (let i = 0; i < 5; i++) {
//     play();
// }

// if (computerScore > humanScore){
//     console.log("Computer wins");
// } else if (computerScore < humanScore) {
//     console.log("Human wins");
// } else if (computerScore == humanScore) {
//     console.log("Tie")
// } else {
//     console.log("Error")
// }
