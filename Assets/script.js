
var A = document.getElementById("choiceA");
var B = document.getElementById("choiceB");
var C = document.getElementById("choiceC");
var D = document.getElementById("choiceD");
var questionDiv = document.getElementById("quizQuestionsId");
var questionTitle = document.getElementById('questionTitle');



var questionIndex;

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

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    A.textContent = questions[questionIndex].choices[0];
    B.textContent = questions[questionIndex].choices[1];
    C.textContent = questions[questionIndex].choices[2];
    D.textContent = questions[questionIndex].choices[3];

}

questionIndex++;
if (questionIndex >= questions.length) {
    gameOver();
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
};


function checkAnswer(answer) {
    answerCheck.style.display = "block";
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
       
       
        answerCheck.textContent = "Correct!";
    } else {
            
    answerCheck.textContent = "Incorrect!"
    }

    if (i < questions.length - 1) {
        i++;
        nextQuestion();

    } else {
        
        clearInterval(totalTime);
        gameOver();
    }





    function gameOver() {
      
}
}