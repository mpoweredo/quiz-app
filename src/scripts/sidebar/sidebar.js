const dashboardBtn = document.getElementById('dashboard');
const createQuizBtn = document.getElementById('create-quiz');

dashboardBtn.addEventListener('click', () => {
    document.body.classList = "";
    document.body.classList.add('dashboard-active')
})

createQuizBtn.addEventListener('click', () => {
    document.body.classList = "";
    document.body.classList.add('create-quiz-active')
})