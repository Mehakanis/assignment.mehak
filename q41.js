//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
var magiciansName = ['Harry Houdini', 'David Blaine', 'Doug Henning'];
function show_magicians(magiciansName) {
    magiciansName.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magiciansName);
