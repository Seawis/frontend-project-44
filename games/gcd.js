import { getRandomNumber } from '../src/index.js';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const question = `${a} ${b}`;

  const answer = (x, y) => {
    if (y > x) {
      return answer(y, x);
    }
    if (!y) {
      return x;
    }
    return answer(y, (x % y));
  };

  const result = [question, answer(a, b)];
  return result;
};
export { mainQuestion, questionAnswer };
