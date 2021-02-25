/**A university library that loans book to students, faculty, and the public has 
 * a written policy that determines how long someone may borrow a book before 
 * it is due, which is shown on the table below. Write a defining table 
 * and JavaScript program that determines how long a person may borrow a book. */

"use strict";
let prompt= require('prompt-sync')();
let status = prompt("Enter your status type(student or faculty or public): ");
let  NumberOfBooksOverdue= prompt("Enter your Number of books Overdue: ");
if(status==="student"){
    if(NumberOfBooksOverdue==='0'){
        console.log("Loan duration is 6 weeks" );
    } else if(NumberOfBooksOverdue<3){
        console.log("Loan duration is 4 weeks" );
        } else if(NumberOfBooksOverdue>=3){
            console.log("Loan duration is 2 weeks" );
        }
} else if(status==="faculty"){
    if(NumberOfBooksOverdue==="0"){
        console.log("Loan duration is 12 weeks" );
    } else if(NumberOfBooksOverdue<3){
        console.log("Loan duration is 10 weeks" );
        } else if(NumberOfBooksOverdue>=3){
            console.log("Loan duration is 8 weeks" );
        }
    } else if(status==="public"){
        if(NumberOfBooksOverdue==="0"){
            console.log("Loan duration is 4 weeks" );
        } else if(NumberOfBooksOverdue<3){
            console.log("Loan duration is 3 weeks" );
            } else if(NumberOfBooksOverdue>=3){
                console.log("Loan duration is 2 weeks" );
            }
        }