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
var answers = document.getElementById("answers");
var correct = document.getElementById("correct");
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
var ansCheck = "";




var questionNumbers = ["question1","question2","question3","question4","queestion5"];
var answerLetters = ["a","b","c","d"];

var questions = {
    
        question1:{
            question: "What values can be stored in an array?",
            answers: {
                a: "Primitives",
                b: "Functions",
                c: "If statements",
                d: "Elements",
            },
            correctAnswer: "Primitives",
        },
    
        question2: {
            question: "Which is an example of a conditional statement?",
            answers: {
                a: "var x = y",
                b: "if (x = y)",
                c: "function functionName()",
                d: "var arr = [a,b,c,d]",
            },
            correctAnswer: "if (x = y)",
        },
        question3:{
            question: "Which is an example of iteration?",
            answers: {
                a: "for(var i=0; i<10; i++)",
                b: "if (x = y)",
                c: "var arr = [a,b,c,d]",
                d: "const var x = y",
            },
            correctAnswer: "var arr = [a,b,c,d]",
        },
        question4:{
            question: "What is an object?",
            answers: {
                a: "A function that takes a boolean value and runs a block of code",
                b: "Data types that can be made into variables",
                c: "A variable that stores groups of data",
                d: "A collection of properties",
                },
            correctAnswer: "A collection of properties",
        },
        question5:{
            question: "What is a function?",
            answers: {
                a: "A variable that stores groups of data",
                b: "A collection of properties",
                c: "A reusable block of code that performs a specific task",
                d: "A data type",
            },
            correctAnswer: "A reusable block of code that performs a specific task",
        },

    }

startBtn.onclick = function() {
  startBtn.style.display = "none";
  info.style.display = "none";
  startquiz()
}

var secondsLeft = 75;

function startquiz(){

var timeEl = document.querySelector(".time");
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endquiz();
    }

}, 1000);
for(i=0; i<5; i++){
generateQuiz(i);
checkAnswer(i, secondsLeft)
}
endquiz(secondsLeft);
}

function checkAnswer(i, secondsLeft){
    ansCheck = questions[questionNumbers[i]]["correctAnswer"]
    ans1.onclick = function(){
    if(ans1.textContent == ansCheck){
        correct.textContent = "correct!"
        correct.style.display = "inline-block"
    }else{
        correct.textContent = "Wrong!"
        correct.style.display = "inline-block"
        secondsLeft = secondsLeft-10;
    }}
    ans2.onclick = function(){
    if(ans2.textContent == ansCheck){
        correct.textContent = "correct!"
        correct.style.display = "inline-block"
    }else{
        correct.textContent = "Wrong!"
        correct.style.display = "inline-block"
        secondsLeft = secondsLeft-10;
    }}
    ans2.onclick = function(){
    if(ans3.textContent == ansCheck){
        correct.textContent = "correct!"
        correct.style.display = "inline-block"
    }else{
        correct.textContent = "Wrong!"
        correct.style.display = "inline-block"
        secondsLeft = secondsLeft-10;
    }}
    ans2.onclick = function(){
    if(ans4.textContent == ansCheck){
        correct.textContent = "correct!"
        correct.style.display = "inline-block"
    }else{
        correct.textContent = "Wrong!"
        correct.style.display = "inline-block"
        secondsLeft = secondsLeft-10;
    }}

    var secondsLeft2 = "2"
    var timerInterval2 = setInterval(function() {
    secondsLeft2--;
    if(secondsLeft2 === 0) {
      clearInterval(timerInterval2);
      correct.style.display = "none";
    }
}, 1000);
}


function generateQuiz(i){

    question.textContent = questions[questionNumbers[i]]["question"];
    ans1.textContent = questions[questionNumbers[i]]["answers"][answerLetters[0]];
    ans2.textContent = questions[questionNumbers[i]]["answers"][answerLetters[1]];
    ans3.textContent = questions[questionNumbers[i]]["answers"][answerLetters[2]];
    ans4.textContent = questions[questionNumbers[i]]["answers"][answerLetters[3]];
    answers.append(ans1, ans2, ans3, ans4);

}


function endquiz(secondsLeft){
    if(secondsLeft=== undefined){
        clearInterval(timerInterval)
        question.textContent = "Your score was : 0"
    }else{
        clearInterval(timerInterval)
        question.textContent = "Your score was : " + secondsLeft;
        answers.style.display = "none"
    }

}


