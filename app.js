const form = document.querySelector('.quiz-form')
const paragraphSuccess = document.querySelector('.paragraphSuccessContainer')
const correctAnswers = ['A', 'C', 'C', 'B']

let score = 0

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    const questions = `inputQuestion${index + 1}`;
    const userAnswer = form[questions].value;
    userAnswers.push(userAnswer)
  })
  return userAnswers
}

const calculateUserScore = (userAnswers) =>
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

const animateFinalScore = () => {
  let counter = 0;
  const timer = setInterval(() => {
    if (counter < score) {
      ++counter
      paragraphSuccess.innerHTML = `<strong>Parabéns, você acertou ${score}%</strong>`
      clearInterval(timer)
    }
  }, 10)
}

form.addEventListener('submit', event => {
  score = 0
  event.preventDefault()
  const userAnswers = getUserAnswers()

  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  calculateUserScore(userAnswers)
  animateFinalScore()
})

