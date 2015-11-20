// Using the JavaScript language, have the function primeTime(num) 
//take the num parameter being passed and return 
//the string true if the parameter is a prime number, 
//otherwise return the string false. 
//The range will be between 1 and 2^16. 


function primeTime(num){
    
    for(var i = 2 ; i < num; i++){
        if( num%i===0){
            return false;
        }
    }    
        return true;
}
primeTime(11);


//if the numer is divisible by any number other than itself or 1,
// it is NOT prime. 

//we need to let able to go thru  numbers 1-12 