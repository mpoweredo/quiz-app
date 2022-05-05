import { nextQuestion } from "./nextQuestion.js";
import { quizHandler } from "../dashboard/app.js";


export const checkAnswer = e => {
    const button = e.target;

    if (button.dataset.answer === 'true') {
        quizHandler.points++
        nextQuestion();
    } else {
        nextQuestion();
    }
}