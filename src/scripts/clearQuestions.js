import { questionsContainer } from "./app.js";

export const clearQuestions = () => {
    while (questionsContainer.lastElementChild) {
        questionsContainer.lastElementChild.remove();
    }
}