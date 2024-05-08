//Think of at least five places in the world you’d like to visit.
let places: string[] =['Saudi Arabia','Maldives','London', 'Turkey','Dubai']
//console.log("original order:",places);

console.log("alphabatical order:",[...places].sort())
console.log("original order:",places);
console.log("Reverse alphabatical order:",[...places].sort().reverse());
console.log("original order:",places);

places.reverse();
console.log("reverse order places:",places);  // without alphabatical order

places.reverse();
console.log("Original order places:",places); // without alphabatical order

places.sort();
console.log("alphabatical order:",places);

places.reverse();
console.log("reverse alphabatical order:", places);

