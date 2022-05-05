import { answersContainer } from "../dashboard/app.js";

export const clearQuestions = () => {
    while (answersContainer.lastElementChild) {
        answersContainer.lastElementChild.remove();
    }
}