import { questionsContainer } from "./app.js";
import { checkAnswer } from "./checkAnswer.js";

export const renderAnswers = question => {
    for (const questionEl of question.answers) {
        const answerButton = document.createElement('button')
        answerButton.textContent = questionEl.text;
        answerButton.dataset.answer = questionEl.correct;
        questionsContainer.appendChild(answerButton)
        answerButton.addEventListener('click', checkAnswer)
    }
}