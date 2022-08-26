// HIGHSCORES BUTTON/MODAL
var highscoresBtn = document.getElementById("highscores")
var modal = document.getElementById("modal")
var modalContent = document.getElementById("modal-content")
var scores = document.getElementById("scores")

highscoresBtn.onclick = function() {
    modal.style.display = "block";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// 