//o Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message
// is printed.

let userName:string[] = []
userName.forEach(userName => {
    if(userName == 'Admin'){
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${userName}, thank you for logging in again.`)
    }
})
if (userName.length == 0){
console.log('We need to find some users!')
} else {
    // greet user
}