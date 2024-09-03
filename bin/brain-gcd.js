#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import { mainQuestion, questionAnswer } from '../games/gcd.js';
import { askMainQuestion, getQuestion } from '../src/index.js';

greeting();
askMainQuestion(mainQuestion);
getQuestion(questionAnswer);
