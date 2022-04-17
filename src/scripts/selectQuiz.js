import { quizzes } from "./quizzes.js";
import { startGame } from "./startGame.js";
import { quizHandler } from "./app.js";

const selectQuizHandler = (e) => {
	const indexOfQuiz = e.target.closest('div').dataset.arrayIndex;
	quizHandler.CURRENT_QUIZ = indexOfQuiz;
	window.open("quiz.html", "_blank");
    localStorage.removeItem('quizHandler')
    localStorage.setItem('quizHandler', JSON.stringify(quizHandler))
};

export const renderQuizes = () => {
	const quizesContainer = document.querySelector(".quizzes");
	let indexOfQuiz = 0;
	for (const quiz of quizzes) {
		// const selectQuiz = document.createElement('button')
		// selectQuiz.textContent = quiz.title

		const selectQuiz = document.createElement("div");
		selectQuiz.dataset.arrayIndex = indexOfQuiz;
		selectQuiz.classList.add("button-quiz");
		selectQuiz.addEventListener("click", selectQuizHandler);
		quizesContainer.appendChild(selectQuiz);
		indexOfQuiz++;
		selectQuiz.innerHTML = `
            <h1>${quiz.title}</h1>
            <p>Ostatni wynik quizu: <span id="last-score">5/8pkt</span></p>
        `;
	}
};

renderQuizes();
