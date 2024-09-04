#!/usr/bin/env node
import { getRandomNumber } from '../src/index.js';

const mainQuestion = 'What number is missing in the progression?';

const questionAnswer = () => {
  let first = getRandomNumber();
  const step = Math.floor(Math.random() * 5) + 1;
  const mass = [];
  for (let i = 0; i < 10; i += 1) {
    mass.push(first);
    first += step;
  }
  const missingNumber = Math.floor(Math.random() * 10);
  const answer = mass[missingNumber];
  mass[missingNumber] = '..';
  const question = mass.join(' ');
  return [question, answer];
};
export { mainQuestion, questionAnswer };
