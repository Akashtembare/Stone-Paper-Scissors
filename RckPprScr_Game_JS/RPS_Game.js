let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{                      //to generate computer choice
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame=()=>{              //function created for draw game
    console.log("game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="rgb(10, 10, 49)";
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;

    } else{
        console.log("You lose!");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}


const playGame=(userChoice)=>{                 //  user choice
    console.log("user choice=",userChoice);
    const compChoice=gencompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //console.log("game was draw");
        drawGame();                         //drawGame(); function is called
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissors, paper
          userWin = compChoice==="paper" ? false : true;
        } else if(userChoice==="paper"){
            // rock, scissors
          userWin = compChoice==="scissors" ? false : true;
        } else{
            // rock,paper
          userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});