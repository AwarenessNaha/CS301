/** Write a defining table and JavaScript program that asks user to guess a number between 1 and 10 until the user enters 5. Program also keeps track of number of attempts user made before guessing the correct number that is 5. Program should output following results based on the attempts made:
1. If user guessed 5 in first attempt, program should print "Awesome!"
2. If user guessed 5 in second attempt, program should print "Great!"
3. If user guessed 5 in third attempt, program should print "Not bad!"
4. Otherwise, program should print "It took you n attempts!", where n is the number of
attempts user made before guessing the correct answer.
 */
/**
 * defining table
 * input: a number from prompt of user;
 * output: depends on conditions, it can be one of "Awesome!", "Great!", "Not bad!" and "It took you n attempts!".
 * processing: 
 * -get the guessing number from user;
 * -define a variable to hold the counter of user input;
 * -do while(guessing number !== 5) loop 
 * -- increase counter by 1;
 * -check guessing number, if it is 1, print "Awesome!";
 * -if it is 2, print "Great!";
 * -if it is 2, print "Not bad!"";
 *  else print "It took you n attempts!", n is the guessing nmber;
 * 
 */

 "use strict";
 let prompt = require("prompt-sync")();
 let guessingCounter = 1;
 let number =0;
    number = +prompt("Guess a number between 1 to 10 ");
while(number!==5){
        guessingCounter++;
        number = +prompt("Guess a number between 1 to 10 ");
 }
 
 switch (guessingCounter){
     case 1: 
     console.log("Awesome!");
     break;
     case 2: 
     console.log("Great!");
     break;
     case 3: 
     console.log("Not bad!");
     break;
     default: 
     console.log("It took you  " +  guessingCounter + "  attempts!");
 }
