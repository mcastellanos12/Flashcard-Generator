// dependency for inquirer npm package
var inquirer = require("inquirer");

var questions = require('./basic.json')

// constructor function used to create flashcard objects// basic card constructor
function Flashcard(front, back) {
  this.front = front;
  this.back = back;
}

// adding printInfo to flashcard prototype
Flashcard.prototype.printInfo = function() {
  console.log("Question: " + this.front + "\nAnswer: " + this.back );
};

// variable we will use to count how many times our questions have been asked
var count = 0;
var score = 0;

var questions = require('./basic.json');

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "input",
        message: questions[count].front
      }
    ]).then(function(answers) {
      if (answers.input === questions[count].back) {
        console.log("You are correct");
        score++;

      } else {
        console.log("you are wrong");
      }



      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
};

// call askquestion to run our code
askQuestion();
