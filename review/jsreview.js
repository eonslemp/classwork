/*
1.  declare a variable with const, var, let then name the vairable and use '=' to assign it a value
2.  you can just assign a new value to the variable with '='
3.  you van take the new name and assign it the name of the vairable you want to replicate
4.  declare means to create a function in javascript, assign is link a value with tag to identify it,
define is the articulation of the logic of a process.
5.  psuedocode is the diagramming of the logic of some objective you want to achieve in code
6.  i would go 50/50 on the thinking to executing ratio

*/
// B strings
let firstVariable;
firstVariable = 'Hello World';
firstVaraible = 78;
// console.log(firstVariable)
let secondVariable = firstVariable;
console.log(secondVariable)
secondVariable = 'any string';
console.log(secondVariable)
console.log(firstVariable)
// the value of first variable is 'hello world'  but i thought it would be 78'
let myName = 'Eon'
let greet = 'hello my name is '
let concatName = greet + myName;
console.log(concatName)

// c.  booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'kevin';

console.log(a != b)
console.log(c != d)
console.log('Name' == 'Name')

console.log(true || false)
console.log(false || false || false || false || false || true)
console.log(false == false)
console.log(e === 'kevin')
console.log(a+b ==c)
console.log(a * a === d)
console.log(48 == '48')
