"use strict";

/**
 * processing:
 * first get reverse number;
 * -get a digit;
 * -get the quotient
 * -save reserseNum as we go
 * -with each new digit mult reserseSum by 10 and add new digit
 * then check prime and return tif it is or not.
 * 
 *@param  is a number integer. 
 @ return boolean;
 */
let prompt= require('prompt-sync')();
let number = +prompt("enter number ");
 function reverse (number){
     let reverseNum =0;
     while(number>0){
     const digit = number%10;
     number = Math.floor(number/10);
     reverseNum = (reverseNum*10)+digit;
    }
     return reverseNum;
 }

 //console.log("expect 1234 is " , reverse(1234));
 console.log("expect is " , reverse(number));
 function checkPrime(num){
     let factorsCount =0;
     for(let i=2; i<num; i++){
         if(num%i===0){
             factorsCount++;
         }
    if(factorsCount===0){
        return true;
    } else{
        return false;
    }
     }
    }

    //console.log(checkPrime(17));
    //console.log(checkPrime(18));
    console.log(checkPrime(reverse(number)));