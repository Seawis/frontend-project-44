import { getRandomNumber } from '../src/index.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAnswer = () => {
  const question = getRandomNumber();
  const answer = ((question % 2) === 0) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

export { mainQuestion, questionAnswer };
