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

let test = 'steven the donkey is a silly name for a donkey';

// function characterCount_arr(string){
//     let stringArr = [...string];
//     let stringSet = new Set(stringArr)
//     let count_obj = {}

//     for(let key of stringSet){
//         counter = 0;

//     stringArr.forEach(itm => {if (key == itm)counter++;
//     })
//     count_obj[key] = counter;
//     }
//     return(count_obj)
// }

// const  test = 'steven the donkey is a silly name for a donkey';
// function characterCounter(string){
// const count_obj = {}
// for(let str of string){
//     // console.log(str)
//     if(count_obj[str]){
//         count_obj[str] += 1;
//     }else{count_obj[str] = 1}
// }
// return count_obj
// }
// console.log(characterCounter(test))

// function minChange(cost, bill){
//     let denom_1 = 1;
//     let denom_5 = 5;
//     let denom_10 = 10;
//     let denom_20 = 20;
//     let denom_50 = 50;
//     let bill_count = 0;
//     const bill_count_obj = {
//         "50's": 0,
//         "20's": 0,
//         "10's": 0,
//         "5's": 0,
//         "1's": 0
//     }
//     change = bill - cost;
//     change = Math.round(change);
//     for(i = change; i != 0;){
//         if(i - denom_50 >= 0){
//             i = i- denom_50;
//             bill_count_obj["50's"]+= 1;
//         } else if (i - denom_20 >= 0){
//             i = i - denom_20;
//             bill_count_obj["20's"]+= 1;
//         } else if (i - denom_10 >= 0){
//             i = i - denom_10;
//             bill_count_obj["10's"]+= 1;
//         } else if(i - denom_5 >= 0){
//             i = i - denom_5;
//             bill_count_obj["5's"]+= 1;
//         } else{
//             i--;
//             bill_count_obj["1's"]+= 1;
//         }
//     }
//     return bill_count_obj;
// }

// console.log(minChange(27.83, 113))