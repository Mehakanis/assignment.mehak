//More Conditional Tests:
// equality with strings
var apple = 'apple';
var Apple = 'Apple';
console.log("testing equality with strings:");
console.log(apple == apple); // true , stings are equal
console.log(apple == Apple); // false, string are not equal
// inequality with strings
console.log("testing inequality with strings:");
console.log(apple !== apple); // false
console.log(apple !== Apple); // TRUE
// using lower case function
console.log("testing lower case:");
console.log(apple.toLowerCase() == apple); // true
console.log(apple.toLowerCase() == Apple); // FALSE
// numerical test
console.log("numerical test:");
console.log(10 == 10); // true
console.log(10 !== 10); // false
console.log(10 > 1); // true
console.log(10 < 1); // false
console.log(10 <= 10); // true
console.log(10 >= 12); // false
// using and & or operators
console.log('"AND" and "OR" operators:');
console.log(true && false); // false
console.log(true || false); //true
console.log(Apple == Apple && apple == Apple); // FALSE
console.log(apple == apple || Apple == apple); // true , or ka mtlb koi ek shi ho
//test whether an item is in a array
var fruit = ['apple', 'mango', 'banana'];
console.log('is apple in fruits?');
console.log(fruit.indexOf('apple') !== -1); // true
//test whether an item is not in a array
console.log('is cherry is in fruit array?');
console.log(fruit.indexOf('cherry') !== -1); // false
