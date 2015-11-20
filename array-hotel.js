/*
The Array Hotel - Instructions

In this exercise, we'll be using an array to manage the occupancy
of a hotel called The Array Hotel.

Each room in the hotel will be represented with a "vacant" 
or "occupied" string in the array. The index of the element
is the room number. For example, for a hotel with an 
occupancy array of ["occupied", "vacant", "occupied", "vacant"],
we can determine that Rooms 0 and 2 are occupied 
and Rooms 1 and 3 are free.

Your job is to write a function called findVacantRooms 
to help the owner of the hotel find which rooms are 
vacant. return an array of the room numbers that are vacant.

If all rooms are occupied, return "No Vacancy"; 

**************************/

function findVacantRooms(rooms) {

    
}


/******** Tests *******/

console.log(findVacantRooms(["occupied", "vacant", "occupied", "vacant"]));
// should return [1,3]

console.log(findVacantRooms(["occupied", "occupied", "occupied"]));
// should return "No Vacancy"

