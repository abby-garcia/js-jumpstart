// Using the JavaScript language, have the 
// function SimpleClockAngle(num) take the number being passed, 
// which will be a positive integer, 
// ranging from 1 to 59, representing where the minute hand on a 
// clock currently is, and return the angle formed by the 12 
// on a clock and the minute hand. 
// For example: if num is 15, then your program should 
// return 90 because it forms a 90 degree angle when 
// the minute hand is at the 15 minute mark. 
// If num is 25, then your program should return 150. 


function SimpleClockAngle(num){

return num * 6;

}

SimpleClockAngle(25);

//number will be 1 - 59; representing where the mintue hand is. 
// 15 = 90 degree
// ever minute is 59 seconds. 
//the clock goes around a full circle which is 360 degrees
// if you divid 150 by 25, you get 6. 
// if you divide 90 by 15, the answer is 6. 
// we now know that each second = 6 degrees. 