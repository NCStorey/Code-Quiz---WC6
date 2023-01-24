let highScoresOl = document.querySelector("#highscores")
let clearBtn = document.querySelector("#clear")
let initialsArr = []
let scoresArr = []
let timesArr = []



function getScore(){
    let storedScore = (localStorage.getItem("score"));
    scoresArr = JSON.parse(storedScore)
    let storedTime = (localStorage.getItem("time"));
    timesArr = JSON.parse(storedTime)

    // console.log(scoresArr)
    // console.log(timesArr)

    scoresArr.push(storedScore);
    timesArr.push(storedTime);
}

function getInitials (){
    let storedInitials = localStorage.getItem("initials");
    initialsArr = JSON.parse(storedInitials)

    // alert(initialsArr.length)
    // console.log(initialsArr)

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

        for (let i = 0; i < initialsArr.length -1; i++){

        let li = document.createElement("li")
        li.setAttribute("data-marker", "highScore")
        li.innerHTML = (initialsArr[i] + " -----   Score :" + scoresArr[i] + ",    Time :" + timesArr[i]);
        highScoresOl.appendChild(li);
    }
}

rendorScores()

clearBtn.addEventListener("click", function(){
    while (highScoresOl.hasChildNodes()){
        highScoresOl.removeChild(highScoresOl.firstChild)
    }
    // console.log(highScores)
    window.localStorage.clear();
})

