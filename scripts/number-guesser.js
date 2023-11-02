let form = document.getElementById("gameForm");
let userNum = document.getElementById("num");
let result = document.getElementById("result");
let submit_btn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let attemptsExceeded = document.getElementById("attempts");
let playAgainBtn = document.getElementById("play-again");

let randomNum = Math.round((Math.random() * 10));
let attempts = 5;
let h = 0;
let l = 0;

form.addEventListener("submit",function(event){
    event.preventDefault();
    result.innerHTML = "";
    let userNumValue = userNum.value;

    if(Number(userNumValue) < randomNum){
        result.innerHTML = "Your guess is too low";
        l = l + 1;
        let id = "l"+l;
        document.getElementById(id).innerHTML = userNumValue;
    }
    else if(Number(userNumValue) > randomNum){
        result.innerHTML = "Your guess is too high";
        h = h + 1;
        let id = "h"+h;
        document.getElementById(id).innerHTML = userNumValue;
    }
    else if(Number(userNumValue) === randomNum){
        result.innerHTML = "You guessed it right!! You win";
        enablePlayButton();
    }
    userNum.value = "";
    attempts = attempts - 1;

    if(attempts <= 0){
        submit_btn.disabled = true;
        attemptsExceeded.innerHTML = "You have exceeded the number of maximum attempts: 5";
        enablePlayButton();
    }
})

form.addEventListener("reset",function(event){
    event.preventDefault();
    location.reload();
})

function enablePlayButton(){
    playAgainBtn.disabled = false;
    submit_btn.disabled = true;
    resetBtn.disabled = true;
}

function playagain(){
    location.reload();
}