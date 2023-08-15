function getComputerChoice()
{
    let varRandom = Math.floor((Math.random() * 3) + 1)
    if (varRandom == 1) {
        return "rock";
    } 
    else if (varRandom == 2) {
        return "paper";
    } 
    else if (varRandom == 3) {
        return "scissor";
    }
}

function roundPlay(playerInput, computerChoice)
{
    let playerChoice = playerInput.toLowerCase();
    if (playerChoice == computerChoice)
    {
        return "Draw";
    }
    else if (playerChoice == "rock" && computerChoice == "scissor" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissor" && computerChoice == "paper"){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }
    else if (computerChoice == "rock" && playerChoice == "scissor" || computerChoice == "paper" && playerChoice == "rock" || computerChoice == "scissor" && playerChoice == "paper" ){
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissor?");
        alert(roundPlay(playerSelection,getComputerChoice()));
    }
}

game();