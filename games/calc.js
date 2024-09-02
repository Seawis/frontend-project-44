#!/usr/bin/env node
import { getRandomNumber } from '../src/index.js';

const mainQuestion = 'What is the result of the expression?';

const questionAnswer = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const mass = ['+', '-', '*'];
  const c = mass[Math.floor(Math.random() * 3)];
  let answer;
  switch (c) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
  }
  const question = `${a} ${c} ${b}`;
  const result = [question, answer.toString()];
  return result;
};
export { mainQuestion, questionAnswer };
