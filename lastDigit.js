/*
Description

Create the function `lastDigit` that accepts two non-negative 
integer values and returns `true` if they have the same last digit, 
such as 27 and 57.

The function accepts two non-negative integer
 arguments and returns `true` or `false` if 
 they ahve the same last digit.

** Examples**

- INPUT: `lastDigit(22,32);`
- OUTPUT: `true`

- INPUT: `lastDigit(77, 999);`
- OUTPUT: `false`

- INPUT: `lastDigit(33,3);`
- OUTPUT: `true`
*/






function lastDigit(num1,num2){
    if(num1.toString()[num1.toString().length-1] ===  num2.toString()[num2.toString().length-1]){
        return true;
    }
    
    else{
        return false;
    }
    
}

lastDigit(500, 600);        


// Thought process:
// 1. In order to get the LAST digit, you need to convert the numbers into a string. 
// 2. To do this, you need to use the toString(); method. (first half)
// 3. Second Half - Now that you changed the first half to a string, you need to find 
// the length to that string and then take away one BECAUSE of the index numer.