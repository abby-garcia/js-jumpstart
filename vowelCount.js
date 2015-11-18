// Vowel Count

// Using the Javascript language, have a function
//"vowelCount(str)" take the str parameter
//and return the number of vowels the string 
//contains (ie. "All Cows eat grass" would return 5). 
//Do not count y as a vowel for this challenge.

// Example:
// Input: vowelCount("Good Job");
// Output: 3

//*** Write the vowelCount Function below ***

//The way they like doing it


function vowelCounts(str){
	var lowerStr = str.toLowerCase();

	for(var i = 0; i < lowerStr.length; i++){
		lowerStr[i];

	}



}


vowelCounts("Good job!");








// you need to find the vowels in a string
//create a loop to be able to find certain letters within a string
// Step 1 - create a variable that makes all letters lower case
//Step 2 - create a for loop.
//Step 3 - console log line 22 to make sure that it is sending you the right string. 


//SHORT WAY


// function countVowels(subject) {
//     return subject.match(/[aeiou]/gi).length;
// }


// countVowels("Elder Price.");


// so we need to find a way to count ONLY the vowels. That's not too bad. 
//How do we get the w
//so you need to split the word, and if any of the words is equal to
// a e i o u, you count it?
//how do you count?