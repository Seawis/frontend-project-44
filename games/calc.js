import { getRandomNumber } from '../src/index.js';

const mainQuestion = 'What is the result of the expression?';

const questionAnswer = () => {
  const question = getRandomNumber();
  const answer = ((question % 2) === 0) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

export { mainQuestion, questionAnswer };
