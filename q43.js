//Unchanged Magicians: Start with your work from Exercise 40. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original
//array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.
var magicians = ["Harry Houdini", "David Blaine", "Doug Henning"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push("".concat(magicians, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // CREATS A NEW MODIFIED ARRAY
console.log("Original magiciansName:");
show_magicians(magicians); // shows original names
console.log("Great magiciansName"); // shows modified names
show_magicians(greatMagicians); // shows modified names
