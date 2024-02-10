let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");


let res=document.getElementById("msg");
let uscore=document.getElementById("userscore");
let cscore=document.getElementById("compscore");

const generateCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("User Win the Game");
        res.style.backgroundColor="green";
        res.innerText=`You Won!Your ${userChoice} beats ${compChoice}`;
        userscore++;
        uscore.innerText=userscore;


    }else{
        console.log("Computer Win the Game");
        res.style.backgroundColor="red";
        res.innerText=`You loose! ${compChoice} beats your ${userChoice}`;
        compscore++;
        cscore.innerText=compscore;
    }
}

const drawGame=()=>{
    console.log("Game draw");
    res.style.backgroundColor="darkgray";
    res.innerText="Game Draw :)!";
}

const playgame=(userChoice)=>{
    console.log("choice selected by user ",userChoice);
    const compChoice=generateCompChoice();
    console.log("Choice selected by Computer ",compChoice);

    if(userChoice===compChoice){
        
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="scissors"?true:false;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

    
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})