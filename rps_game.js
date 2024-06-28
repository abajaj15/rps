let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    // rock,paper,scissors
    //koi bhi number agr 0-1 me lie krta hai to  usko 3 (yani ek pehle tk k numbers aaenge)s multipl kro to vo 0-2 k bich lie krne lg jata
    //and that is what we need 
    //hume chahiye ki koi b random aaye 0,1,2 me s
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="game was draw,Play Again";
    msg.style.backgroundColor=" rgb(53, 226, 220)";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

};
const playGame=(userChoice) => {
    console.log("user choice= ",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin= true;
        if(userChoice ==="rock"){
            //scissors,paper->comp
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //scissors,rock->comp
            userWin=compChoice==="scissors"?false:true;
        }else{
            //paper,rock->comp
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    } 

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
