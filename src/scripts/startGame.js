import { renderQuestion } from "./renderQuestion.js"
import { quizzes } from "./quizzes.js"

const startGameContainer = document.querySelector('.start-game')


export const startGame = (selectedQuiz) => {
    startGameContainer.classList.add('hide')
    quiz.classList.remove('hide')
    renderQuestion(quizzes[selectedQuiz]);
}