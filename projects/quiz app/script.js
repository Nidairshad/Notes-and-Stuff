const questionElement = document.getElementById("question");
const ansButton = document.getElementById("answer-buttons");
const next_Button = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

const question = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Lion", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
            { text: "New York", correct: false }
        ]
    },
    {
         question: "Which planet is known as the Red Planet?", 
         answers: [
        { text: "Neptune", correct: false },
         { text: "Mars", correct: true },
         { text: "Jupiter", correct: false }, 
         { text: "Saturn", correct: false }
        ] 
        }, 
         { question: "What is the largest ocean in earth",
             answers: [
                { text: "Atlantic Ocean", correct: false }, 
                { text: "Arctic Ocean", correct: false },
                 { text: "Pacific Ocean", correct: true },
                  { text: "Indian Ocean", correct: false }
                ]
                }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next_Button.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();

    let currQuestion = question[currentQuestionIndex];
    let quesNo = currentQuestionIndex + 1;

    questionElement.innerHTML = quesNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", selectAnswer);
        ansButton.appendChild(button);
    });
}

function resetstate() {
    next_Button.style.display = "none";
    ansButton.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    next_Button.style.display = "block";
}

next_Button.addEventListener("click", () => {
    if (currentQuestionIndex >= question.length) {
        startQuiz();
        return;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `You scored ${score}/${question.length}`;
        ansButton.innerHTML = "";
        next_Button.innerHTML = "Restart";
        next_Button.style.display = "block";
    }
});

startQuiz();