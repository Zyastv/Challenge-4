// HIGHSCORES BUTTON/MODAL
var highscoresBtn = document.getElementById("highscores");
var modal = document.getElementById("modal");
var modalContent = document.getElementById("modal-content");
var scores = document.getElementById("scores");

highscoresBtn.onclick = function() {
    modal.style.display = "block";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// QUIZ START
var startBtn = document.getElementById("start-button");
var question = document.getElementById("question");
var info = document.getElementById("info");

startBtn.onclick = function() {
  startBtn.style.display = "none";
  info.style.display = "none";
  startquiz()
}

function startquiz(){
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endquiz();
    }

  }, 1000);
}


