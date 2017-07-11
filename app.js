"use strict";


alert("Hi! I'm John, you\'re about to play a guessing game where you need to guess if the clue about me is true or false by entering \"yes/no\" or \"y/n\" in the prompt box.");
var userName = prompt("Before we get started I need to know who is playing, please enter your name:");
console.log("username: " + userName);

while (userName === null || userName === ""){
  userName = prompt("I\'m sorry, please enter your name if you want to continue");
};

alert("Nice to meet you " + userName + "!");

var question1ElbowLick = prompt("Question 1: I can lick my elbow?").toLowerCase();
console.log("question1ElbowLick user answer: " + question1ElbowLick);

if (question1ElbowLick === "yes" || question1ElbowLick === "y"){
  alert("Wrong! I cannot lick my elbow...sigh");
} else if (question1ElbowLick === "no" || question1ElbowLick === "n"){
  alert("You are correct!");
} else{
  alert("Please enter yes/no or y/n");
}

var question2ArcticCircle = prompt("Question 2: I have been to the Arctic Circle?").toLowerCase();
console.log("question2ArcticCircle user answer: " + question2ArcticCircle);

if (question2ArcticCircle === "yes" || question2ArcticCircle === "y"){
  alert("Correct! I spent one summer working in the Arctic Ocean...the sun NEVER set!");
} else if (question2ArcticCircle === "no" || question2ArcticCircle === "n"){
  alert("Wrong, I spent one summer working in the Arctic Ocean...the sun NEVER set!");
} else{
  alert("Please enter yes/no or y/n");
}

var question3WebbedToes = prompt("Question 3: I have webbed toes?").toLowerCase();
console.log("question3WebbedToes user answer: " + question3WebbedToes);

if (question3WebbedToes === "yes" || question3WebbedToes === "y"){
  alert("No, unfortunately I do not have webbed toes. Swimming would be so much easier.");
} else if (question3WebbedToes === "no" || question3WebbedToes === "n"){
  alert("You are correct! But wouldn\'t it be nice to be able to swim faster?");
} else{
  alert("Please enter yes/no or y/n");
}

var question4PilotsLicense = prompt("Question 4: I have my pilots license?").toLowerCase();
console.log("question4PilotsLicense user anser: " + question4PilotsLicense);

if (question4PilotsLicense === "yes" || question4PilotsLicense === "y"){
  alert("Nope, but I hope to get it soon!");
} else if (question4PilotsLicense === "no" || question4PilotsLicense === "n"){
  alert("Correct, but I am planning on getting it soon!");
} else{
  alert("Please enter yes/no or y/n");
}

var question5SouthAmerica = prompt("Question 5: I have travelled to South America?").toLowerCase();
console.log("question5SouthAmerica :" + question5SouthAmerica);

if (question5SouthAmerica === "yes" || question5SouthAmerica === "y"){
  alert("Correct! I have been to Rio de Janeiro.");
} else if (question5SouthAmerica === "no" || question5SouthAmerica === "n"){
  alert("Wrong! I have been to Rio de Janeiro.");
} else{
  alert("Please enter yes/no or y/n");
}
