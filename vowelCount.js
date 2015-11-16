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

function countVowels(subject) {
    return subject.match(/[aeiou]/gi).length;
}


countVowels("Hello, my name is Elder Price.");


// so we need to find a way to count ONLY the vowels. That's not too bad. 
//How do we get the w
//so you need to split the word, and if any of the words is equal to
// a e i o u, you count it?
//how do you count?