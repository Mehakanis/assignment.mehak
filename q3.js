//tsconfig.json tsc --init
//Store a person’s name in a variable, and 
//then print that person’s name in lowercase, uppercase, and titlecase.
var personName = 'Mehak anis';
console.log(personName.toLowerCase()); //lower case
console.log(personName.toUpperCase()); //upper case
//title case ke liye .charat use kerte hain or first alphabet ki value 
//daingy jo 0 hoti hai or phir .toupercase use karaingy take wo letter capital hojaye
// baki letters ko normally show kerwane ke liye slice use hoga.
console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 5), personName.charAt(6).toUpperCase() + personName.slice(7, 10));
console.log(personName.slice(1, 5));
