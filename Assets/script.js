
var A = document.getElementById("choiceA");
var B = document.getElementById("choiceB");
var C = document.getElementById("choiceC");
var D = document.getElementById("choiceD");
var questionDiv = document.getElementById("quizQuestionsId");
var questionTitle = document.getElementById('questionTitle');
var currentQuestion = 0;
var highscorelink = document.getElementById("highschores");
var countdown = document.getElementById("timeLeft");
var startQuizIdButton = document.getElementById("startQuizId");
var answerCheck = document.getElementById("answerCheck");
var timerDisplay = document.getElementById('timeLeft');






var questions = [
    {
        question: "What HTML tag is NOT included in the HEAD tag?",
        choices: ["meta", "title", "base", "header"],
        answer: "header"
    },
    {
        question: "What are the two values that can be returned in a Boolean statement?",
        choices: ["yes/no", "and/or", "if/then", "true/false"],
        answer: "true/false"

    },
    {
        question: "What does JS stand for?",
        choices: ["javascript", "javasign", "javascripts", "jelloscript"],
        answer: "javascript"
    }
]

function quizQuestionsFunction() {
    totalTime = 45
    timerDisplay.textContent = totalTime;

    countdown();

    nextQuestion();

    startQuizIdButton.style.display = 'none';
    }

    function nextQuestion() {
    
    answerCheck.style.display = 'block';

    questionTitle.textContent = questions[questionIndex].question;
    A.textContent = questions[questionIndex].choices[0];
    B.textContent = questions[questionIndex].choices[1];
    C.textContent = questions[questionIndex].choices[2];
    D.textContent = questions[questionIndex].choices[3];

    
    }

 questionIndex ++;

if (questionIndex >= questions.length) {
    gameOver();
    console.log('gameover');
} else {
    nextQuestion;
}

var startQuizIdButton = document.getElementById("startQuizId");
startQuizIdButton.addEventListener("click",quizQuestionsFunction);

A.addEventListener("click",chooseA);
B.addEventListener("click",chooseB);
C.addEventListener("click",chooseC);
D.addEventListener("click",chooseD);

function chooseA() { checkAnswer(0);
}

function chooseB() { checkAnswer(1);
}

function chooseC() { checkAnswer(2);
}

function chooseD() { checkAnswer(3);
}


//starts the quiz with the timer
var totalTime = 60;
var penalty = 10;
var i = 0
function quizQuestionsFunction() {
    questionIndex = 0;
    totalTime = 60;
    timeLeft.textContent = totalTime;
    startQuizIdButton.style.display = "none";
    
   
    questionDiv.style.display = "block";
   


    nextQuestion();


    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
        if (questionIndex < questions.length -1) {
            nextQuestion();
            }
        }
    },1000);
    
    questionTitle.textContent = questions[questionIndex].question;
    A.textContent = questions[questionIndex].choices[0];
    B.textContent = questions[questionIndex].choices[1];
    C.textContent = questions[questionIndex].choices[2];
    D.textContent = questions[questionIndex].choices[3];
}

function nextQuestion() {

    answerCheck.style.display = "block";

    questionTitle.textContent = questions[questionIndex].question;
    A.textContent = questions[questionIndex].choices[0];
    B.textContent = questions[questionIndex].choices[1];
    C.textContent = questions[questionIndex].choices[2];
    D.textContent = questions[questionIndex].choices[3];

    for (i = 0; i < answerCheck.length; i++) {
        answerCheck[i].addEventListener('click' , checkAnswer);
    }



}
function checkAnswer(answer) {
    
    if (answer.target.textContent === questions[questionIndex].choices[answer]) {
       
        answerCheck.style.display = "block";
        answerCheck.textContent = "Correct!";
        currentQuestion ++;


        setTimeout(function() {
            answerCheck.style.display = 'none';
    }, 400);


    if (currentQuestion === questions.length) {
        gameOver();

    
    } else {

        nextQuestion();

    };

} else {
    currentQuestion++;
    answerCheck.style.display = "block";            
    answerCheck.textContent = "Incorrect!";

    setTimeout(function() {
        answerCheck.style.display = "none";

    }, 400);

    if (totalTime  <10) {
        totalTime -= 10;
        gameOver();

    } else if (currentQuestion === 3) {
        gameOver();


    } else {
        totalTime -=10;
        nextQuestion();
    };
    }

    
        

    
    }


