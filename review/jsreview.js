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
 'always never forget to make sure your optics are clean','discipline equals freedom']
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


const arrowCool = name => {
    console.log(name + " is like totally cool because he is always writing sick arrow functions");
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
    isaV = 'is a vowel';
    switch(letter.toLowerCase()){
        
        case 'a': return isaV;
            break;
        case 'e': return isaV;
            break;
        case 'i': return isaV;
            break;
        case 'o': return isaV;
            break;
        case 'u': return isaV;
            break;
        default: return 'not a vowel';

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

// console.log(printLongestWord(test_array))

// // Objects
let user = {
    name: "jimbob horkhiemer",
    email: "JamesRobertsHorkhiemrIV@proton.me",
    age:  15,
    purchased: []
    }


  
// user.email = 'JimmyBob_H@gmail.com'
// console.log(user.email);
// user.age += 1 ;
// console.log(user.age)
user.location = 'the dark side of the moon';
// console.log(user.location);
user.purchased.push('carbohydrates', 'peace of mind')
// console.log(user.purchased)
user.purchased.push('merino jodhpurs')
// console.log(user.purchased[2])

user.friend = {
    name: 'grace hopper',
    age: 85,
    location: 'illuminated side of the moon',
    purchased: []
}
// console.log(user.friend.name + ', ' + user.friend.location)
// user.friend.age = 55;
// console.log(user.friend.age);
// user.friend.purchased.push('The One Ring', 'a latte')
// console.log(user.friend.purchased[1])
// for(i = 0; i < user.purchased.length; i++){
//     console.log(user.purchased[i])
// }

for(i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}
// function oldAndLoud(person){
//     person.name.charAt(0).to;
//     person.age++
// }
// oldAndLoud(user)
// console.log(user)
// console.log(user.name.toUpperCase())
function updateUser(){
    user.name = user.name.toUpperCase();
    user.age++;
}
updateUser()

// console.log(user)

function oldAndLoud(person){
    person.name = person.name.toUpperCase();
    person.age++;
}

// let grace = user.friend
// console.log(grace)
// oldAndLoud(grace)
// console.log(grace)

// CAT Combinator 
cat1 = {
    name: 'cat',
    breed: 'weird',
    age: 74

}

// console.log(cat1.age)
// console.log(cat1.breed)

cat2 = {
    name: 'fuzzy',
    breed:  'happy',
    age: 104
}


function combineCats(mama, papa){
    cat3 = {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + '-' + papa.breed
    }
    return cat3
}
newCat = combineCats(cat1, cat2)
// console.log(newCat)

newCat2 = combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat2,cat1)),combineCats(combineCats(cat1, cat2), combineCats(cat2, cat1)))
// console.log(newCat2)


// END REVIEW 1

// const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree = {};
// // ADD CODE HERE

// console.log()
// for(let i = 0; i <= possibleIterable.length; i++){
//   if(possibleIterable[i] % 3 == 0){
//     divByThree[possibleIterable[i]] = i;
//   }else {continue}
// }
// console.log(divByThree)
// console.log(typeof(5))

// class Person{
//     constructor(nameParam, ageParam = 0, heightParam = 0, weightParam = 0, moodParam = 0, hamsterArray = [], bankAccountParam = 0){
//         this.name = nameParam;
//         this.age = ageParam;
//         this.height = heightParam;
//         this.weight = weightParam;
//         this.mood = moodParam;
//         this.hamsters = hamsterArray;
//         this.bankAccount = bankAccountParam;

//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     getWeight(){
//         this.weight
//     }
//     greet(){
//         console.log('hello my name is ' + this.name)
//     }
//     eat(){
//         this.weight++;
//         this.mood++;
//     }
//     exercise(){
//         this.weight--;
//     }
//     ageUp(years){
//         for(i = 0; i < years; i++){
//         this.age++;
//         this.height++;
//         this.weight++;
//         this.mood--;
//         this.bankAccount+=10
//         }
//     }
//     buyHamster(hamster){
//         this.hamsters.push(hamster);
//         this.mood += 10;
//         this.bankAccount -= hamster.price;
//     }
// }

// let eonPerson = new Person('Eon', 44, 76, 205, 1)
// // console.log(eonPerson.height)

// let timmy = new Person("Timmy", 9, 34, 94, 2,[1,2,3,4,5],0)

// console.log(timmy)
// console.log(timmy.age)
// timmy.ageUp(5)
// console.log(timmy.age, timmy.height)


// console.log(timmy)

// factory function

// class Dinner{
//     constructor(appetizerParam, entreeParam, dessertParam){
//         this.appetizer = appetizerParam;
//         this.entree = entreeParam;
//         this.dessert = dessertParam;
//     }

// }
// class Chef{
//     cookDinner(appetizer, entree, dessert){
//         return new Dinner(appetizer, entree, dessert)
//     }
// }
// let chefJones = new Chef;
// let yummy = chefJones.cookDinner('salad', 'hamburger', 'ice cream')
// console.log(yummy)


// array methods -  map, filter, foreach, find, find
const nums = [1, 2, 3, 4, 5, 6, 7, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

function callback(element){
    if(element > 0){
        return true
    }else {return false}
}
let test = nums.every(callback)

console.log('the result is ', test)

function callback_3(element){
    if(element.length <= 8){
        return true
    }else{return false}
}

let test_3 = panagram.every(callback_3)
console.log('second result is: ', test_3)

let test_4 = panagram.every(function(element) {
    if(element.length <= 8){
        return true
    }else{return false}
})

test_4_minimal = panagram.every(element => element.length < 8)
console.log('5th result is: ', test_4_minimal)
// function callback_2 (element){
//    return element += 5
// }

// let test_2 = nums.map(callback_2)

// console.log(test_2)

// filter number less than 4 and words with even length

let filter_test = nums.filter(element => element < 4)
console.log(filter_test)

let panagram_filter = panagram.filter(word => word.length % 2 == 0)
console.log(panagram_filter)

// find 
let find_test = nums.find(element => element %5 == 0)
console.log('find test: ',find_test)

let panagramFind = panagram.find(word => word.length > 3)

console.log(panagramFind)

//  find index
let num_index_find = nums.findIndex(element => element%3 == 0)
console.log('first index mod 3: ', num_index_find)

let panagramFindIndex = panagram.findIndex(word => word.length < 4)
console.log('index of number less than 2 length; ', panagramFindIndex)

// for each
// nums.forEach(num => console.log(num*3))
// console.log('for each times 3: ',forEach3)

// panagram.forEach(word => console.log(word.concat('!')))
// console.log('for each panagram: ', panagramForEach)


// some 
let someNum = nums.some(element => element%7 ==0)
console.log('num mod 7: ', someNum)

let somePanagram = panagram.some(word => /a/.test(word))
console.log('is a in the panagram: ', somePanagram)

// map
let numTimes100 = nums.map(num => num*100)
console.log(numTimes100)

let panagramToUpper = panagram.map(word => word.toUpperCase().concat('!'))
console.log(panagramToUpper)

// reduce and sort