import { quizzes } from "./quizzes.js";
import { quizHandler } from "./app.js";

export const quizesContainer = document.querySelector(".quizzes");

const selectQuizHandler = (e) => {
	const indexOfQuiz = e.target.closest('div').dataset.arrayIndex;
	quizHandler.CURRENT_QUIZ = indexOfQuiz;
	window.open("quiz.html", "_blank");
    localStorage.removeItem('quizHandler')
    localStorage.setItem('quizHandler', JSON.stringify(quizHandler))
};

export const renderQuizes = () => {
	let indexOfQuiz = 0;
	console.log(quizzes)
	if (quizzes == false) {
		quizesContainer.innerHTML = `<h3 class="error">W twojej bazie danych nie ma jeszcze zadnego quizu!</h3>`
		return
	}
	for (const quiz of quizzes) {
		const selectQuiz = document.createElement("div");
		selectQuiz.dataset.arrayIndex = indexOfQuiz;
		selectQuiz.setAttribute('draggable', true)
		selectQuiz.classList.add("button-quiz");
		selectQuiz.addEventListener("click", selectQuizHandler);
		selectQuiz.addEventListener("dragstart", e => {
			const index = e.target.closest('div').dataset.arrayIndex;
			e.dataTransfer.setData('text/plain', index)
			sessionStorage.setItem('quizIndex', index)
			setTimeout(() => {
				e.target.classList.add('hide')
			}, 30);
		});
		selectQuiz.addEventListener('dragend', (e) => {
			e.target.classList.remove('hide')
		})
		quizesContainer.appendChild(selectQuiz);
		indexOfQuiz++;
		selectQuiz.innerHTML = `
            <h1>${quiz.title}</h1>
            <p>Lastest quiz score: <span id="last-score">${quiz.lastScore || 0}/${quiz.questions.length}pkt</span></p>
        `;
	}
};


renderQuizes();
