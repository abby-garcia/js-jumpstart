// Define method called divisor_match that takes three parameters, 
// divisor_array an Array and low and high will be intergers:

// function divisor_match(divisor_array, low, high)


// The divisor_check method should:
// - Print all numbers from low to high 
// - if the any numbers beings printed is divisible  by any divisor in divisor_array, 
// print the number + the word "one_match".

// - If the number being printed is divisible by ALL the numbers in the arry, it should 
// output the number + "all_match".

// Sample Outpuy
// If the function call were divisor_match([2,3], 1,7), 
// the printed output would be:

// 1.
// 2.one_match
// 3.one_match
// 4.one_match
// 5.
// 6.all_match



function divisor_match( divisor_array, low, high){

	for (var i = low; i <= high ;i++ ) {
		
		if (i % divisor_array[0] === 0  && i % divisor_array[1] === 0){
			    console.log( i + " all_match");
			    }
		else if (i % divisor_array[0] === 0  || i % divisor_array[1] === 0 ){
			console.log(i + " one_match");
		}
		
		else {
			console.log(i);
		}	    

	}

}

divisor_match([2,3],1,7);


// 		if(i % divisor_array[k] === 0 {
// 			console.log(i + " one_match");
// 			}
// 		}






	
// 		if(low % divisor_array[0] === 0  || low % divisor_array[1] === 0 ){
// 			console.log(low + " one_match");
// 			    if(low % divisor_array[0] === 0  && low % divisor_array[1] === 0){
// 			    console.log( low + " all_match");
// 			    }
// 		}	    
// 		    else (high % divisor_array[0] === 0  || high % divisor_array[1] === 0 ){
// 			    console.log(high + " one_match");
// 		    	    if(high % divisor_array[0] === 0  && high % divisor_array[1] === 0){
// 			            console.log( high + "all_match");
// 					}
// 			}	

// 	}
// }			




//you need to create a for loop will go thru the unmbers within int the function. 
//print numbers low to high
//if a number being printed is divisibly by any of the divisor_arry, print the number + "one_mathc
