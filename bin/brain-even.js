#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 3) {
  const numbers = Math.floor(Math.random() * 100);
  console.log(`Question: ${numbers}`);
  const answer = readlineSync.question('Your answer: ');
  if (numbers % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, '${name}'!`);
      break;
    }
  }
  if (numbers % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, '${name}'!`);
      break;
    }
  }
}
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
