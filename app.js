const form = document.querySelector('.quiz-form')
const paragraphSuccess = document.querySelector('.paragraphSuccess')
const correctAnswers = ['A', 'C', 'C', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

  let counter = 0;

  const timer = setInterval(() => {
    if (counter < score) {
      counter++
      clearInterval(timer)
    }
  }, 3000)

  scrollTo(0, 0)

  paragraphSuccess.innerHTML = `<strong>Parabéns, você acertou ${score}%</strong>`
})

