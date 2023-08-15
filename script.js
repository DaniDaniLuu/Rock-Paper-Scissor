let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

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


function roundPlay(e)
{
    let decision;
    const playerType = e.currentTarget;
    if(playerType.classList.value.includes("Rock")){
        playerChoice = "rock";
    }
    else if (playerType.classList.value.includes("Paper")){
        playerChoice = "paper";
    }
    else if (playerType.classList.value.includes("Scissor")){
        playerChoice = "scissor";
    }
    computerChoice = getComputerChoice();
    if (playerChoice == computerChoice)
    {
        decision = "Draw"
    }
    else if (playerChoice == "rock" && computerChoice == "scissor" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissor" && computerChoice == "paper"){
        decision = "Player"
        playerScore++;
    }
    else if (computerChoice == "rock" && playerChoice == "scissor" || computerChoice == "paper" && playerChoice == "rock" || computerChoice == "scissor" && playerChoice == "paper" ){
        decision = "Computer"
        computerScore++;
    }
    console.log(decision);
    changeComputerColor(computerChoice);
    updateScore(decision);
    gameOver();
}

function updateScore(winner){
    if(winner == "Draw"){
        return;
    }
    else if (winner == "Player"){
        let pScore = document.getElementById('playerScoreText');
        pScore.textContent = `Score: ${playerScore}`;
    }
    else if (winner == "Computer"){
        let cScore = document.getElementById('computerScoreText');
        cScore.textContent = `Score: ${computerScore}`;
    }
}

function changeComputerColor(computerChoice){
    console.log(computerChoice);
    const rButton = document.querySelector('.computerButton.Rock')
    const pButton = document.querySelector('.computerButton.Paper')
    const sButton = document.querySelector('.computerButton.Scissor')
    const buttons = document.querySelectorAll('.computerButton');
    buttons.forEach((item) => item.style.cssText = 'background-color: white');
    if (computerChoice == "rock"){
        rButton.style.cssText = 'background-color: #7a91eb';
    }
    else if (computerChoice == "paper"){
        pButton.style.cssText = 'background-color: #7a91eb';
    }
    else if (computerChoice == "scissor"){
        sButton.style.cssText = 'background-color: #7a91eb';
    }

}

function changeButtonColor(e){
    const buttons = document.querySelectorAll('.playerButton');
    buttons.forEach((item) => item.style.cssText = 'background-color: white');
    const button = e.currentTarget;
    if(button.classList.value.includes("playerButton")){
        button.style.cssText = 'background-color: #c75f6a';
    }
}

function gameOver(){
    const header = document.querySelector('.header');
    if(playerScore == 5 || computerScore == 5){
        if(playerScore == 5){
            header.textContent = "GAME OVER! YOU WON!!";
        }
        else{
            header.textContent = "GAME OVER! YOU LOST!!";
        }
    }
    return;
}


const playerButtons = document.querySelectorAll('.playerButton')
playerButtons.forEach((playerButton) => playerButton.addEventListener('click', changeButtonColor));
playerButtons.forEach((playerButton) => playerButton.addEventListener('click', (e) =>{
    if (playerScore !== 5 && computerScore !== 5){
        roundPlay(e);
    }
    return;
}))

