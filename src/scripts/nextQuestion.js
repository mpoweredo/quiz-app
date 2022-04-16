import { quizHandler } from "./app.js"
import { renderQuestion } from "./renderQuestion.js";

export const nextQuestion = () => {
    const CURRENT_QUIZ = quizHandler.CURRENT_QUIZ;
    // console.log(CURRENT_QUIZ.questions.length)
    // console.log(CURRENT_QUESTION)
    quizHandler.CURRENT_QUESTION++
    if (CURRENT_QUIZ.questions.length <= quizHandler.CURRENT_QUESTION) {
        quiz.classList.add('hide')
        result.parentNode.classList.remove('hide')
        result.textContent = `ukonczyles quiz z wynikiem ${quizHandler.points}/${CURRENT_QUIZ.questions.length} punktow!`
        return
    }
    renderQuestion(CURRENT_QUIZ);
}
