// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

// play button variable
 var playBtn = document.getElementById("play-button")

 playBtn.addEventListener("click",(redirect => {
    location.href="game.html"
 }))

