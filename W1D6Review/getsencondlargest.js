
 "use strict";
 let prompt = require("prompt-sync")();
 let num1 = +prompt("Enter first number ");
 let num2 = +prompt("Enter  second number ");
 let num3 = +prompt("Enter third number ");

 function secondlargest(num1, num2,num3){
     if(num1>num2){
         if(num1<num3){
             return num1;
         }else if(num2>num3){
             return num2;
         } else{
             return num3;
         }
     }
     if(num1<num2){
        if(num1>num3){
            return num1;
        }else if(num2<num3){
            return num2;
        } else{
            return num3;
        }
    }
    }

console.log(secondlargest(num1,num2,num3));
