const quizDisplay = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

const quizData = [
    {
        question : "웹개발에 주로 사용되는 프론트언어는?",
        answer : {
            a : "일본어", 
            b : "다랑어", 
            c : "자바스크립트"
        },
        correct : "c"
    },
    {
        question : "웹디자인에 주로 사용되는 프론트언어는?",
        answer : {
            a : "미싱", 
            b : "css", 
            c : "돈까스"
        },
        correct : "b"
    },
]

function buildQuiz(){ 
    
    const output = [];

    quizData.forEach((currentQuestionPackage, questionNum)=>{
    
    const answers = [];

    for (eachOpt in currentQuestionPackage.answer) {
        answers.push(
            `<label>
                <input type="radio" name="question${questionNum}" value="${eachOpt}">
                ${eachOpt}: ${currentQuestionPackage.answer[eachOpt]}
            </label>`
        )   
    }
 
    output.push(
        `<div class="question">
            ${currentQuestionPackage.question}
        </div>
        <div class="answer">
            ${answers.join("")}
        </div>
        <div class="explanation">
        </div>
        `
    )
    });

    quizDisplay.innerHTML = output.join(" ");
}

function showResult(){

    const answerDisplays = quizDisplay.querySelectorAll(".answer");
    const resultExplanations = quizDisplay.querySelectorAll(".explanation");
  
    let numCorrect = 0;

    quizData.forEach((currentQuestionPackage, questionNum) => {
        const answerDisplay = answerDisplays[questionNum];
        const selector = `input[name=question${questionNum}]:checked`;
        const userAnswer = answerDisplay.querySelector(selector).value;
        const resultExplanation = resultExplanations[questionNum];

        if(userAnswer === currentQuestionPackage.correct){
            numCorrect = numCorrect + 1;
            answerDisplay.style.color = "green";
            resultExplanation.innerText = "정답입니다";
            resultExplanation.style.color = "green";
        } else {
            answerDisplay.style.color = "red";
            resultExplanation.innerText = `틀렸습니다. 정답은 ${currentQuestionPackage.correct}입니다.`;
            resultExplanation.style.color = "red";
        }

    });

    resultDisplay.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

buildQuiz();
submitBtn.addEventListener("click", showResult);



