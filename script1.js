var initialValue = 100;
var randomNumber = random(100);
let highscore = null 

function reset(){
    document.querySelector(".para").innerHTML = "Start guessing...";
        document.querySelector(".chances").textContent = initialValue
        highscore = initialValue
        document.querySelector(".highscore").textContent = initialValue;
        document.querySelector(".btn1").style.visibility = ""
        document.querySelector(".one1").textContent = "?"
        document.body.style.backgroundColor = "rgb(54, 50, 43)"
        document.getElementById("guess").value = ""
}

function random(n){
    return Math.floor(Math.random()*n)+1
}

function checkNumber(){
    let inputNumber = document.getElementById("guess").value
    if(initialValue!==0){
    if (inputNumber > randomNumber){
        document.querySelector(".para").innerHTML = "Your Guesses Is High";
        document.querySelector(".chances").textContent = --initialValue
    }
    else if (inputNumber < randomNumber){
        document.querySelector(".para").innerHTML = "Your Guesses Is Low";
        document.querySelector(".chances").textContent = --initialValue
    }
    else{
        document.querySelector(".para").innerHTML = " 🤩🤩 Hurry You Won 🤩🤩";
        document.querySelector(".chances").textContent = --initialValue
        highscore = initialValue
        document.querySelector(".highscore").textContent = highscore;
        document.querySelector(".btn1").style.visibility = "hidden"
        document.querySelector(".one1").textContent = inputNumber
        document.body.style.backgroundColor = "green"
    }
}
else{
    document.querySelector(".para").innerHTML = "Game Over 🤒🤒";
}
}
