// Using the JavaScript language, have the 
// function primeTime(num) take the 
// num parameter being passed and 
// return true if the parameter is a prime number, 
// otherwise return false.



function isPrime(num){
  for(var i=2; i < num; i++){
 	if(num%i === 0){
   		return false;
 	}
  }
  return true;
}

//isPrime();
//
