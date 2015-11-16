// **Create a For-Loop that skips a pass and 
//breaks out of the loop before it finishes.**

// Create a For-Loop that starts at 1 and ends at 10.  Skip the 5th pass of the loop 
//so it doesn't output the number `5`(look into the continue keyword).  
//Furthermore, when your loop reaches the number 8 look to break the loop so it stops the loop and ends at 8 
//(look into the break keyword,
//the number 8 should not be outputted).


for(var i = 0; i <= 10; i++){
    if(i === 5){
        continue;
    }
    if(i === 8){
        break;
    }
 console.log(i);