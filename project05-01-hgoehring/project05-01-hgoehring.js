"use strict";
/*    Project 05-01
      Project to present an online quiz with a countdown clock
      Author: Harrison Goehring
      Date: November 8th, 2022
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let practiceList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function () {
   overlay.className = "showquiz"; 
   timeID = setInterval(countdown, 1000);
}

function countdown() {
   if (timeLeft === 0) {
      clearInterval(timeID);
      let totalCorrect = checkAnswers();
      if (totalCorrect === correctAnswers.length) {
         window.alert("Congratulations! You got 100%!");
      } else {
         window.alert("You got " + totalCorrect + " questions correct out of " + correctAnswers.length);
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";
      }
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < practiceList.length; i++) {
      if (practiceList[i].value === correctAnswers[i]) {
         correctCount++;
         practiceList[i].className = "";
      } else {
         practiceList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

