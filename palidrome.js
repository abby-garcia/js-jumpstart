/*
 * Complete the function below.
 */
function palindrome(str) {
    var reverseStr="";
    var str = str.toLowerCase();
    
    for(var i = str.length - 1; i >= 0; i--){
        reverseStr+=str[i];
    }    
    
    if(reverseStr === str){
        return true;
    }
    else{
        return false;
    }
}        
        
        
palindrome("racecar");


//we need to make a for loop. 
//ALWAYS LOWER CASE THINGS!
// this for loop will go thru every letter of the string and go backwards. 
//when you loop, you need to concatenate things together 
// then we will see if this for loops is equal to the original string. 