import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const gameRules = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, index) => start + index * step)
}

const generateQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 10)
  const step = getRandomNumber(2, 5)
  const length = 10
  const progression = generateProgression(start, step, length)

  const hiddenIndex = getRandomNumber(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return { question, correctAnswer }
}

const runProgressionGame = () => runGame(gameRules, generateQuestionAndAnswer)

export default runProgressionGame
