/** Make a defining table and program to print out the balance of a savings account
 *  that compounds interest monthly. Prompt the user for the initial amount
• annual interest rate number of years to compound 
input: initial amount, annual interest rate, number of years to compound
processing: initial amount * annual interest rate * number of years to compound
output: the balance of a savings account

*/
"use strict";
let prompt= require('prompt-sync')();
let initialAmount = +prompt("enter initial amount ");
let annualInterestRate = +prompt("enter annual interest rate in percetage");
let numberOfYearsToCompound = +prompt("enter number of years to compound ");

for(let i=0; i<=numberOfYearsToCompound*12;i++){

    console.log("Account Balance of month of " + i + "  is  " + initialAmount*(1+i*annualInterestRate/(100*12)))
}

const monthlyRate =annualInterestRate/12;
const months = numberOfYearsToCompound*12;
let balance = initialAmount;
for(let i=1; i<=months; i++){
    balance = (balance + balance*monthlyRate);
   //onsole.log(balance)
}
console.log("final balance is ",  balance);