let userScore=0;
let computerScor=0;
const user_score_span=document.getElementById("user-score");
const comp_score_span=document.getElementById("comp-score");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissores_div=document.getElementById("s");
const result_p=document.querySelector(".result>p");

function getComputerChoice(){
  const choices = ['r' , 'p' , 's'];
  const randomNum= Math.floor(Math.random()*3);
  console.log(randomNum);
  return choices[randomNum];
}

function convertToWord(letter){
  if(letter =='r')
  { return letter="Rock";}
  else if (letter =='p')
  {return letter="paper";}
  else return "scissores";
}

function game (userChoice){
  var computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(userChoice);
  switch (userChoice + computerChoice) {
    case "sp":
    case "rs":
    case "pr":
    win( userChoice , computerChoice );
    break;

    case "ps":
    case "sr":
    case "rp":
    lose( userChoice , computerChoice );
    break;

    case "ss":
    case "rr":
    case "pp":
    draw( userChoice , computerChoice );
    break;
  }
}

function win( userChoice , computerChoice ){
  userScore++;
  var user="user".fontsize(3).sub();
  var comp="comp".fontsize(3).sub();
  var userChoice_div=document.getElementById(userChoice);
  user_score_span.innerHTML=userScore;
  comp_score_span.innerHTML=computerScor;
  result_p.innerHTML=convertToWord(userChoice)+ user +" beats "+convertToWord(computerChoice)+comp;
  userChoice_div.classList.add("green-glow");
  setTimeout( () => userChoice_div.classList.remove('green-glow'),600);

  console.log("win");
}

function lose( userChoice , computerChoice ){
  computerScor++;
  var user="user".fontsize(3).sub();
  var comp="comp".fontsize(3).sub();
  var userChoice_div=document.getElementById(userChoice);
  comp_score_span.innerHTML=computerScor;
  user_score_span.innerHTML=userScore;
  result_p.innerHTML=convertToWord(userChoice)+ user +" lost "+convertToWord(computerChoice)+comp;
  userChoice_div.classList.add("red-glow");
  setTimeout( () => userChoice_div.classList.remove('red-glow'),600);

  console.log("loser");
}

function draw( userChoice , computerChoice ){
  console.log("draw");
  var user="user".fontsize(3).sub();
  var comp="comp".fontsize(3).sub();
  var userChoice_div=document.getElementById(userChoice);
  result_p.innerHTML=convertToWord(userChoice)+user +" equals "+convertToWord(computerChoice)+comp;
  userChoice_div.classList.add("gray-glow");
  setTimeout( () => userChoice_div.classList.remove('gray-glow'),600);

}

function main(){
  // rock_div.addEventListener('click',()=>game("r"));
  // paper_div.addEventListener('click',()=>game("p"));
  // scissores_div.addEventListener('click',()=>game("s"));

  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissores_div.addEventListener('click', () => game("s"));

}
main();
