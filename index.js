const quizDisplay = document.getElementById("quiz");
const resultDisplay = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

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
        `<div class="slide">
            <div class="question">
                ${questionNum + 1}.${currentQuestionPackage.question}
            </div>
            <div class="answer">
                ${answers.join("")}
            </div>
            <div class="explanation">
            </div>
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

    resultDisplay.innerHTML = `${quizData.length}문제 중에 ${numCorrect}문제 맞췄습니다`;
}

buildQuiz();

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide (n) {
    slides[n].classList.remove("slide");
    slides[n].classList.add("active-slide");
}

function hideSlide (n) {
    slides[n].classList.add("slide");
    slides[n].classList.remove("active-slide"); 
}

showSlide (currentSlide);

function showNextSlide () {
    if ( currentSlide >= slides.length - 1) {
        return currentSlide;
    }

    currentSlide++;
    console.log(currentSlide);
    hideSlide (currentSlide - 1);
    showSlide (currentSlide);
    }
   
function showBackSlide () {
    if ( currentSlide <= 0 ) {
        return currentSlide;
    }
    
    currentSlide--;
    console.log(currentSlide);
    hideSlide (currentSlide + 1);
    showSlide (currentSlide);
};


submitBtn.addEventListener("click", showResult);
backBtn.addEventListener("click", showBackSlide);
nextBtn.addEventListener("click", showNextSlide);




