//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
//to see that the list has actually been modified.

let magiciansName:string[] = ['Harry Houdini','David Blaine','Doug Henning'];

function show_magicians(magiciansName:string []) {
magiciansName.forEach(magician => { console.log(magician)
});
};
function make_great(magiciansName:string[]) {
    for(let i=0; i<magiciansName.length; i++){
        magiciansName[i] = magiciansName[i] + ' the Great';
    }
    
}
make_great(magiciansName);
show_magicians(magiciansName);
