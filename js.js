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
            return alert("Its a Scissor tie"), playerScore, comScore++
        } else{
            return alert("You lose! Rock beats Scissor"), playerScore, comScore
        }}
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

function checkScore(){
    score.textContent =`Player score is ${playerScore}, Com score is ${comScore}`;
    if (playerScore >=5){
        alert("YOU WIN KING");
        winOrLose.textContent = "YOU WIN KING";
    } else if (comScore >=5){
        alert("SCRUB YOU LOSE");
        winOrLose.textContent = "SCRUB YOU LOSE";
    }
}

const score = document.querySelector('#score'); 
const winOrLose = document.querySelector('#winOrLose');
winOrLose.textContent = "LETS GOOOOOOOO";




let playerScore = 0, comScore = 0;
score.textContent = `Player score is ${playerScore}, Com score is ${comScore}`;

const btn = document.querySelectorAll('button'); 
btn.forEach((button)=>{
    button.addEventListener('click', checkScore);
})




function game5(){
    let score = 0
    for (let i=0; i<5; i++){
        let player = prompt("Choose rock, paper or scissor")
        let result = round(player, compueterPlay());
        if (result.includes("win")){
            score++
        } else if (result.includes("lose")){
            score--
        }
        alert(`${result}, Current score is ${score}`)
    }
    if (score>0){
        alert(`You  Win! Final score is ${score}!`)
    } else if (score<0) {
        alert(`You Lose! Final score is ${score}!`)
    } else{
        alert(`You Tie! Final score is ${score}!`)
    }
}

