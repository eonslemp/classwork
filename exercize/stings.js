
// let firstName = 'Leroy Jenkins';
// let splitString = firstName.split(" ");
// joinedString = splitString.join(' ')
// console.log(joinedString)
// console.log(splitString)

// for (let i = 0; i< firstName.length; i++){
//     console.log(firstName.charAt(i).split(' '))
// }

let arr = [3, 10, 23, 78, 19];

// let str = 'leroy';
arr.splice(1,2)
console.log(arr)
str = 'blueberry apple cherry kiwi banana orange pomegranite'
fruit_arr = str.split(' ')
console.log(fruit_arr)
arr.splice(1,0, 'blueberry')
// console.log(arr)
// console.log(arr.join(' '))
fruit_2 = [...str.split(' ')]
console.log(fruit_2)
console.log(fruit_2.slice(1, 4))
console.log(fruit_2)
