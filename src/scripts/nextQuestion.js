import { quizHandler } from "./app.js"
import { renderQuestion } from "./renderQuestion.js";



export const nextQuestion = () => {
    quizHandler.CURRENT_QUESTION++
    if (quizHandler.CURRENT_QUIZ.questions.length <= quizHandler.CURRENT_QUESTION) {
        quiz.classList.add('hide')
        result.parentNode.classList.remove('hide')
        result.textContent = `ukonczyles quiz z wynikiem ${quizHandler.points}/${quizHandler.CURRENT_QUIZ.questions.length} punktow!`
        // const lastScore = {
        //     quizIndex: quizHandler.CURRENT_QUIZ_INDEX,
        //     quizScore: quizHandler.points
        // }
        // quizHandler.lastScore.push(lastScore)
        // localStorage.setItem('lastscore', JSON.stringify(lastScore))
        // console.log(lastScore)
        return
    }
    renderQuestion(quizHandler.CURRENT_QUIZ);
}