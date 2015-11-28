



function getHeight(cycles) {
    var height = 1; // height is always changing, so this isn't right. 
    var monsoonCycle = height *2;
    var summerCycle = height + 1;
    
    for(var i = 0 ;  i < cycles; i++){
        height = monsoonCycle + summerCycle
    }  
    return height;