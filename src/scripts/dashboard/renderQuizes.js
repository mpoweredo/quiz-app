import { quizzes } from "./quizzes.js";
import { quizesContainer } from "./clearQuizesContainer.js";
import { selectQuizHandler } from "./selectQuiz.js";

export let QuizzesCards = [];

export const renderQuizes = () => {
	let indexOfQuiz = 0;
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

		const quizCard = {
			title: quiz.title.toUpperCase(),
			element: selectQuiz
		}
		QuizzesCards.push(quizCard);
	}
};



document.addEventListener('DOMContentLoaded', renderQuizes);
