/*
Description

Create the function askPolitely that accepts a sentence 
as an argument. If the last character of the sentence is 
a question mark, then make sure the question ends with 
the word "please".

If the sentence is not a question, then return the 
inputted string without modification. If the sentence 
is a question, but already has a please, then also
return the input without modification.

**Examples**

askPolitely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
// returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
// returns "My name is Grace Hopper."
*/


// find a ? at the end of the string
// if the string ends please?
// and if it doesn't





function askPolitely(sentence){
    if(sentence.slice(-1) === "?"){
        if(sentence.slice(-7) === "please?"){
            return sentence;
        }
        else{
            return sentence.slice(0, -1) + "please?";
        }
    }
    
}



//first thing, find out if last character has a question mark
// you you use negative number, you are now counting by character vs by index
// you could use 
//when using slice, you count indexes at ZERO, lengths at 1. 
//THE NEXT STEP, is to decided to see if Pleaseis at the
// end of the sentence. 
// NOW, we need to attach "please" to sentences that don't have please
//    - (0,-1) <---DOES NOT INCLUDE -1. ) and everything UP TO -1. 




/* TEST CASES */

console.log(askPolitely("May I borrow your pencil?"));
// should return "May I borrow your pencil please?"

console.log(askPolitely("May I ask a question please?"));
// should return "May I ask a question please?"

console.log(askPolitely("My name is Grace Hopper."));
// should return "My name is Grace Hopper."
