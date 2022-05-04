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

const jd = (e) => {
	e.preventDefault();
	console.log("kurwa")
	const index = sessionStorage.getItem('quizIndex')
	console.log(index)
	const movingBox = document.querySelector(`[data-array-index="${index}"`)
	console.log(movingBox)
	movingBox.classList.remove('hide')
}


removeBox.addEventListener('dragenter', addColor)
removeBox.addEventListener('dragover', addColor)
removeBox.addEventListener('dragleave', removeColor)
removeBox.addEventListener('dragend', jd)
removeBox.addEventListener('drop', removeQuiz)