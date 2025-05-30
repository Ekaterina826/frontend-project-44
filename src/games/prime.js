import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const isPrime = (num) => {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const runPrimeGame = () => runGame(gameRules, generateQuestionAndAnswer)

export default runPrimeGame
