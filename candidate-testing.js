const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = [];

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = [];
let correctAnswer = [];
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ", 
   "True or false: 5 kilometer == 5000 meters? ", 
   "(5 + 3)/2 * 10 = ? ", 
   "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
   "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let numberOfCorrectAnswers = correctAnswers.length;
let grade;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

    candidateName = input.question("May I have your full name please? ");
    console.log();
    console.log("Welcome " + candidateName + "!");
    console.log();
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i <= questions.length -1; i++) {

    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);

    if (candidateAnswer.toUpperCase() === correctAnswers[i].toUpperCase()) {
      console.log("Correct!");
      console.log();
    }else {
      console.log("I'm sorry, that is not correct");
       numberOfCorrectAnswers = numberOfCorrectAnswers - 1;
      console.log();
    }
  } 
}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

grade = numberOfCorrectAnswers/(questions.length)*100;
console.log(`Candidate Name: ${candidateName}`);

for (let i = 0; i <= questions.length-1; i++) {

  console.log(`${i+1}) ${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n\n `);
}
console.log(`Your grade is ${grade}%    You got ${numberOfCorrectAnswers} of ${questions.length} correct!`);
}

function runProgram() {

  // TODO 1.1c: Ask for candidate's name //

  askForName();
  askQuestion();
  gradeQuiz();

  //console.log(gradeQuiz(this.candidateAnswers));
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};