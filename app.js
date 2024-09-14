let userName = prompt("Enter Your Name:");

let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;

const choices = document.querySelectorAll(".choice")

if(userName != "")
{
    document.querySelector("#user-name").innerHTML = "<b>" + userName + "</b>";
}

let userWin = true;

const genCompChoice = () =>{
    let options = ["rock","paper","scissor"];
    let ranIxd = Math.floor(Math.random() * 3);

    return options[ranIxd];
};

const playGame = (userChoice) =>{
    
    compChoice = genCompChoice();

    if(userChoice ===  compChoice)
    {
        drawGame();
    }else
    {
        win(userChoice,compChoice);
    }
};

const win = (userChoice,compChoice) =>{

    if(userChoice === "rock")
    {   //paper,scissor
        userWin = (compChoice === "paper")?false:true;
    }
    else if(userChoice === "paper")
    {   //rock,scissor
        userWin = (compChoice === "rock")?true:false;
    }
    else{
        userWin = (compChoice === "rock")?false:true;
    }

    showWinner(userWin);
};

const drawGame = () =>{
    document.querySelector("#msg").innerText = "GAME WAS DRAW :|";
    document.querySelector("#msg").style.backgroundColor = "#081b31";
};


const showWinner = (userWin) =>{
    if(userWin)
    {
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
        document.querySelector("#msg").innerText = `${userName} WINS. ${userChoice} beats ${compChoice}`;
        document.querySelector("#msg").style.backgroundColor = "darkgreen";

    }else
    {
        compScore++;
        document.querySelector("#comp-score").innerHTML = compScore;
        document.querySelector("#msg").innerText = `COMPUTER WINS. ${compChoice} beats ${userChoice}`;;
        document.querySelector("#msg").style.backgroundColor = "red";
    }
};

choices.forEach((choicx) =>{
    choicx.addEventListener("click", () =>{
        userChoice = choicx.getAttribute("id");
        playGame(userChoice);
    });
});