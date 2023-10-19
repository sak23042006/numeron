// Iteration 5: Store the player score and display it on the game over screen

var Score =  document.getElementById("score-board")

var value = localStorage.getItem("score")

Score.textContent=value ;

var again = document.getElementById("play-again-button")

again.addEventListener("click",(e => {

    location.href="game.html"

}))