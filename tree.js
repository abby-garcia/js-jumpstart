/*
 * Complete the function below.
 */
function getHeight(numOfAllCycles) {
    debugger;
    var height = 1; // height is always changing, so this isn't right. 

    
    for(var cycle = 1 ; cycle <= numOfAllCycles; cycle++){
    
        if( cycle % 2 === 0 ){
            
        height = height + 1;
        }
        else{
            height = height *2;
        }

        }  
    return height;
 
}             

    

getHeight(3);

// for even numers = 1 meter ( summer cycle)
//for odd numbers = double (monsoon cycle )


//first meter is given 
// first cycle = height *2
//second cycle = height + 1
//third cycle = height * 2


//during monsonon, tree doubles height
//during summer, tree grows 1 meter
//the tree was JUST planted and it is 1 meter high 
//the cycles alternate 
//You want to find HEight of 3 after a certain amount of cycles
