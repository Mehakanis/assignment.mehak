//Changing Guest List

let guest:string[] = ['Ayesha','Saira','Mehak']
//guest.map((items)=> console.log(`Hello,${items} you have been invited for a dinner at my house.`))

console.log(`${guest[2]} would not able to come for a dinner`);

guest[2] = 'umaimah' // new guest
console.log(guest);
guest.map((items)=> console.log(`Dear, ${items} you have been invited for a dinner at my house.`));

