// You're given two interger ranges x and y as (x1, x2) and (y1,y2). An interger range is a list of numbers. 
// The x ranger includes every number from x1 to x2 ( including x2). Similary, the y range includes ever number
// from y1 to y2. 

// Return the sum of the numers that only exisit in both ranges. 

// The fuction call of sum_of_overlap(1, 10, 5, 20)  returns 45.

// Explanation: 
// To get the answer 45, we summed 5, 6, 7, 8, 9, 10 since those numbers exisit in both ranges (1,10)
// and (5, 20).





this may be a nested for loop question. 



function intergerCombination(x1,x2, y1, y2){
	var newNumber = 0;

	for(var i = x1; i <= x2; i++){
		for(var j = y1; j <= y2; j++){
			if( i === j){
				newNumber = newNumber +j;
			}
		}
	}
	return newNumber;
}




intergerCombination(1, 10, 5, 20);


// //this maybe nested for loops
// // if any of the in between numbers match, we have to add them together
// we have to figure out which numbers overlap 





