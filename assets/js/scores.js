let highScoresOl = document.querySelector("#highscores")
let clearBtn = document.querySelector("#clear")
let initialsArr = []
let scoresArr = []
let timesArr = []


function getInitials (){
    let storedInitials = localStorage.getItem("initials")
    if (storedInitials === null){
        highScoresOl.innerText = "No high scores recorded yet"
    }
    else {
        let li = document.createElement("li")
        li.textContent = "initials test"
        highScoresOl.appendChild(li)

    }
}


getInitials ()

function initialisation(){
    getInitials()
    getScore()
    getTime()
}
