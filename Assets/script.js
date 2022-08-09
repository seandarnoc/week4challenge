
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







var starQuizIdButton = document.getElementById("startQuizId");
starQuizIdButton.addEventListener("click",quizQuestionsFunction);
A.addEventListener("click",chooseA);
B.addEventListener("click",chooseB);
C.addEventListener("click",chooseC);
D.addEventListener("click",chooseD);

function chooseA() { 
    console.log("User press A")
checkAnswer(0);
    }

function chooseB() { console.log("User press B")
checkAnswer(1);
}

function chooseC() { console.log("User press C")
checkAnswer(2);
}
function chooseD() { console.log("User press D")
checkAnswer(3);
}


//starts the quiz with the timer
function quizQuestionsFunction() {
    questionIndex = 0;
    //console.log("you are clicking start quiz button")
    //askQuestions();
    questionDiv.style.display = "block";
    //clockID = setInterval(stopwatch, 1000);

    questionTitle.textContent = questions[questionIndex].question;
    A.textContent = questions[questionIndex].choices[0];
    B.textContent = questions[questionIndex].choices[1];
    C.textContent = questions[questionIndex].choices[2];
    D.textContent = questions[questionIndex].choices[3];
};


function checkAnswer(answer) {
    answerCheck.style.display = "block";
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
       
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {

    
    answerCheck.textContent = "Incorrect!"
    }
}