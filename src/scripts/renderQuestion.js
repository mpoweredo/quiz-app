const quizTitle = document.getElementById('quiz-title');
import { quizHandler } from "./app.js";
import { clearQuestions } from "./clearQuestions.js";
import { renderAnswers } from "./renderAnswer.js";
export let CURRENT_QUIZ;


export const renderQuestion = quiz => {
    quizTitle.textContent = quiz.title;
    question.textContent = quiz.questions[quizHandler.CURRENT_QUESTION].question
    clearQuestions();
    renderAnswers(quiz.questions[quizHandler.CURRENT_QUESTION])
    quizHandler.CURRENT_QUIZ = quiz;
    
}