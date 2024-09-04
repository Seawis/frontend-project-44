import { getRandomNumber } from '../src/index.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAnswer = () => {
  const question = getRandomNumber();

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

  const answer = (isPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};

export { mainQuestion, questionAnswer };
