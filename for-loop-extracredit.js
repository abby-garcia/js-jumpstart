// **Use a "For-Loop" that increments the amount of characters in a string**


// Have your "For-Loops" counter be a letter.  Add the same letter character 
//until you have 5 letters on your final string.  Analyze the example case below:

// Example:

// Your loop should concatenate(add) an "L" to your string each pass

// "L"
// "LL"
// "LLL"
// "LLLL"
// "LLLLL"

for(var string = "L"; string.length <= 5; string+= "L"){
    console.log(string);
    
}