/* 3. An employee at a grocery store must frequently place boxes of cans in stacks. 
Write a program that allows him to enter the total number of boxes 
and the number of boxes he will place in each stack. Your program must output the number
of stacks he will have to make. All the stacks except the last one must have the exact number
of boxes that the employee specifies. The last stack must have the exact number or fewer boxes. 
For example, if the employee enters 74 total boxes and 6 boxes in each stack your program
 must output 13.*/

 //"use strict";
 let prompt = require('prompt-sync')();
 const totalNumberOfBoxes = prompt('Enter total number of boxes  ');
 const numberOfBoxesInEachStack = prompt('Enter the number of boxes in each stack  ');
 const numberOfStacks = Math.floor(totalNumberOfBoxes/numberOfBoxesInEachStack);
 console.log(numberOfStacks);