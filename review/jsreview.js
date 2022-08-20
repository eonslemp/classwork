/*I. variable and datatypes
1.  declare a variable with const, var, let then name the vairable and use '=' to assign it a value
2.  you can just assign a new value to the variable with '='
3.  you van take the new name and assign it the name of the vairable you want to replicate
4.  declare means to create a function in javascript, assign is link a value with tag to identify it,
define is the articulation of the logic of a process.
5.  psuedocode is the diagramming of the logic of some objective you want to achieve in code
6.  i would go 50/50 on the thinking to executing ratio

*/
// // B strings
// let firstVariable;
// firstVariable = 'Hello World';
// firstVaraible = 78;
// // console.log(firstVariable)
// let secondVariable = firstVariable;
// console.log(secondVariable)
// secondVariable = 'any string';
// console.log(secondVariable)
// console.log(firstVariable)
// // the value of first variable is 'hello world'  but i thought it would be 78'
// let myName = 'Eon'
// let greet = 'hello my name is '
// let concatName = greet + myName;
// console.log(concatName)

// // c.  booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'kevin';

// console.log(a < b)
// console.log(c > d)
// console.log('Name' == 'Name')

// console.log(true || false)
// console.log(false || false || false || false || false || true)
// console.log(false == false)
// console.log(e === 'kevin')
// console.log(a+b ==c)
// console.log(a * a === d)
// console.log(48 == '48')

// // D the farm
// let animal = 'cow'
// if (animal == 'cow'){
//     console.log('MOoooo ')
// }else{console.log('hey! you are not a cow ')}

// drivers ed
// let age;

// if(age >= 16){
//     console.log('here are the keys')
// }else{'sorry you are too young'}

// II loops

// A. 
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }
// for(let i = 12; i <= 4000;i+=3){
//     console.log(i)
// }

// for(let i = 1; i <= 100; i++){
//     if(i%2 == 0){
//         console.log(i+"<-- this number is even steven")
//     }else{console.log(i)}
// }

// for(let i = 1; i <= 100; i++){
//     if(i%5==0){
//         console.log('i found a '+i+" high five!")
//     }else if(i%3 == 0){
//         console.log('i found a ' +i+" three is a crowd")
//     }
// }

// savings account
// let bankAccount =0;
// for (let i = 0; i <= 10; i++){
//     bankAccount += i;
// }
// console.log(bankAccount)

// let bankAccount_2 = 0;
// for (let i = 0; i <= 100; i++){
//     bankAccount_2 += i;
// }
// bankAccount_2 = bankAccount_2*2
// console.log(bankAccount_2)

// III arrays and control flow
/**
 * 1.  elements
 * 2.  no
 * 3.  a vector
 */

const quotes = ['the height of generalship is not to fight 1000 battle and win 1000 battles, but to not have to fight',
 'always newver forget to make sure your optics are clean','discipline equals freedom']
const randomThings = [1, 10, 'Hello', true]
// console.log(randomThings[0])

randomThings.splice(2,1, "world")
// console.log(randomThings)

// D change value
const ourClass = ['salty', 'zoom', 'sardine', 'slack', 'github'];
ourClass[2];

ourClass.splice(4,1,'octocat');
ourClass.push('cloud city');
// console.log(ourClass)

// E mix it up
const myArray = [5, 10, 500, 20];
myArray.push('aegon', 'Eon')
myArray.shift()
myArray.unshift('bob marley')
myArray.splice(4,1)
myArray.reverse()
// console.log(myArray)

// F biggie smalls
const x = 13
// if(x < 100){
//     console.log('little number')
// } else {console.log('big number')}

// G monkey in the middle
// let y = 9
// if(y < 5){
//     console.log('little number')
// }else if(y > 10){
//     console.log('big number')
// }else{console.log('monkey')}

// H what is in your closet 

const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshmallow peeps'
];

const thomsCloset = [[
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up',
    ],[
    'grey jeans',
    'icons',
    "pj's"
],[
    'wool mittens',
    'wool scarf',
    'raybans'
]
];

// console.log('kristin is rocking that ' +kristynsCloset[2] + ' today!')
kristynsCloset.splice(6,0,'stained knit hat')
// console.log(kristynsCloset)
// console.log('thom is one sexy bitch in that ' + thomsCloset[0][0]+ ', ' + thomsCloset[1][1],', ' + 'and ' + thomsCloset[2][2])

thomsCloset[1].splice(2,1, 'footie pajamas')
// console.log(thomsCloset[1])
 
// functions 
// A.... says to skip
// B  printCool


const arrowCool = (name) => {
    console.log(name + " is like totally cool because he is always writing sick arrow functions")
}
// arrowCool('Eon')
const calculateCube = function(number){
    return Math.pow(number,3);
}
// console.log(calculateCube(5))

function isVowel(letter){
    // if(letter.toLowerCase() == 'a'||'e'||'i'||'o'||'u'){
    //     return 'is a vowel'
    // }else{
    //     return 'not a vowel'
    // }
    isa = 'is a vowel';
    switch(letter.toLowerCase()){
        
        case 'a': return isa;
            break;
        case 'e': return isa;
            break;
        case 'i': return isa;
            break;
        case 'o': return isa;
            break;
        case 'u': return isa;
            break;
        default: return 'not vowel';

    }
}
// console.log(isVowel('g'))

function getTwoLengths(str1, str2){
    const strArray = new Array();
    strArray.push(str1.length, str2.length)
    return strArray
}

// console.log(getTwoLengths('hello','world'))

function getMultipleLengths(string_arr){
    const length_arr = new Array();
    for(let str of string_arr){
        length_arr.push(str.length)
    }
    return length_arr
}

test_array = ['steven', 'the', 'donkey', 'is', 'a', 'silly', 'name', 'for', 'a', 'donkey'];
// console.log(getMultipleLengths(test_array))

function maxOfThree(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1
    } else if(num2 >= num3){
        return num2
    } else {
        return num3
    }


}
// console.log(maxOfThree(5,4,3))

// maxArray = [1,2,3];
// console.log(Math.max(maxArray))

function printLongestWord(strArray){
    let lengthArray = new Array(); 
    for(i = 0; i < strArray.length; i++){
        lengthArray.push(strArray[i].length);
    }
    // indexOf(Math.max.apply(null, lengthArray))
    let index = lengthArray.indexOf(Math.max.apply(null, lengthArray))
    return strArray[index]
}

console.log(printLongestWord(test_array))