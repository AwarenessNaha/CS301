/**4. Write a defining table and JavaScript program to Display Fibonacci series up 
 * to N terms. N being positive integer from user input. The Fibonacci series is a 
 * sequence such that each number is the sum of the two preceding ones, startingfrom0and1.
 * Thatis, fib(0)=0,fib(1)=1,fib(n)=fib(n–1)+fib(n–2)forn>1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... */

/** Defining Table 
 * Input: N terms of Fibonacci series number
 * Output: Fibonacci series numbers
 * processing:
 * 1) set n1=0, n2=1; n3=0;
 * for loop N times. 
 * 2) if N==1, print n1, if N==2, print n2;
 * 3) if N>=3, n3=n1+n2, print n3;
 * 4) n1=n2, n2=n3;
 * 5) let result = null; 
 * 6) result = result + " " + n3.
 * 7 print result.
 
*/

"use strict";
let prompt= require('prompt-sync')();
let N = +prompt("enter Fibonacci series number ");
let n1=0;
let n2=1;
let n3=0;
let fibSeries=null;
for(let i=0; i<N;i++){
    if(i===0){
        console.log(0 + " ");
        fibSeries = 0 + " ";
    }if(i===1){
            console.log(1 + " ");
            fibSeries = fibSeries + " " +n2;
    }
    n3 = n1+n2;
    console.log(n3);
    fibSeries = fibSeries + " " +n3;
    n1 = n2;
    n2 = n3;
    }
    console.log(fibSeries);

