let highScoresOl = document.querySelector("#highscores")
let clearBtn = document.querySelector("#clear")


function getScore(){
    let storedScore = localStorage.getItem("score");


}

function getInitials (){
    let storedInitials = localStorage.getItem("initials");
    
    let storedTime = localStorage.getItem("time");

    if (storedInitials === null){
        highScoresOl.innerText = "No high scores recorded yet"
    }
    else {
        let li = document.createElement("li")
        li.textContent = storedInitials
        highScoresOl.appendChild(li)

    }
}


getInitials ()


