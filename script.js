function computerPlay(){
    switch(Math.floor(Math.random()*3)){
        case 0: return "Rock";
                break;
        case 1: return "Paper";
                break;
        case 2: return "Scissor";
                break;
    }
}

function round(playerSelection, computerSelection){
        if(playerSelection==="Rock" && computerSelection==="Scissor" || 
           playerSelection==="Paper" && computerSelection==="Rock" || 
           playerSelection==="Scissor" && computerSelection==="Paper"){

                ++playerCount;
                 return `You Win!! ${playerSelection} beats ${computerSelection}`;
         }
         else if(playerSelection===computerSelection){

                  return "Tie";
                 }
        else{ 
                ++computerCount;
                 return `You Lose!! ${computerSelection} beats ${playerSelection}`;
        }
}

function game(){
        for(let i=0; i!=5;++i){
                let playerSelection=prompt("Enter rock, paper or scissor", " ").toLowerCase();
                if(playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissor"){
                    alert("Please enter a valid value(Rock, Paper or Scissor)");
                    --i;
                    continue;
                    
                }
                playerSelection=playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
                console.log(round(playerSelection, computerPlay())); 
                console.log(`Your Score:${playerCount}      Enemy Score:${computerCount}`);  
        }
        if(playerCount>computerCount){
                console.log("You WIN!!");
        }
        else if(playerCount===computerCount){
                console.log("TIE!!");
        }
        else{
                console.log("You LOSE!!");
        }
}

let playerCount=0;
let computerCount=0;
game();
