import { renderQuizes } from "./selectQuiz.js"
import { quizzes } from "./quizzes.js"
import { quizesContainer } from "./selectQuiz.js"

const removeBox = document.getElementById('removeBox')

export const removeQuiz = e => {
	const index = e.dataTransfer.getData('text/plain')
	e.target.closest('.removeQuizDrop').classList.remove('drag-over')
	quizzes.splice(index, 1);
	console.log(index)
	localStorage.setItem('quizzes', JSON.stringify(quizzes))
	quizesContainer.innerHTML = "";
	renderQuizes();
}

const addColor = e => {
	e.preventDefault();
	e.target.closest('.removeQuizDrop').classList.add('drag-over')
}
const removeColor = e => {
	e.target.closest('.removeQuizDrop').classList.remove('drag-over')
}


removeBox.addEventListener('dragenter', addColor)
removeBox.addEventListener('dragover', addColor)
removeBox.addEventListener('dragleave', removeColor)
removeBox.addEventListener('drop', removeQuiz)