//Changing Guest List
var guest = ['Ayesha', 'Saira', 'Mehak'];
//guest.map((items)=> console.log(`Hello,${items} you have been invited for a dinner at my house.`))
console.log("".concat(guest[2], " would not able to come for a dinner"));
guest[2] = 'umaimah'; // new guest
console.log(guest);
guest.map(function (items) { return console.log("Dear, ".concat(items, " you have been invited for a dinner at my house.")); });
//console.log(`Dear ${guest[0]} you have been invited for a dinner at my house.`)
//console.log(`Dear ${guest[1]} you have been invited for a dinner at my house.`)
//console.log(`Dear ${guest[2]} you have been invited for a dinner at my house.`)
