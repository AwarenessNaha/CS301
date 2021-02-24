/*  2. Write a JavaScript program that asks a user for a distance in kilometers 
and then convert that value in miles. 1 mile= 1.609km, 1 km = 0.6213711922 mi*/

let prompt = require('prompt-sync')();
const  kilometers= prompt('Enter a kilometers namber here: ');
const miles = kilometers/1.609;
console.log(miles); 