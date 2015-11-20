//Write a function to convert a variable name 
//from under_score format to camelCase.

//Make sure you support an unlimited number of underscores in the input!


/* 
    under_score to camelCase
*/

function underToCamel(underName) {

	
	for(var i = 0; i <underName.length;i++){
		if(underName[i]=== "_"){
			console.log(underName[i]);
		}
	}


    
}

/* tests */

//underToCamel("first_name"); // should return firstName
//underToCamel("income_tax"); // should return incomeTax



//when you find the an underscore, delete the underscore and then make the next word capital


//STEPS

//find an _
// remove _ and make next char captial 



// function underToCamel(underName) {

	
// 	for(var i = 0; i <underName.length;i++){
// 		console.log(underName[i]);
// 	}


    
// }

// THIS IS TO TELL ALL THE LETTERS


//To find an underscore, you can use nested for loops and if/else sttaments






