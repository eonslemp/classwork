// //            0        1        2
// let arr = ['kiwi', 'banana','apple'];

// // // object literal
// // let cat = {
// //     name:  'Pictures',
// //     fur: 'black',
// //     legs: 4,

// // }

// // access property
// // console.log(cat.name.length, cat.name)
// let dog = {
//     name:  'Lilly',
//     fur: 'grey and white',
//     temperament: ['nice','anxious'],
//     legs: 4,
//     poopsALot: false,
//     favoriteThings: ['the cat', 'hamburger', ],
//     hasOpposableThumbs: false,
//     hasLaser: false,
//     speak:  function(){
//         console.log("ARF!, ARF!")    
//         }
//     // jump(howHigh) =>{console.log(howHigh)}

//     }
// // assign property
// // console.log(dog['fur'], dog.name)
// // console.log(dog)
// dog.breed = 'chihuahua'

// // console.log(dog.temperament[1])
// dog.temperament.push('submissive')
// // console.log(dog.temperament[2])

// console.log(dog.hasOpposableThumbs)
// dog.favoriteThings.push('chickens')
// // console.log(dog.favoriteThings[2])
// // console.log(typeof(dog.temperament))

// // if (dog.legs){
// //         console.log('dogs have legs')
// //     } else {console.log('dogs do not have legs')}
// dog.speak()
// // dog.jump('reaaaallly high')

// // for(let item of arr){

// // }
// // for(let prop in dog){
// //     console.log(prop)
// //     console.log([prop])
// // }

// for(let key in dog) {
// // key represents the propperties in 'dog'
// console.log('key', key)
// console.log('value', dog[key])

// }


// let book = {
//     title: "Clean Code",
//     author: 'Robert Martin',
//     pages: 410,
//     isGood: true,
//     chapters: ['1','2','3','4','5','6','7'],
//     read:  function(){
//         console.log('clean code is good and you should do it a lot!')
//     },
//     pagesPerChapter (){
//         console.log(book.pages/book.chapters.length)
//     }
// }
// console.log(book.chapters)
// // let pages = book.pages;
// // let chap = book.chapters.length
// book.read()
// console.log(book.chapters.length)
// book.pagesPerChapter()
// // for (let key in book){
// //     console.log('key', key);
// //     console.log('value', book[key])
// // // }
// let object = {
//     letter: 'l',
//     string: 'Hello World',
//     count (){
//         object.string.toLowerCase();
//         count = 0;
//         stringArr = [...object.string]
//         for(let i = 0; i <= stringArr.length; i++){
//             if(stringArr[i] === object.letter){
//                 count++
//             }else {continue}
//         }
//         return count
//     }
// }
// greet = 'Hello World';
// console.log(object.count())
// string_arr = [...object.string.toLowerCase()]
// console.log(string_arr)
// // console.log(greet.toLowerCase())


// function characterCounter(string){
//     counts = {};
//     for()
// }

let string = 'strings';
let stringArr = [...string];
let stringSet = new Set(stringArr)
let count_obj = {}
// for (let key in string){
//     // console.log(string[key])
//     for(i = 0; i <= (string.length - key); i++){

//     }

// }
for(let key in stringSet){
    counter = 0;

stringArr.forEach(itm => {if (key == itm)counter++;
})
count_obj[key] = counter;
}
console.log(count_obj)
console.log(stringSet)
// const arr = ["a", "a", "a", "b", "b", "b", "b", "c", "c", "c"];
// let count = 0;

// function countValues(array, countItem) {
//   array.forEach(itm => {
//     if (itm == countItem) count++;
//   });
//   console.log(`${countItem} ${count}`);
// }
// countValues(arr, "c");