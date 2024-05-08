//Shrinking Guest List:
var guest = ['Ayesha', 'Saira', 'Mehak'];
console.log("".concat(guest[2], " would not able to come for a dinner"));
guest[2] = 'umaimah'; // new guest
console.log(guest);
console.log("great news! i found a bigger table!");
// adding guest
guest.unshift("Huda"); //start
guest.splice(guest.length / 2, 0, "zainab"); // middle
guest.push("Amna"); // end
console.log(guest);
//guest.map((items)=> console.log(`Hello,${items} you have been invited for a dinner at my house.`))
console.log("sorry guys, now i can invite only 2 people");
// removing guests
guest.pop(); // by this method only one guest will be removed
console.log(guest);
// short form for removing guests
while (guest.length > 2) { // is method se hamne lenght batadi keh sirf 2 rakhne hain baki ko remove kerna hai
    var removeGuest = guest.pop();
    console.log("sorry, ".concat(removeGuest, ", I can't invite you to dinner."));
}
console.log(guest);
guest.map(function (items) { return console.log("Dear,".concat(items, " you are still invited to dinner.")); });
//removing all
guest.splice(0, guest.length);
console.log(guest);
