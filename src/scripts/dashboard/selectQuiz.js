import { quizHandler } from "./app.js";


export const selectQuizHandler = (e) => {
	const indexOfQuiz = e.target.closest('div').dataset.arrayIndex;
	quizHandler.CURRENT_QUIZ = indexOfQuiz;
	window.open("quiz.html", "_blank");
    localStorage.removeItem('quizHandler')
    localStorage.setItem('quizHandler', JSON.stringify(quizHandler))
};

