//If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let guest = ['Ayesha', 'Saira', 'Mehak'];
//console.log(`Dear ${guest[0]} you have been invited for a dinner at my house.`)
//console.log(`Dear ${guest[1]} you have been invited for a dinner at my house.`)
//console.log(`Dear ${guest[2]} you have been invited for a dinner at my house.`)
// short form
guest.map(function (items) { return console.log("Hello,".concat(items, " you have been invited for a dinner at my house.")); });
