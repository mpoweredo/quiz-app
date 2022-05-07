// import { quizzes } from "./quizzes.js";
import { QuizzesCards } from "./renderQuizes.js";

const searchBar = document.getElementById('search-bar');

const search = e => {
    const value = e.target.value.toUpperCase()
    QuizzesCards.forEach(quizCard => {
        const isVisible = quizCard.title.includes(value)
        quizCard.element.classList.toggle("hide", !isVisible)
    })
};


searchBar.addEventListener('input', search)