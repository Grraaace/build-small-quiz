const quizDisplay = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultDisply = document.getElementById("result");
//모든 퀴즈와 선택지 배열
const output = [];
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

function handleEachQuestionPackage (currentQuestionPackage, questionNum){
    
    // 퀴즈 선택지 배열
    const answers = [];

    for (eachOpt in currentQuestionPackage.answer) {
        answers.push(
            `<label>
                <input type="radio" name="${questionNum}" value="${eachOpt}">
                ${eachOpt}: ${currentQuestionPackage.answer[eachOpt]}
            </label>`
        )   
    }
 
    output.push(
        `<div class="question">
            ${currentQuestionPackage.question}
        </div>
        <div class="anwser">
            ${answers.join("")}
        </div>
        `
    )
}

function buildQuiz(){ 
    quizData.forEach(handleEachQuestionPackage)
    quizDisplay.innerHTML = output.join(" ");
}

function showResult(){
  
}

buildQuiz();
submitBtn.addEventListener("click", showResult);
