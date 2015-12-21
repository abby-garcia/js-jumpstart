Create the function "rightTriangle", it returns a string
represeniting a right Triangleusing " * ". 
The number argument represents the number of ros the triangle will have. 

function rightTriangle(rows){
	var finalString = "";

	for(var row = rows; row > 0; row--){
		for(var noStars = 0; noStars < row; noStars++){
			finalString = finalString + "*";

		}
	
		finalString += "\n";
	}
	return finalString;
}

rightTriangle(5);



finalString += "*".repeat(i);


//The \n character is used to find a newline character.
// you need to make it add a certain amount of stars

