// HIGHSCORES MODAL
var highscoresBtn = document.getElementById("highscores");
var modal = document.getElementById("modal");
var modalContent = document.getElementById("modal-content");
var scores = document.getElementById("scores");
var newLi = {
    newLi0: "",
    newLi1: "",
    newLi2: "",
    newLi3: "",
    newLi4: "",
}

highscoresBtn.onclick = function() {
    modal.style.display = "block";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


// QUIZ
var question = document.getElementById('question')
var info = document.getElementById('info')
var startButton = document.getElementById('start-button')
var answers = document.getElementById('answers')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')
var correct = document.getElementById('correct')
var wrong = document.getElementById('wrong')
var confirmBtn = document.getElementById('confirm-buttons')
var newScore = document.getElementById('new-score')
var initialEl = document.getElementById('initials')

renderHighScores();
startButton.addEventListener('click', startQuiz)
answers.addEventListener('click', selectAnswer)
confirmBtn.addEventListener('click', saveScore)

var scoreIndex = 0;
var index = 0;
var secondsLeft = 76;
if(localStorage.getItem('scoreIndex')){
scoreIndex = localStorage.getItem('scoreIndex')
}

function renderHighScores(){
    var newScores = {
        score1: {
            initials: '',
            score: '',
        },
        score2:{
            initials: '',
            score: '',
        },
        score3:{
            initials: '',
            score: '',
        },
        score4:{
            initials: '',
            score: '',
        },
        score5:{
            initials: '',
            score: '',
        },
    }
    for(i=0;i<5;i++){
        if(localStorage.getItem('initials'+i)){
        Object.values(newScores)[i].initials = localStorage.getItem('initials'+i);
        Object.values(newScores)[i].score = localStorage.getItem('score'+i);
        newLi[i] = document.createElement('li')
        newLi[i].textContent = Object.values(newScores)[i].initials + " - " + Object.values(newScores)[i].score;
        scores.appendChild(newLi[i])
        }
    }

}

function startQuiz(){
    info.style = 'display: none';
    startButton.style = 'display: none';
    setNextQuestion();
    answers.style = 'display: inline-flex'
    
    
    var timeEl = document.querySelector(".time");
    const timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft <= 0 || index >= 5) {
          clearInterval(timerInterval);
          timeEl.style = "display: none"
          endQuiz();
        }
    }, 1000);
}

function setNextQuestion() {
    question.textContent = Object.values(questions)[index].question;
    a.textContent = Object.values(questions)[index].answers.a;
    b.textContent = Object.values(questions)[index].answers.b;
    c.textContent = Object.values(questions)[index].answers.c;
    d.textContent = Object.values(questions)[index].answers.d;
}

function selectAnswer(event) {
    var selectedButton = event.target.textContent
    if(Object.values(questions)[index].correctAnswer == selectedButton){
        wrong.style = 'display: none'
        correct.style = 'display: inline-block'
    }else{
        correct.style = 'display: none'
        wrong.style = 'display: inline-block'
        secondsLeft = secondsLeft-10;
    }

    var timer = 1;
    correctInterval = setInterval(function(){
        timer--;
        if(timer <= 0){
            clearInterval(correctInterval);
            wrong.style = 'display: none'
            correct.style = 'display: none'
        }
        
    }, 1000);
    index++;
    if(index >= 5){
        return;
    }
    setNextQuestion();
}

function endQuiz(){
    answers.style = "display: none"
    var score = "";
    if(secondsLeft<=0){
        score = 0;
    }else{
        score = secondsLeft;
    }
    question.textContent = "Congratulations your score is: " + score;
    info.textContent = "Would you like to save your score?";
    info.style = 'display: inline-block';
    confirmBtn.style = 'display: inline-block';
    initialEl.style = 'display: inline-block';
    secondsLeft = score;
}

function saveScore(event){
    var selectedButton = event.target.textContent
    
    if(selectedButton == 'Save'){
        if(scoreIndex>=5){
            scoreIndex = 0;
        }
        initialEl = document.getElementById('initials').value
        localStorage.setItem('score'+scoreIndex, secondsLeft)
        localStorage.setItem('initials'+scoreIndex, initialEl)
        scoreIndex++;
        localStorage.setItem('scoreIndex', scoreIndex)
        location.reload();
    }else{
        location.reload();
    }
}

const questions = {
    
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
            correctAnswer: "for(var i=0; i<10; i++)",
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


