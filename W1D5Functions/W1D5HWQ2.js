
// eslint-disable-next-line strict
"use restrict";


/**
 * 2. volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on 
the value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use of
 the areaOfCircle function.
c. Write code to call and test your function.
 */
// part a
/**
 * 
 * @param {number} radius  input radius
 * @return {number} 
 * @ processing 
 */

// eslint-disable-next-line require-jsdoc
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
// part b
/**
 * 
 * @param {number} radius an input
 * @param {number} height an input
 * @returns{number} result of calc
 * 
 * 
 */
function volumeOfCylinder(radius, height) {
    let volume = Math.PI * radius * radius * height;
    return volume;
}
//part c
let prompt = require("prompt-sync")();
let radius = +prompt("enter radius ");
let height = +prompt("enter height ");
console.log(areaOfCircle(radius));
console.log(volumeOfCylinder(radius, height));




