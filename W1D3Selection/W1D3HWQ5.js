/**Write a defining table and then a program that determines what time a child 
 * should go to bed. Your program must read a child’s age and the season 
 * (winter, spring, summer, or fall) 
 * from the keyboard and output the child’s bedtime according to this table: */
"use strict";
let prompt= require('prompt-sync')();
let childAge = prompt("Enter child's age: ");
let season = prompt("Enter season: ");
if(childAge<=5){
    if(season==="summer"|| season==="fall"){
        console.log("suggested bed time is 8:30PM.")
    }else{
            console.log("suggested bed time is 8:00PM.")
        }
} else if(childAge<=12){
    if(season==="summer"){
            console.log("suggested bed time is 9:30PM.")
        }else{
                console.log("suggested bed time is 8:30PM.")
            }
            
}else {
    if(season==="summer"){
                console.log("suggested bed time is 10:30PM.")
            }else{
                    console.log("suggested bed time is 9:30PM.")
                }
            }
