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
let prompt= require('prompt-sync')();
let  width= +prompt("enter width ");
let  height= +prompt("enter height ");
let  depth= +prompt("enter depth ");
let  sweep= +prompt("enter sweep ");

function getsS(width,sweep){
    return ((width+2*sweep)/2);
}

 function triangleArea(s,sweep,width){
let triangleArea = Math.sqrt(s(s-sweep)*(s-sweep)*(s-width));
return triangleArea;
}

function roofVolume(triangleArea,depth){
    let roofVolume = triangleArea*depth;
    return roofVolume;
}

function livingVolume(width, height, depth){
let livingVolume = width * height * depth;
return livingVolume;
}

function houseVolume (livingVolume, roofVolume) {
    let houseVolume = livingVolume + roofVolume;
    return houseVolume;
}

console.log(houseVolume (livingVolume(width, height, depth), roofVolume(triangleArea(s(width,sweep),sweep,width),depth)));


let s1 = getS(width,sweep);
console.log(getS(width,sweep));
console.log(s1);
/*
let triangleArea = triangleArea(s,sweep,width);
console.log(triangleArea);
let roofVolume = roofVolume(triangleArea,depth);
console.log(roofVolume);
let livingVolume = livingVolume(width, height, depth);
console.log(livingVolume);
console.log(houseVolume (livingVolume, roofVolume)); */