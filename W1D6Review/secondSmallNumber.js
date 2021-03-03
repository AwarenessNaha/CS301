/**
 * Write a defining table and JavaScript function named secondSmallest that accepts three integer numbers as parameters and return the second-smallest value among them.
For e.g. secondSmallest(-1,9,7) → 7
 */

 "use strict";
 let prompt = require("prompt-sync")();
 let num1 = +prompt("Enter first number ");
 let num2 = +prompt("Enter  second number ");
 let num3 = +prompt("Enter third number ");

 function secondSmallest(num1, num2,num3){
 if(num1>num2 && num1<num3){
     return num1;
    } else if(num2>num1 && num2 < num3){
        return num2;
    } else {
        return num3;
    }
}

console.log("The secnd samllest is  " + secondSmallest(num1, num2, num3));
console.log("===============================")
let l=0,sl=0;
function secondSmallest1(i1,i2, i3){
if(i1>i2)

{

if(i1>i3)

l=i1;

else

l=i3;

}

else

{

if(i2>i3)

l=i2;

else

l=i3;

}

//now you have the largest number stored in variable l

if(i1==l)

{

if(i2>i3)

sl=i2;

else

sl=i3;

}

if(i2==l)

{

if(i1>i3)

sl=i1;

else

sl=i3;

}

if(i3==l)

{

if(i2>i1)

sl=i2;

else

sl=i1;

}

console.log("this Second smallest number=  "+sl);
return sl;

}
console.log("The secnd samllest is  " + secondSmallest1(num1, num2, num3));
//console.log(secondSmallest1(num1,num2,num3));