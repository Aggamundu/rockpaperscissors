var humanScore = 0;
var computerScore = 0;

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
function getHumanChoice(){
  var a = prompt("choose");
  if (a.toLowerCase() == "rock" || a.toLowerCase() == "paper" || a.toLowerCase() == "scissors"){
    return a.toLowerCase();
  } else{
    console.log("pick a valid object idiot, or type it undercase");
    getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice){
  
  switch(true){
    case humanChoice=="rock"&&computerChoice=="paper":
      console.log("You lose. Paper beats rock");
      computerScore++;
      return;
    case humanChoice == "rock" && computerChoice == "scissors":
      console.log("You win. rock beats scissors");
      humanScore++;
      return;
    case humanChoice == "paper" && computerChoice == "scissors":
      console.log("You lose. scissors beats paper");
      computerScore++;
      return;
    case humanChoice == "paper" && computerChoice == "rock":
      console.log("You win. Paper beats rock");
      humanScore++;
      return;
    case humanChoice == "scissors" && computerChoice == "rock":
      console.log("You lose. scissors beats rock");
      computerScore++;
      return;
    case humanChoice == "scissors" && computerChoice == "paper":
      console.log("You win. scissors beats paper");
      humanScore++;
      return;
    default:
      console.log("tie");
  }
}

for(i = 0;i<5;i++){
  playRound(getHumanChoice(),getComputerChoice());
}
console.log("You: "+humanScore + "\nComputer: "+computerScore);

