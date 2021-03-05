// eslint-disable-next-line strict
"use restrict";


/**3. Write a program that calculates the total volume of a house, including the volume 
 * of the roof space. Your program must allow the user to enter width, depth, height and sweep 
 * as shown in figure below. Write code to call and test your function.
Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*depth
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write separate functions for each of the named formulas */
let prompt = require("prompt-sync")();
let width = +prompt("enter width ");
let height = +prompt("enter height ");
let depth = +prompt("enter depth ");
let sweep = +prompt("enter sweep ");

/**
 * 
 * @param {number} width an input number
 * @param {number} sweep a input number
 * @return {number} S
 * @processing using A formula 
 */
function getsS(width, sweep) {
    return ((width + 2 * sweep) / 2);
}
/**
 * 
 * @param {number} sweep an input 
 * @param {number} width an input
 * @returns {number} the triangle area; 
 * @processing: using a formula
 */
function triangleArea(sweep, width) {
    let sLong = getsS(width, sweep);
    let Area = Math.sqrt(sLong * (sLong - sweep) * (sLong - sweep) * (sLong - width));
    return Area;
}
/**
 * 
 * @param {number} sLong a return of a function
 * @param {number} sweep an input
 * @param {number} width an input
 * @param {number} depth an input
 * @returns {number} the result of the formula
 */
function roofVolume(sLong, sweep, width, depth) {
    let roofVolume = triangleArea(sLong, sweep, width) * depth;
    return roofVolume;
}

/**
 * 
 * @param {number} width an input
 * @param {number} height an input
 * @param {number} depth an input
 * @returns {number}the result of formula
 * @processing using a formula
 */
function livingVolume(width, height, depth) {
    let livingVolume = width * height * depth;
    return livingVolume;
}

/**
 * 
 * @param {number} width an input
 * @param {number} height an input
 * @param {number} depth an input
 * @param {number} sweep an input
 * @returns {number} the result of calculation
 * @process use a formula
 */
function houseVolume(width, height, depth) {
    let houseVolume = livingVolume(width, height, depth) + roofVolume();
    return houseVolume;
}
let sLong = getsS(width, sweep);
console.log(houseVolume(width, height, depth, sweep));
console.log(roofVolume(sLong, sweep, width, depth));

/*
let triangleArea = triangleArea(s,sweep,width);
console.log(triangleArea);
let roofVolume = roofVolume(triangleArea,depth);
console.log(roofVolume);
let livingVolume = livingVolume(width, height, depth);
console.log(livingVolume);
console.log(houseVolume (livingVolume, roofVolume)); */