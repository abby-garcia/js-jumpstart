// Reverse a String

// Create the function "reverseString" that reverses a string and returns the value of 
//the reversed string. 
//NOTE: Do NOT use the .reverse() method.

// INPUT: reverseString("hello");
// OUTPUT: "olleh";

//*** Write the reverseString Function below ***

function reverseString(word){
    var reverseWord = ""; // we need it hold the value of something, so we let it take the value of an empty string 
    for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];   // you are concatenating here. the empty string + the word index. 
    }
 console.log(reverseWord);    
}

reverseString("Hamilton");


//




// i--   i-=1
// reverseWord = reverseWord + word[i]
// reverseWord += word[i]
//FOR While loops you need a lot of variables, 


//Line 13, YOU want to start at (word.length-1)m which is equal to starting at the last letter. 
//The next part means you are starting at a higher number up to zero , which is the first letter of the word.
// i--, means you are going down one at a time. 
// you have to create a different variable 