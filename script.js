const main = document.querySelector('main');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((question) => {
        const article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `<h2>${question.category}</h2><p>${question.question}</p><button class="show-answer-button">Show Answer</button><p class="hidden">${question.correct_answer}</p>`;
        console.log(article);
        main.appendChild(article);
      });
        showAnswer();
    })
    .catch((displayError) => {
        const p = document.createElement('p');
        p.innerText = `${displayError}`;
    });
});

function showAnswer() {
    const showAnswerBtns = document.querySelectorAll('.show-answer-button');
    for (const showAnswerBtn of showAnswerBtns) {
        showAnswerBtn.addEventListener('click', (e) => {
            const answer = e.target.parentNode.querySelector('.hidden')
            answer.classList.remove('hidden')
        })
    }
}