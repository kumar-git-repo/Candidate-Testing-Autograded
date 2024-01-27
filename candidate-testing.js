const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers =["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers =[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  //const input = require('readline-sync');
  candidateName = input.question("What is your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //const input = require('readline-sync');
  for (i=0; i<questions.length; i++) {
    
    candidateAnswers.push(input.question(questions[i]))
    //candidateAnswers[i] = input.question(questions[i])
  }
 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  /*if (candidateAnswer === correctAnswer) {
  console.log("Hi " + candidateName +" Your answer is correct. Great Job.")
} else{
   console.log("You answer is not correct")
}*/

for (x=0; x<candidateAnswers.length; x++){
  console.log(`Answer for ${questions[x]} is "${correctAnswers[x]}" - Your answer is "${candidateAnswers[x]}"`)
}

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let passStatus=''
  let numberOfCorrectAnswers = 0
  //let candidateCorrectAnswers=[]
  
for (i=0; i<candidateAnswers.length; i++){
  if (candidateAnswers[i].toUpperCase()  === correctAnswers[i].toUpperCase()){
    numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
    //candidateCorrectAnswers.push(candidateAnswers[i])
  }
}
   //grade = candidateCorrectAnswers.length/correctAnswers.length*100; 
grade = numberOfCorrectAnswers/correctAnswers.length*100;

    if (grade >= 80){
      passStatus = 'Pass'
    } else {
      passStatus = 'Fail'
    }

console.log(`Hi ${candidateName}, Your score = ${grade}%; Your Grade - ${passStatus}`)


  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hi ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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