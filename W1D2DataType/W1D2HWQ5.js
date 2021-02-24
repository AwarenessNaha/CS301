/*  5. When you exercise to strengthen your heart, you should maintain your heart rate
 within a range. To find that range, subtract your age from 220. This difference
  is your maximum heart rate per minute. Your heart simply will not beat faster 
  than this maximum (220 − age). When exercising to strengthen your heart,
   you should keep your heart rate between 65% and 85% of your heart’s maximum.
    Write a JavaScript program that asks for a person’s age and computes and outputs
     the slowest and fastest rates necessary to strengthen his heart. */

     "use strict"; 
     let prompt = require('prompt-sync')();
     const  age= prompt('Enter your age here: ');
     let  lowRange = (220-age)/0.65;
     lowRange = Math.floor(lowRange);
     let highRange = (220-age)/0.85;
     highRange = Math.floor(highRange);
     console.log('Your ideal heart rates range is between' + lowRange + 'and' + highRange);   