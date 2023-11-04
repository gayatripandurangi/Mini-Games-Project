let form = document.getElementById("gameForm");
let userNum = document.getElementById("num");
let submit_btn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let playAgainBtn = document.getElementById("play-again");
let attemptsText=document.getElementById("attempts-text");
let resultText = document.getElementById("result-text");
let winImage = document.getElementById("win_img");
let loseImage = document.getElementById("lose_img");

let randomNum = Math.round((Math.random() * 10));
let attempts = 5;
let h = 0;
let l = 0;
let win = false;

//function to handle user inputs
//displays high, low guess messages
//displays win/loss messages 
form.addEventListener("submit",function(event){
    event.preventDefault();
    resultText.innerHTML = "";
    let userNumValue = userNum.value;
    resultText.style.display = "block";

    if(Number(userNumValue) < randomNum){
        userNum.value = "";
        resultText.innerHTML = "Your guess is too low";
        resultText.style.color = "purple";
        l = l + 1;
        let id = "l"+l;
        document.getElementById(id).innerHTML = userNumValue;
    }
    else if(Number(userNumValue) > randomNum){
        userNum.value = "";
        resultText.innerHTML = "Your guess is too high";
        resultText.style.color = "orange";
        h = h + 1;
        let id = "h"+h;
        document.getElementById(id).innerHTML = userNumValue;
    }
    else if(Number(userNumValue) === randomNum){
        resultText.innerHTML = "You guessed it right!! You win";
        resultText.style.color = "green";
        winImage.style.display = "block";
        win=true;
        enablePlayButton();
    }
    attempts = attempts - 1;

    if((!win) && (attempts <= 0)){
        attemptsText.style.display = "block";
        attemptsText.style.color = "red";
        attemptsText.innerHTML = "You have exceeded the number of maximum attempts: 5 <br/> Sorry Try again next time &#128542; <br/> The Number was "+randomNum;
        loseImage.style.display = "block";
        enablePlayButton();
    }
})

//game reset function
form.addEventListener("reset",function(){
    location.reload();
})

//function to enable playbutton after winning or lossing or reseting the game
function enablePlayButton(){
    playAgainBtn.disabled = false;
    submit_btn.disabled = true;
    resetBtn.disabled = true;
}

//function to reset the game when play again button in pressed
function playagain(){
    location.reload();
}