/* 1. Write a JavaScript program 
that ask a user for a volume in quarts then converts that value in liters. qt =L * 1.0567*/

let prompt = require('prompt-sync')();
const quarts = prompt('Enter a quart namber here: ');
const liters = quarts/1.0567;
console.log(liters); 