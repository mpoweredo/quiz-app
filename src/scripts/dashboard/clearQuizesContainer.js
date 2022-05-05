import { renderQuizes } from "../runningQuiz/renderQuizes.js";

export const quizesContainer = document.querySelector(".quizzes");

export const clearQuizContainer = () => {
    quizesContainer.innerHTML = "";
    renderQuizes();
    console.log('essa')
}