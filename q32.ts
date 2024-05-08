//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone 
//has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of 
//the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been 
//used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
// not be accepted.
let current_users:string[] = ['peter','harry','eric','john','ayan'];
let new_users:string[] = ['Nick','Daniel','Potter','John','ayan'];
new_users.forEach(newuser => {
    if(current_users.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase())) {
        console.log (`${newuser} will need to enter a new username.`);
    } else {
        console.log(`${newuser} is available.`);
    }
})
