//import of variables to javascript from html
let highScoresOl = document.querySelector("#highscores")
let clearBtn = document.querySelector("#clear")

//empty arrays to allow the storage of scores
let initialsArr = []
let scoresArr = []
let timesArr = []

//if stored scores are found this function is called
function rendorScores(){
    //this for loop means that only the required amount of list elements are made and it is linked to the initials array
    for (let i = 0; i < initialsArr.length -1; i++){

    //creation of li elements
    let li = document.createElement("li")
    //sets the list items contents
    li.innerHTML = (initialsArr[i] + " -----   Score :" + scoresArr[i] + ",    Time :" + timesArr[i]);
    //appends the li to the html
    highScoresOl.appendChild(li);
}
}


//function to retrieve stored scores and reformat - only called if initials are in local storage
function getScore(){
    let storedScore = (localStorage.getItem("score"));
    scoresArr = JSON.parse(storedScore)
    let storedTime = (localStorage.getItem("time"));
    timesArr = JSON.parse(storedTime)

    //now scores have been retieved they are pushed to the empty arrays above
    scoresArr.push(storedScore);
    timesArr.push(storedTime);
}

//function to retieve and reformat initials from local storage
function getInitials (){
    let storedInitials = localStorage.getItem("initials");
    initialsArr = JSON.parse(storedInitials)

    //catch incase there are not stored high scores
    if (storedInitials === null){
        highScoresOl.innerText = "No high scores recorded yet"
    }
    else {
        //now initials have been retieved they are pushed to the empty array above
        initialsArr.push(storedInitials);

        //else functioned has fired therefore there must be stored scores to retrieve
        getScore()

        rendorScores()
    }
}

//starts process
getInitials ()





//event listener to clear scores and local storage
clearBtn.addEventListener("click", function(){
    //while loop to remove the li items
    while (highScoresOl.hasChildNodes()){
        highScoresOl.removeChild(highScoresOl.firstChild)
    }

    //clear of local storage
    window.localStorage.clear();
})

