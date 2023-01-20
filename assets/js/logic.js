// to start timer once the game begins


let startButton = document.querySelector("#startButton");
let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector ("#questions");
let endScreen = document.querySelector("#end-screen");
let timeSpan = document.querySelector("#time");

let secondsLeft = 60;

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

startButton.addEventListener("click", function(){
    //hide start screen
    startScreen.classList.toggle("hide");
    //show question screen
    questionScreen.classList.toggle("hide");
    //begins timer
    countDown()

})

//init function to get the highscores from local 