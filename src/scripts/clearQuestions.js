import { answersContainer } from "./app.js";

export const clearQuestions = () => {
    while (answersContainer.lastElementChild) {
        answersContainer.lastElementChild.remove();
    }
}