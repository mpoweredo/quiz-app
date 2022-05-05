import { quizHandler } from "../dashboard/app.js"
import { quizzes } from "../dashboard/quizzes.js";
import { renderQuestion } from "./renderQuestion.js";

export const nextQuestion = () => {
    quizHandler.CURRENT_QUESTION++
    if (quizHandler.CURRENT_QUIZ.questions.length <= quizHandler.CURRENT_QUESTION) {
        quiz.classList.add('hide')
        result.parentNode.classList.remove('hide')
        const scoreOutput = quizHandler.points > 1 || quizHandler.points == 0 ? "points" : "point";
        result.textContent = `You finished quiz with ${quizHandler.points}/${quizHandler.CURRENT_QUIZ.questions.length} ${scoreOutput} !`
        const lastScore = {
            quizIndex: quizHandler.CURRENT_QUIZ_INDEX,
            quizScore: quizHandler.points
        }
        quizzes[lastScore.quizIndex].lastScore = lastScore.quizScore;
        localStorage.setItem('quizzes', JSON.stringify(quizzes))
        return
    }
    renderQuestion(quizHandler.CURRENT_QUIZ);
}
