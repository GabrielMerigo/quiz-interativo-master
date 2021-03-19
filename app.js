const form = document.querySelector('.quiz-form')
const paragraphSuccess = document.querySelector('.paragraphSuccess')
const correctAnswers = ['A', 'C', 'C', 'B']

let score = 0

const getUserAnswers = () => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ];

  return userAnswers
}

const calculateUserScore = (userAnswers) =>
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

form.addEventListener('submit', event => {
  score = 0
  event.preventDefault()

  // pega as respostas do usuário

  const userAnswers = getUserAnswers()

  // Calcula pontuação do user
  calculateUserScore(userAnswers)

  let counter = 0;

  // conta o score do usuário
  const timer = setInterval(() => {
    if (counter < score) {
      counter++
      clearInterval(timer)
    }
  }, 3000)

  scrollTo(0, 0)

  // seta o % do usuário na tela.
  paragraphSuccess.innerHTML = `<strong>Parabéns, você acertou ${score}%</strong>`
})

