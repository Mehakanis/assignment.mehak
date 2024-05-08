// \t se se left or right mai whitespace ayega
// \n se up or down mai whitespace ayega
 
let someone:string = "\n\tMehakanis\t\n";
console.log(someone);
let someone1:string = "\nMehakanis\t";
console.log(someone1);
let someone2:string = "\tMehakanis\t";
console.log(someone2);
let someone3:string = "\tMehak\tanis";
console.log(someone3);
let someone4:string = "Mehak \n anis";
console.log(someone4);

let striping:string = someone1.trim()

console.log(striping)
