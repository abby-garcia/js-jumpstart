// First Factorial

// Using the JavaScript language, have the function firstFactorial(num) take the num parameter being passed and return the factorial of it.

// Example:

// - Input: firstFactorial(4);
// - Output: 24

//*** Write the firstFactorial Function below ***


function firstFactorial(num){
    function factorial(n){
        if(n === 0){
            return 1;
        }
        else{
            return factorial(n-1)*n;
        }
       
    }

     return num;
}

firstFactorial(4);