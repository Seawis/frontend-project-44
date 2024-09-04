import readlineSync from 'readline-sync';
import { name } from './cli.js';

const askMainQuestion = (mQ) => {
  console.log(mQ);
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getQuestion = (qA) => {
  let counter = 0;
  while (counter < 3) {
    const mass = qA();
    const answer = readlineSync.question(`Question: ${mass[0]} \nYour answer: `);
    if (answer === mass[1].toString()) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${mass[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { askMainQuestion, getRandomNumber, getQuestion };
