// declaring variables and accessing values
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
// generating a random number
const answer = Math.floor(Math.random() * 100) + 1;

// console.log(answer);

/* declaring variables for guesses and no of guesses */

var no_of_guesses = 0;
var guesses = [];

// function logic

function play() {
  //pushing user's guess in a local variable so we can access it

  var usr_guess = document.getElementById("guess").value;

  //checking whether the value enter by user fits the criteria

  if (usr_guess > 100 || usr_guess < 0) {
    alert("Please enter a number between 1 - 100");
  }

  //if false i.e falls in criteria then this code block will run
  else {
    // pushing the value entered by the user to the string guessess & increasing the value of no of guesses

    guesses.push(usr_guess);
    no_of_guesses++;
    console.log(no_of_guesses);

    //if the usr_guess is lower than the answer
    
    if (usr_guess < answer) {
      msg1.textContent = "Oops, Your guess is too low.";
      msg2.textContent = `No. Of Guesses: ${no_of_guesses}`;
      msg3.textContent = `Your Guessed Numbers are: ${guesses}`;
    }
    //if the usr_guess is more than the answer

     else if (usr_guess > answer) {
      msg1.textContent = "Oops, Your guess is too high.";
      msg2.textContent = `No. Of Guesses ${no_of_guesses}`;
      msg3.textContent = `Your Guessed Number are: ${guesses} `;
    } 
    //if the usr_guess matches the answer

    else if (usr_guess == answer) {
      msg1.textContent = "Yay! you guessed the correct number";
      msg2.textContent = `The correct number surely was ${answer}`;
      msg3.textContent = `You guessed the correct number in ${no_of_guesses} guesses`;
      document.getElementById("my_btn").disabled = true;
    }
  }
}
