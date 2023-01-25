let startButton = document.querySelector("#startButton");
let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector ("#questions");
let endScreen = document.querySelector("#end-screen");
let timeSpan = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title")
let choices = document.querySelector("#choices")
let choice1btn = document.querySelector("#btn1")
let choice2btn = document.querySelector("#btn2")
let choice3btn = document.querySelector("#btn3")
let mark = document.querySelector("#mark")
let finalScore = document.querySelector("#final-score")
let initials = document.querySelector("#initials")
let submitbtn = document.querySelector("#submit")
let input = document.querySelector("input")


let secondsLeft = 60;
let randomInt = 0;
let score = 0;

let initialsArr = []
let scoresArr = []
let timesArr = []




//timer function
function countDown(){
    //function to set timer
    let timer = setInterval(function(){
        secondsLeft--;
        //entering the time left into the html
        timeSpan.innerText = secondsLeft;

        //if statement to stop timer when it reaches 0
        if(secondsLeft <= 0 || questions.length === 0){
            clearInterval(timer)
            //clears question screen
            questionScreen.classList.toggle("hide");
            //reveals finish screen
            endScreen.classList.toggle("hide");
        }
    //sets interval to seconds
    }, 1000);

}

//uses splice to remove questions already called from the array
function rmvQfromArray(){
    questions.splice(randomInt,1)
    console.log(questions)
}




function retrieveQ(){
if (questions.length >= 1){

    for (let index = 0; index < questions.length; index++) {
        //creates random interger from 0 to questions array length. then uses the interger as the index to choose the question randomly
        randomInt = (Math.floor(Math.random()*questions.length));
        questionTitle.textContent = questions[randomInt].title;
        }

        choice1btn.innerText=(questions[randomInt].choice1[0])
        choice2btn.innerText=(questions[randomInt].choice2[0])
        choice3btn.innerText=(questions[randomInt].choice3[0])
}}


function correctAnswer(){
    mark.innerText="correct"
    score = score + 1
    finalScore.innerText=score
}

function incorrectAnswer(){
    mark.innerText="Incorrect"
    secondsLeft = secondsLeft - 10
}

startButton.addEventListener("click", function(){
    //hide start screen
    startScreen.classList.toggle("hide");
    //show question screen
    questionScreen.classList.toggle("hide");
    //begins timer
    countDown()
    retrieveQ()
})

choices.addEventListener("click", function(click){
    let clickedBtn = click.target;

    let choice1Boolean = (questions[randomInt].choice1[1])
    let choice2Boolean = (questions[randomInt].choice2[1])
    let choice3Boolean = (questions[randomInt].choice3[1])

    if (clickedBtn === choice1btn){
        if (choice1Boolean === true){correctAnswer()}
        else (incorrectAnswer())
    }

    if (clickedBtn === choice2btn){
        if (choice2Boolean === true){correctAnswer()}
        else (incorrectAnswer())
    }

    if (clickedBtn === choice3btn){
        if (choice3Boolean === true){correctAnswer()}
        else (incorrectAnswer())
    }

    if (score === 0){
        finalScore.innerText = "zero"
    } 

    rmvQfromArray()
    retrieveQ()
})

submitbtn.addEventListener("click", function(){
    if (input.value === ""){alert("please enter your initials to save your score")}
    
    else{

    let prevscores = localStorage.getItem("initials")

    if (prevscores != null){

    initialsArr = JSON.parse(localStorage.getItem("initials"))
    scoresArr = JSON.parse(localStorage.getItem("score"))
    timesArr = JSON.parse(localStorage.getItem("time"))

    // console.log("prev initials array" + initialsArr)

    }

    initials = initials.value;
    initialsArr.push(initials);
    scoresArr.push(score);
    timesArr.push(secondsLeft);

    localStorage.setItem("initials", JSON.stringify(initialsArr))
    localStorage.setItem("score", JSON.stringify(scoresArr))
    localStorage.setItem("time", JSON.stringify(timesArr))

    // console.log("new initials array" + initialsArr)

    input.value = "";
    score = 0;
    }
})



