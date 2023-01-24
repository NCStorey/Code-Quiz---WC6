let highScoresOl = document.querySelector("#highscores")
let clearBtn = document.querySelector("#clear")
let initialsArr = []
let scoresArr = []
let timesArr = []



function getScore(){
    let storedScore = JSON.parse(localStorage.getItem("score"));
    let storedTime = JSON.parse(localStorage.getItem("time"));

    scoresArr.push(storedScore);
    timesArr.push(storedTime);
}

function getInitials (){
    let storedInitials = JSON.parse(localStorage.getItem("initials"));
    
    if (storedInitials === null){
        highScoresOl.innerText = "No high scores recorded yet"
    }
    else {
        initialsArr.push(storedInitials);

        getScore()
    }
}

getInitials ()

function rendorScores(){

        for (let i = 0; i < initialsArr.length; i++){

        let li = document.createElement("li")
        li.innerHTML = (initialsArr[i] + " -----   Score :" + scoresArr[i] + ",    Time :" + timesArr[i]);
        highScoresOl.appendChild(li);
    }
}

rendorScores()

console.log(initialsArr)
console.log(...initialsArr)