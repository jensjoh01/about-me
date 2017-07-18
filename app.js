'use strict';



alert('Hi! I\'m John, you\'re about to play a guessing game where you need to guess if the clue about me is true or false by entering \'yes/no\' or \'y/n\' in the prompt box.');
var userName = prompt('Before we get started I need to know who is playing, please enter your name:');
console.log('username: ' + userName);
var correctAnswers = 0;
// while (userName === null || userName === ''){
//   userName = prompt('I\'m sorry, please enter your name if you want to continue');
// };
alert('Nice to meet you ' + userName + '!');


var qArray = ['Question 1: I can lick my elbow?','Question 2: I have been to the Arctic Circle?','Question 3: I have webbed toes?','Question 4: I have my pilots license?','Question 5: I have travelled to South America?'];
var shortAns = ['N','Y','N','N','Y'];
var longAns = ['NO','YES','NO','NO','YES'];
var alertRight = ['You are correct!','Correct! I spent one summer working in the Arctic Ocean!','You are correct!!','Correct, I am getting it soon though','Correct I have been to Brazil!!'];
var alertWrong = ['Wrong can\'t lick my elbow!','Wrong!!','No unfortunately not!!','No, I hope to get it soon!','Wrong! I have been to Brazil!'];

var questionFun = function(){

  for(var i = 0; i < qArray.length; i++){
    var userAns = prompt(qArray[i]).toUpperCase();
    if(userAns === longAns[i] || userAns === shortAns[i]){
      alert(alertRight[i]);
      correctAnswers ++;
    } else if(userAns !== longAns[i] || userAns !== shortAns[i]){
      alert(alertWrong[i]);
    } else{
      alert('Yes or No please');
    }
  }
};

questionFun();



//Guess my lucky number game.
//question 6

var question6 = function(){
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
  }};

//question 7
//guess the countries I have been to game

var question7 = function(){
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
  }};

question6();
question7();




alert('Thanks for playing ' + userName + '! You got ' + correctAnswers + ' questions correct.');
