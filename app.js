'use strict';

alert('Hi! I\'m John, you\'re about to play a guessing game where you need to guess if the clue about me is true or false by entering \'yes/no\' or \'y/n\' in the prompt box.');
var userName = prompt('Before we get started I need to know who is playing, please enter your name:');
console.log('username: ' + userName);
var correctAnswers = 0;
// while (userName === null || userName === ''){
//   userName = prompt('I\'m sorry, please enter your name if you want to continue');
// };

alert('Nice to meet you ' + userName + '!');

var question1ElbowLick = prompt('Question 1: I can lick my elbow?').toLowerCase();
console.log('question1ElbowLick user answer: ' + question1ElbowLick);

if (question1ElbowLick === 'yes' || question1ElbowLick === 'y'){
  alert('Wrong! I cannot lick my elbow...sigh');
} else if (question1ElbowLick === 'no' || question1ElbowLick === 'n'){
  alert('You are correct!');
  correctAnswers++;
} else{
  alert('Please enter yes/no or y/n');
}

var question2ArcticCircle = prompt('Question 2: I have been to the Arctic Circle?').toLowerCase();
console.log('question2ArcticCircle user answer: ' + question2ArcticCircle);

if (question2ArcticCircle === 'yes' || question2ArcticCircle === 'y'){
  alert('Correct! I spent one summer working in the Arctic Ocean...the sun NEVER set!');
  correctAnswers++;
} else if (question2ArcticCircle === 'no' || question2ArcticCircle === 'n'){
  alert('Wrong, I spent one summer working in the Arctic Ocean...the sun NEVER set!');
} else{
  alert('Please enter yes/no or y/n');
}

var question3WebbedToes = prompt('Question 3: I have webbed toes?').toLowerCase();
console.log('question3WebbedToes user answer: ' + question3WebbedToes);

if (question3WebbedToes === 'yes' || question3WebbedToes === 'y'){
  alert('No, unfortunately I do not have webbed toes. Swimming would be so much easier.');
} else if (question3WebbedToes === 'no' || question3WebbedToes === 'n'){
  alert('You are correct! But wouldn\'t it be nice to be able to swim faster?');
  correctAnswers++;
} else{
  alert('Please enter yes/no or y/n');
}

var question4PilotsLicense = prompt('Question 4: I have my pilots license?').toLowerCase();
console.log('question4PilotsLicense user anser: ' + question4PilotsLicense);

if (question4PilotsLicense === 'yes' || question4PilotsLicense === 'y'){
  alert('Nope, but I hope to get it soon!');
} else if (question4PilotsLicense === 'no' || question4PilotsLicense === 'n'){
  alert('Correct, but I am planning on getting it soon!');
  correctAnswers++;
} else{
  alert('Please enter yes/no or y/n');
}

var question5SouthAmerica = prompt('Question 5: I have travelled to South America?').toLowerCase();
console.log('question5SouthAmerica :' + question5SouthAmerica);

if (question5SouthAmerica === 'yes' || question5SouthAmerica === 'y'){
  alert('Correct! I have been to Rio de Janeiro.');
  correctAnswers++;
} else if (question5SouthAmerica === 'no' || question5SouthAmerica === 'n'){
  alert('Wrong! I have been to Rio de Janeiro.');
} else{
  alert('Please enter yes/no or y/n');
}

//Guess my lucky number game.

alert('Great guessing but let\'s see if you can guess my lucky number in 4 tries!');
/* I'm having problems with cleaning up this code. Need while {if, else if, else}*/
var luckyNumber = 8;
var userNumber;
var userGuess = 0;

while(userGuess < 4 && userNumber !== luckyNumber){
  userNumber = parseInt(prompt('Guess a number between 1-20.'));
  console.log('user guess # ' + userGuess);
  if (userNumber > luckyNumber){
    alert('Too high!');
    userGuess++;
  } else if (userNumber < luckyNumber) {
    alert('Too low!');
    userGuess++;
  }
  else if (userNumber === luckyNumber){
    alert('Good Job! Yes ' + luckyNumber + ' is my lucky number.');
    userGuess = 4;
    correctAnswers++;
    break;
  } else {
    alert('Please pick a number from 1-20');
    userGuess++;
  }
}
if (userGuess === 4 && userNumber !== luckyNumber){
  alert('Sorry, better luck next time!');
}


//guess the countries I have been to.

var countries = ['spain', 'germany', 'france', 'denmark', 'belgium', 'thailand', 'nepal', 'scotland', 'czech Republic', 'brazil'];
var guessesRemaining = 6;


while (guessesRemaining > 0){
  var countryGuess = prompt('Can you guess which countries I have been to?').toLowerCase();
  for (var j = 0; j < countries.length; j++){
    if( countryGuess === countries[j]){
      alert('Yes you\'re correct!');
      alert('I have been to ' + countries);
      correctAnswers++;
      guessesRemaining = -1;
      console.log('j: ', j);
      break;
    }
  }
  if(guessesRemaining > 0){
    guessesRemaining--;
    alert('Nope! You have ' + guessesRemaining + ' guesses remaining.');
  }
  if(guessesRemaining === 0) {
    alert('Sorry, you\'re out of guesses. The countries I have been to are: ' + countries);
  }
  console.log(guessesRemaining);
}

alert('Thanks for playing ' + userName + '! You got ' + correctAnswers + ' questions correct.');
