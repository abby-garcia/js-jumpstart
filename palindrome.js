// Have the function palindrome(str) take the str parameter being passed and return the string `"true"` 
//if the parameter is a palindrome, (the string is the same forward as it is backward) 
//otherwise return the string `"false"`. 

// ** Punctuation and numbers will not be part of the string. **

// - INPUT: `palindrome("racecar");`
// - OUTPUT: `"true"`


// - INPUT: `palindrome("animal");`
// - OUTPUT: `"false"`
function palindrome(str){
    var reversedString="";
    str = str.toLowerCase();
    for(var length = str.length - 1; length >= 0; length-- ){
        reversedString += str[length];
    }
    if(reversedString ===  str){
        return true;
    }
    return false;
    
}

palindrome("racecar");




//so it will be true if the word
// you need to make sure that everything is lower case.
//then you will have to create your for loop that reverse the whole problem, just like in reverse String.
