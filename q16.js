//More Guests
var guest = ['Ayesha', 'Saira', 'Mehak'];
console.log("".concat(guest[2], " would not able to come for a dinner"));
guest[2] = 'umaimah'; // new guest
console.log(guest);
//guest.map((items)=> console.log(`Dear, ${items} you have been invited for a dinner at my house.`));
console.log("great news! i found a bigger table!");
// adding guest
guest.unshift("Huda"); //start
//console.log(guest);
guest.splice(guest.length / 2, 0, "zainab"); // middle
//console.log(guest);
guest.push("Amna"); // end
console.log(guest);
guest.map(function (items) { return console.log("Hello,".concat(items, " you have been invited for a dinner at my house.")); });
