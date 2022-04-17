import { quizHandler } from "./app.js";
import { startGame } from "./startGame.js"

const currentQuiz = JSON.parse(localStorage.getItem('quizHandler'));

startGame(currentQuiz.CURRENT_QUIZ)