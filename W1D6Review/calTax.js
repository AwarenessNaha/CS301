/**Write a defining table and JavaScript program that asks user to input gross salary 
 * and shows the federal tax he/she need to pay for the year. Federal tax brackets are as follows.
1. Salary up to 20K, do not have to pay any federal tax.
2. Salary above 20K and up to 50K, 5% of the salary above 20K.
3. Salary above 50K needs to pay, 1500 plus 10% of the salary above 50K.
For e.g., if the gross salary is 70K that person will pay 1500+ 10% of 20K = $3500 in federal tax. */

"use strict";
 let prompt = require("prompt-sync")();
 let salary = +prompt("Enter your salary here ");
 
  function calTax(salary){
 if(salary<=20000){
     return 0;
 } else if(salary<=50000){
     return (salary-20000)*0.05;
 }else {
     return 1500 + 0.1*(salary-50000);
 }
 }
 console.log("Your federal tax is  " + calTax(salary));
