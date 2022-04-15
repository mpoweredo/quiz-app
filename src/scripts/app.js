import { quizes } from "./quizes.js";
import { renderQuizes } from "./selectQuiz.js";


const quizTitle = document.getElementById('quiz-title');
const startGameBtn = document.getElementById('start-btn');
const startGameContainer = document.querySelector('.start-game')
// const nextQuestionbtn = document.getElementById('next-question')
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const questionsContainer = document.getElementById('questions')
const result = document.getElementById('result')
let CURRENT_QUESTION = 0;
let CURRENT_QUIZ;
let points = 0;



const startGame = () => {
    startGameContainer.classList.add('hide')
    quiz.classList.remove('hide')
    renderQuestion(quizes[0]);
}



startGameBtn.addEventListener('click', startGame)

const renderQuestion = quiz => {
    quizTitle.textContent = quiz.title;
    question.textContent = quiz.questions[CURRENT_QUESTION].question
    clearQuestions();
    renderAnswers(quiz.questions[CURRENT_QUESTION])
    CURRENT_QUIZ = quiz;
}

const renderAnswers = question => {


    for (const questionEl of question.answers) {
        const answerButton = document.createElement('button')
        answerButton.textContent = questionEl.text;
        answerButton.dataset.answer = questionEl.correct;
        questionsContainer.appendChild(answerButton)
        answerButton.addEventListener('click', checkAnswer)
    }
}

const clearQuestions = () => {
    while (questionsContainer.lastElementChild) {
        questionsContainer.lastElementChild.remove();
    }
}

const checkAnswer = e => {
    const button = e.target;


    if (button.dataset.answer === 'true') {
        points++
        nextQuestion();
    } else {
        nextQuestion();
    }
}


const nextQuestion = () => {
    // console.log(CURRENT_QUIZ.questions.length)
    // console.log(CURRENT_QUESTION)
    CURRENT_QUESTION++
    if (CURRENT_QUIZ.questions.length <= CURRENT_QUESTION) {
        quiz.classList.add('hide')
        result.parentNode.classList.remove('hide')
        result.textContent = `ukonczyles quiz z wynikiem ${points}`
        return
    }
    renderQuestion(CURRENT_QUIZ);
}
