const form = document.querySelector('.quiz-form')
const paragraphSuccess = document.querySelector('#paragraphSuccess')
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
    if(userAnswer === correctAnswers[index]){
      score += 25
    }
  })

  paragraphSuccess.textContent = `Parabéns, você acertou ${score}%`
})

