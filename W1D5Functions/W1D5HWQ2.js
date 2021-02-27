/**
 * 2. volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on 
the value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use of
 the areaOfCircle function.
c. Write code to call and test your function.
 */
// part a
function areaOfCircle(r=1){
    let area = Math.PI*r*r;
    return area;
}
// part b
function volumeOfCylinder (r=1, h=1){
    let volume = Math.PI*r*r*h;
    return volume;
}
//part c
let prompt= require('prompt-sync')();
let  radius= +prompt("enter radius ");
let  height= +prompt("enter height ");
console.log(areaOfCircle(radius));
console.log(volumeOfCylinder(radius,height));




