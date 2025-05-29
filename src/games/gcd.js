import runGame from "../index.js";
import getRandomNumber from "../utils/random.js";

// Функция для вычисления НОД
const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// Генератор вопросов и ответов
const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return { question, correctAnswer };
};

const gameRules = "Find the greatest common divisor of given numbers.";

const runGcdGame = () => runGame(gameRules, generateQuestionAndAnswer);

export default runGcdGame;
