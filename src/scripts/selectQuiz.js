import { quizzes } from "./quizzes.js";
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
	if (!quizzes) {
		quizesContainer.innerHTML = `<h3 class="error">W twojej bazie danych nie ma jeszcze zadnego quizu!</h3>`
		return
	}
	for (const quiz of quizzes) {
		const selectQuiz = document.createElement("div");
		selectQuiz.dataset.arrayIndex = indexOfQuiz;
		selectQuiz.classList.add("button-quiz");
		selectQuiz.addEventListener("click", selectQuizHandler);
		quizesContainer.appendChild(selectQuiz);
		indexOfQuiz++;
		selectQuiz.innerHTML = `
            <h1>${quiz.title}</h1>
            <p>Ostatni wynik quizu: <span id="last-score">${quiz.lastScore || 0}/${quiz.questions.length}pkt</span></p>
        `;
	}
};

renderQuizes();
