import { renderQuestion } from "./renderQuestion.js"
import { quizzes } from "../dashboard/quizzes.js"
import { quizHandler } from "../dashboard/app.js"

const startGameContainer = document.querySelector('.start-game')


export const startGame = (selectedQuiz) => {
    quizHandler.CURRENT_QUIZ_INDEX = parseInt(selectedQuiz);
    quiz.classList.remove('hide')
    renderQuestion(quizzes[selectedQuiz]);
}