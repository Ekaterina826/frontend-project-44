import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const gameRules = 'What is the result of the expression?'
const operators = ['+', '-', '*']

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return { question, correctAnswer }
}

export default () => runGame(gameRules, generateQuestionAndAnswer)
