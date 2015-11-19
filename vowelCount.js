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


function vowelCount(word){
	var lowerWord = word.toLowerCase();
	var vowels = ['a', 'e', 'i', 'o' 'u'];
	var counter = 0;
	for(var i =0; i < lowerWord.length; i++){
		if(vowels.indexOf(lowerWord[i]) > -1 ){
			counter ++;
		}
	}



	



}



//NOTES
//1.  one of the first things you do in a problem like this is makeing sure you lowercase everything.
//2. identify the vowels
//3. create a counter and it's start number, so it can increase every time it finds a vowle.
//4. anytime you are looking for a letter within anything, you need to have a for loop. 
//5. create you typical for loop
//6. in line 23, you are saying, IF the index of a certain letter is greter than -1, it's a vowel.
//7. Why is that? when -1 appears when doing an "indexOf", it means that the numer DOES NOT EXISIT. 
//8. The number EXISIT if it is ZERO and UP. 
//9. Line 24, tells you to increase the counter
