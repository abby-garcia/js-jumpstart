/* 

Description

Create the function `areYouPlayingBanjo`.
 If your name starts with the letter "S" or "s", you are playing Banjo!

**Examples**

- INPUT: `areYouPlayingBanjo("Nimit")`
- OUTPUT: `"Nimit does not play banjo!";`

- INPUT: `areYouPlayingBanjo("Scott");`
- OUTPUT: `"Scott plays banjo!";

*/

function areYouPlayingBanjo(name){
	if(name[0] === "S" || name[0] === "s"){
		return name + " plays banjo!"
	}
	else{
		return name + " does not play banjo!"
	}
    
}

areYouPlayingBanjo('Bob');
// areYouPlayingBanjo('Sammy');




//Comments
//DRY- do not repeat yourself 
// .UpperCase() === "S"    <--- that will make first character an upper case string. but you will
// use less code  --- if(name[0].toUpperCase() === 's')

