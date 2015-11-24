/*
 * Complete the function below.
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



//we need to make a for loop. 
//ALWAYS LOWER CASE THINGS!
// this for loop will go thru every letter of the string and go backwards. 
//when you loop, you need to concatenate things together 
// then we will see if this for loops is equal to the original string. 