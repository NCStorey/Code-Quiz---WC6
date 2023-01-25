//import of variables to javascript from html
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

//empty variables declared globally to prevent local declarations + timer set to 1 min
let secondsLeft = 60;
let randomInt = 0;
let score = 0;

//empty arrays to allow the storage of scores
let initialsArr = []
let scoresArr = []
let timesArr = []




//timer function
function countDown(){
    //function to set timer
    let timer = setInterval(function(){
        //time to decrease
        secondsLeft--;
        //displaying the time left into the html
        timeSpan.innerText = secondsLeft;

        //if statement to stop timer when it reaches 0 or when the questions array length reaches 0
        if(secondsLeft <= 0 || questions.length === 0){
            clearInterval(timer)

            //toggle of classes to hide the question screen and reveal the end screen
            questionScreen.classList.toggle("hide");
            endScreen.classList.toggle("hide");
        }
    //sets interval to seconds
    }, 1000);

}

//function to display question
function retrieveQ(){
    //catch to only retrieve question while the question.length is more than or equal to 1 - will not try to retrieve questions from an empty array
    if (questions.length >= 1){

    for (let index = 0; index < questions.length; index++) {
        //creates random interger from 0 to questions array length. then uses the interger as the index to choose the question randomly
        randomInt = (Math.floor(Math.random()*questions.length));

        //display the title of the question onto dom
        questionTitle.textContent = questions[randomInt].title;
        }

        //displays the potential answers of questions onto the 3 buttons found in the HTML
        choice1btn.innerText=(questions[randomInt].choice1[0])
        choice2btn.innerText=(questions[randomInt].choice2[0])
        choice3btn.innerText=(questions[randomInt].choice3[0])
}}

//correct answer to increase the players score by 1 and let them know it was correct
function correctAnswer(){
    mark.innerText="correct"
    score = score + 1
    finalScore.innerText=score
}

//incorrect answer to decrease the current remaining time by 10seconds and let the player know it was incorrect
function incorrectAnswer(){
    mark.innerText="Incorrect"
    secondsLeft = secondsLeft - 10
}

//event listenter to trigger the beginning of the quiz
startButton.addEventListener("click", function(){
    //hide start screen and show question screen
    startScreen.classList.toggle("hide");
    questionScreen.classList.toggle("hide");

    //begins timer
    countDown()
    //retrieves first question
    retrieveQ()
})

//Event listener on questions buttons
choices.addEventListener("click", function(click){
    let clickedBtn = click.target;

    //setting of variable to allow for correct/incorrect logic
    let choice1Boolean = (questions[randomInt].choice1[1])
    let choice2Boolean = (questions[randomInt].choice2[1])
    let choice3Boolean = (questions[randomInt].choice3[1])

    //if statments to asses whether choosen button represents a correct answer or not using the [1] index on the choosen buttons array.
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

    //catch statment to display the word zero if no points were scored.
    if (score === 0){
        finalScore.innerText = "zero"
    } 

    //uses splice to remove questions already called from the array - stops the same question being asked twice
    questions.splice(randomInt,1)

    //the answering of one question triggers the retrieval of another - this continues until the questions array reaches or the timer reaches 0
    retrieveQ()
})


//submit button becomes available at the end of the quiz
submitbtn.addEventListener("click", function(){

    //catch statment incase a used does not enter any initals and tries to submit a nill value.
    if (input.value === ""){alert("please enter your initials to save your score")}
    
    else{
    
    //variable to hold initials stored in local
    let prevscores = localStorage.getItem("initials")

    // this statment will only run if locally stored initals are found
    if (prevscores != null){
    
    //takes the scores from local storage and puts them into the empty array - this prevents the new scores overwriting the old ones
    initialsArr = JSON.parse(localStorage.getItem("initials"))
    scoresArr = JSON.parse(localStorage.getItem("score"))
    timesArr = JSON.parse(localStorage.getItem("time"))

    }

    //sets what the user has entered into the input as a string value
    initials = initials.value;

    //pushes the score information onto the arrays with any previous scores
    initialsArr.push(initials);
    scoresArr.push(score);
    timesArr.push(secondsLeft);

    //enters all scores (both old and new) into local storage
    localStorage.setItem("initials", JSON.stringify(initialsArr))
    localStorage.setItem("score", JSON.stringify(scoresArr))
    localStorage.setItem("time", JSON.stringify(timesArr))

    //clears input field and puts the score back to 0
    input.value = "";
    score = 0;
    }
})



