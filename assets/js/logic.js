let startButton = document.querySelector("#startButton");
let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector ("#questions");
let endScreen = document.querySelector("#end-screen");
let timeSpan = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title")
let choices = document.querySelector("#choices")

let secondsLeft = 60;
let randomInt = 0;
let choicebtn = 0;
let choice1btn = 0;
let choice2btn = 0;
let choice3btn = 0;

//init function to get the highscores from local 


//timer function
function countDown(){
    //function to set timer
    let timer = setInterval(function(){
        secondsLeft--;
        //entering the time left into the html
        timeSpan.innerText = secondsLeft;

        //if statement to stop timer when it reaches 0
        if(secondsLeft === 0){
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
    
    for (let index = 0; index < questions.length; index++) {
        //creates random interger from 0 to questions array length. then uses the interger as the index to choose the question randomly
        randomInt = (Math.floor(Math.random()*questions.length))
        questionTitle.textContent = questions[randomInt].title;
        
        function makeChoiceButton(choicenumber){
            choicebtn = document.createElement("button");
            choicebtn.textContent = choicenumber;
            document.getElementById("choices").appendChild(choicebtn)
            return;
        }}

        choice1btn = makeChoiceButton(questions[randomInt].choice1[0])
        choice2btn = makeChoiceButton(questions[randomInt].choice2[0])
        choice3btn = makeChoiceButton(questions[randomInt].choice3[0])
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

choices.addEventListener("click", function(){
    




})

rmvQfromArray()