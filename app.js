const form = document.querySelector('.quiz-form')
const paragraphSuccess = document.querySelector('.paragraphSuccessContainer')
const correctAnswers = ['A', 'C', 'C', 'B']

let score = 0

const getUserAnswers = () => {
  const userAnswers = correctAnswers.map((_, index) => {
    return form[`inputQuestion${index + 1}`].value;
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

