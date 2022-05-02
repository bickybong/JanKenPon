function compueterPlay() {
    let options =["Paper", "Scissor","Rock"]
    return options[Math.floor(Math.random()*3)]
}

function round(playerSelection, computerselection){
    if (playerSelection.toLowerCase() === "paper"){
        if (computerselection === "Paper"){
            return alert("Its a paper tie") , playerScore, comScore
        } else if (computerselection === "Scissor"){
            return alert("You lose! Scissor cuts paper"), playerScore, comScore++
        } else{
            return alert("You win! Paper eats rock"), playerScore++, comScore
        }
    }
    else if (playerSelection.toLowerCase() === "rock"){
        if (computerselection === "Paper"){
            return alert("You lose! Paper beats rock"), playerScore, comScore++
        } else if (computerselection === "Scissor"){
            return alert("You win! Rock beats Scissor"), playerScore++, comScore
        } else{
            return  alert("Its a rock tie"), playerScore, comScore
        }
    } else{
    if (playerSelection.toLowerCase() === "scissor"){
        if (computerselection === "Paper"){
            return  alert("You win! Scissor beats Paper"), playerScore++, comScore
        } else if (computerselection === "Scissor"){
            return alert("Its a Scissor tie"), playerScore, comScore
        } else{
            return alert("You lose! Rock beats Scissor"), playerScore, comScore++
        }}
    }}

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}

function checkScore(){
    score.textContent =`Player score is ${playerScore}, Com score is ${comScore}`;
    if (playerScore >=5){
        alert("YOU WIN KING");
        winOrLose.textContent = "YOU WIN KING";
        disableButtons();
    } else if (comScore >=5){
        alert("YOU LOSE TRY AGAIN");
        winOrLose.textContent = "YOU LOSE TRY AGAIN";
        disableButtons();
    }}

const rock = document.querySelector('#rock'); 
rock.addEventListener('click', () => 
 round("rock", compueterPlay(),playerScore,comScore));

const paper = document.querySelector('#paper'); 
paper.addEventListener('click', () => 
 round("paper", compueterPlay(),playerScore, comScore));

const scissor = document.querySelector('#scissor'); 
scissor.addEventListener('click', () => 
 round("scissor", compueterPlay(),playerScore,comScore));

const score = document.querySelector('#score'); 
const winOrLose = document.querySelector('#winOrLose');
winOrLose.textContent = "Choose your fate";

let playerScore = 0, comScore = 0;
score.textContent = `Player score is ${playerScore}, Com score is ${comScore}`;

const btn = document.querySelectorAll('button'); 
btn.forEach((button)=>{
    button.addEventListener('click', checkScore);
})

