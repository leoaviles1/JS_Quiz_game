/////////////////////////////
// CODING CHALLENGE
// --- Let's build a fun quiz game in the console! ---

(function quiz() {
  var userInput, random;
  var score = 0; // 10. Track the user's score

  // 1. Build a function constructor called Question to describe a question.
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // 2. Create a couple of questions using the constructor
  var question0 = new Question("What is the the color of the sun?", ["Black", "Gray", "Yellow", "Pink"], 2);
  var question1 = new Question("What color is the sky?", ["Purple", "Red", "Green", "Blue"], 3);
  var question2 = new Question("Do you enjoy working here?", ["No", "Yes"], 1);
  var question3 = new Question("Do you like Wine Wednesday?", ["No", "Absolutely"], 1);

  // 3. Store them all inside an array
  var questions = [question0, question1, question2, question3];

  // 4. Select one random question
  nextQuestion();

  function nextQuestion() {
    random = Math.floor(Math.random() * 4);
    currentQuestion(random);
  }

  // Log selected question and answers to the console
  function currentQuestion(questionNum) {
    console.log(questions[questionNum].question);

    Question.selection = function(answers) {
      for (let i = 0; i < answers.length; i++) {
        console.log(i + ": " + answers[i]);
      }
    };
    Question.selection(questions[questionNum].answers);

    // 5. Use the 'prompt' function to ask the user for the correct answer.
    userInput = prompt(questions[questionNum].question);
    userAnswer(userInput);
  }

  // 6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).
  function userAnswer(input) {
    if (parseFloat(input) === questions[random].correctAnswer) {
      console.log("****************************");
      console.log("That was the correct answer!");
      console.log("****************************");
      displayScore(score);
      nextQuestion(); // 8. After you display the result, display the next random question, so that the game never ends
    } else {
      if (input === "exit" || input === "Exit" || input === "Close" || input === "close" || input === null) {
        console.log("Player has ended the game!");
        return;
      }

      if (parseFloat(input) >= questions[random].answers.length || parseFloat(input) < 0) {
        console.log("ERROR: Invalid selection!");
        currentQuestion(random);
      }

      console.log("#####Wrong answer. Try again!#####");
      currentQuestion(random);
    }
  }

  //11. Display the score in the console.
  function displayScore(playerScore) {
    score++;
    console.log("Your current score is: " + score);
    console.log("-------NEXT QUESTION-------");
  }
})(); // 7. Make sure that all your code is private and doesn't interfere with the other programmers code (IIFE invokes whole quiz as function)
