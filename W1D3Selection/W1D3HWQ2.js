/**Write a program that reads from the keyboard a student's name and number of completed 
 * credits and then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60 c. "Junior" if 60<=credits<90
d. "Senior" if credits>90
 * 
 */
"use strict";
let prompt= require('prompt-sync')();
let name = prompt("Enter Student's name: ");
const credits = +prompt("Enter the Student's completed credits: ");
if(credits>0 && credits<30){
    console.log(name + "  Freshman");
} else if(credits>=30 && credits<60){
    console.log( name+ "  Sophomore"); 
    }else if(credits>=60 && credits<90){
        console.log(name + "  Junior");  
    } else if(credits>=90){
        console.log(name+  "  " + " is Senior");  
    }