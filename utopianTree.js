function getHeight(cycles) {
    var height = 1;
    for(var i = 1; i <= cycles; i++ ){
        if( i % 2 === 0){
            heigh = height + 1; 
        }
        else{
           height = height * 2 
           
        }
        
        
    }
    
}

getHeight(3);

