var humanScore = 0;
var computerScore = 0;
const btnR = document.querySelector("#R");
const btnP = document.querySelector("#P");
const btnS = document.querySelector("#S");
const results = document.querySelector("div");

btnR.addEventListener("click",()=>playRound("rock",getComputerChoice()));
btnP.addEventListener("click",()=>playRound("paper",getComputerChoice()));
btnS.addEventListener("click",()=>playRound("scissors",getComputerChoice()));
function getComputerChoice(){
  let num = Math.random();
  switch(true){
    case num<=(1/3):
      return "rock";
    case num<=(2/3):
      return "scissors";
    case num <=1:
      return "paper";
    default:
      return null;
  }
}

function playRound(humanChoice, computerChoice){
  const score = document.createElement("div");
  switch(true){
    case humanScore ==5:
      score.textContent = "Game over, you win";
      results.append(score);
      return;
    case computerScore ==5:
      score.textContent = "Game over, you lose";
      results.append(score);
      return;
  } 

  switch(true){
    case humanChoice=="rock"&&computerChoice=="paper":
      computerScore++;
      score.textContent = "You lose. Paper beats rock |" + humanScore + " "+ computerScore; 
      results.append(score);
      return;
    case humanChoice == "rock" && computerChoice == "scissors":

      humanScore++;
      score.textContent = "You win. rock beats scissors |" + humanScore + " "+ computerScore; 
      results.append(score);
      return;
    case humanChoice == "paper" && computerChoice == "scissors":
      computerScore++;
      score.textContent = "You lose. scissors beats paper |" + humanScore + " "+ computerScore; 
      results.append(score);
      return;
    case humanChoice == "paper" && computerChoice == "rock":
      humanScore++;
      score.textContent = "You win. Paper beats rock |" + humanScore + " "+ computerScore; 
      results.append(score);
      return;
    case humanChoice == "scissors" && computerChoice == "rock":
      computerScore++;
      score.textContent = "You lose. scissors beats rock |" + humanScore + " "+ computerScore; 
      results.append(score);
      return;
    case humanChoice == "scissors" && computerChoice == "paper":
      humanScore++;
      score.textContent = "You win. scissors beats paper |" + humanScore + " "+ computerScore; 
      results.append(score);
      return;
    default:
      score.textContent = "TIE!";
      results.append(score);
  }
}




