/**Write a program that calculates down payment for a home loan based on following rules.
 * Cost of House Down Payment
  
$0 to less than 50K
5% of the cost
$50K to less than 100K
$1000 + 10% of (cost - $50K)
$100K to less than 200K
$2000 + 15% of (cost - $100K)
$200K and above
 $5000 + 10% 
 */
"use strict";
let prompt= require('prompt-sync')();
let costOfHouse = prompt("Enter Cost of House: ");
if(costOfHouse<50000){
    console.log("down payment is: ", costOfHouse*0.05);
}else if(costOfHouse<100000){
    console.log("down payment is: ", costOfHouse*0.10);
    }else if(costOfHouse<200000){
        console.log("down payment is: ", costOfHouse*0.15);
        }else if(costOfHouse>=200000){
            console.log("down payment is: ", costOfHouse*0.10+5000);
        }else{
            console.log("It is not a house!")
        }