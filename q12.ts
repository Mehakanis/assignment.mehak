//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names:string[] =['Ayesha','Aimen','Zainab','Huda','Saira']
// console.log('Hey',names[0],'How you doing?');
// console.log('Hey',names[1],'How you doing?');
// console.log('Hey',names[2], 'How you doing?');
// console.log('Hey',names[3],'How you doing?');
// console.log('Hey',names[4],'How you doing?');

for(let i=0; i<names.length; i++){ // short form , i++ mtlb loop continue rahe
    console.log(`Hey,${names[i]} How you doing?`)
}