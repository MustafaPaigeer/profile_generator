const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q0 = 'What\'s your name? ';
const q1 = 'What\'s an activity you like doing? ';
const q2 = 'What do you listen to while doing that? ';
const q3 = 'Which meal is your favourite (eg: dinner, brunch, etc.) ';
const q4 = 'What\'s your favourite thing to eat for that meal? ';
const q5 = 'Which sport is your absolute favourite? ';
const q6 = 'What is your superpower? In a few words, tell us what you are amazing at! ';

const questions = [q0, q1, q2, q3, q4, q5, q6];
let response = [];
const askQuestions = i => {
  if (i < questions.length) {
    rl.question(questions[i], (answer) => {
      response.push(answer);
      askQuestions(i + 1);
    });
  } else {
    console.log(`\n${response[0]}'s Profile: 
    \nMy name is ${response[0]} and my favorite activity is ${response[1]} 
    and I would like to listen to ${response[2]} during my activity. 
    My favourite meal is ${response[3]} and i like to eat ${response[4]}\n. My absolute favourite sport is ${response[5]} and I am amazing at ${response[6]}.`);
    rl.close();
  }
};

askQuestions(0);
