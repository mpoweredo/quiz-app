import { numberQuiz } from "./quizes.js";


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
    renderQuestion(numberQuiz);
}

startGameBtn.addEventListener('click', startGame)

const renderQuestion = quiz => {
    question.textContent = quiz[CURRENT_QUESTION].question
    clearQuestions();
    renderAnswers(quiz[CURRENT_QUESTION])
    CURRENT_QUIZ = quiz;
}

const renderAnswers = question => {
    for (let i = 0; i < question.answers.length; i++) {
        const answerButton = document.createElement('button')
        answerButton.textContent = question.answers[i].text;
        answerButton.dataset.answer = question.answers[i].correct;
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
    console.log(CURRENT_QUIZ.length)
    console.log(CURRENT_QUESTION)
    CURRENT_QUESTION++
    if (CURRENT_QUIZ.length <= CURRENT_QUESTION) {
        quiz.classList.add('hide')
        result.parentNode.classList.remove('hide')
        result.textContent = `ukonczyles quiz z wynikiem ${points}`
        return
    }
    renderQuestion(CURRENT_QUIZ);
}
