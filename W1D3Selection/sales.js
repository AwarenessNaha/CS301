/**• Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive) • 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive) • 3% for sales above $500 */
const prompt = require("prompt-sync")();
let sales = +prompt("Please enter the sales here: ");
//let salaried = prompt("is this salaried employee?")
let salaried = true;
if(salaried){
    if(sales<300){
        console.log("no commission, sorry");
    } else if (sales<500){
        console.log("1% commission", .01* sales);
    } else {
        console.log("2% commission", .02* sales);
    }
}
else{
    if(sales<300){
        console.log("no commission, sorry");
    } else if (sales<500){
        console.log("1% commission", .02* sales);
    } else {
        console.log("2% commission", .03* sales);
    }
}