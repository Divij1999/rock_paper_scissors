function computerPlay(){
    switch(Math.floor(Math.random()*3)){
        case 0: return "Rock";
                break;
        case 1: return "Paper";
                break;
        case 2: return "Scissor";
                break;
    }
    return;
}

function playRound(e){
        const computerSelection=computerPlay();
        const playerSelection=this.id;
        const result=document.querySelector(".result");
        const round=document.querySelector(".roundcount");
        round.innerText=`Round ${roundCount}`;
        if(playerSelection==="Rock" && computerSelection==="Scissor" || 
           playerSelection==="Paper" && computerSelection==="Rock" || 
           playerSelection==="Scissor" && computerSelection==="Paper"){

                ++playerCount;
                 result.innerText=` ${playerSelection} beats ${computerSelection}
                                   You win Round ${roundCount}`;
         }
         else if(playerSelection===computerSelection){

                  result.innerText="Tie";
                 }
        else{ 
                ++computerCount;
                 result.innerText=`${computerSelection} beats ${playerSelection}
                                    You lose Round ${roundCount}`  ;
        }
        score();
        return;
}

function score(){
       const yourScore=document.querySelector(".yourscore");
       const enemyScore=document.querySelector(".enemyscore");
       yourScore.innerText=`Your:${playerCount}`;
       enemyScore.innerText=`Enemy:${computerCount}`;
       if(playerCount===5){
        const end=document.querySelector(".end");
        end.innerText=`Your WIN!
                       Reload page to play again`;
        end.style.display="flex";
       }
       else if(computerCount===5){
        const end=document.querySelector(".end");
        end.innerText=`Your WIN!
                       Reload page to play again`;
        end.style.display="flex";
       }
       roundCount++;
       return;
}

let playerCount=0;
let computerCount=0;
let roundCount=0;
score();
const choices=document.querySelectorAll("button");
console.log(choices);
choices.forEach(choice=>choice.addEventListener("click", playRound));

