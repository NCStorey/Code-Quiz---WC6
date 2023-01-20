// event listener 1 
// to start timer once the game begins
/* <div class="timer">Time: <span id="time">0</span></div> */
//set class to hide
// <div id="start-screen" class="start">
//set class hide of questions to off

let startButton = document.querySelector("#startButton")
let startScreen = document.querySelector("#start-screen")

startButton.addEventListener("click", function(){
    startScreen.classList.toggle("hide")
    
})