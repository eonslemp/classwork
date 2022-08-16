// // for (let i = 0; i < 10; i+=2){
// //     console.log(i)
// // }

// for (let i = 13; i > 0; i-=1){
//     console.log(i)
//     if (i == 13){
//         console.log('lucky number 13!')
//     }
// }

// ctrl + c is keyboard interupt

// for (let i = 0;; i++){
//     console.log(i)
//     if (i == 5){
//         break;
//     }else{
//         continue;
//     }
// }  
//exercize 1
// for (let i = 10; i > 1; i-=1)
// {
//     console.log(i)
// }
//exercize 2

// for (let i = 1; i < 10; i +=2)
// {
//     console.log(i)
// }
// for (let i = 2; i <= 10; i +=2){
//     console.log(i)
// }
//exerrcize 3
// for (let i = 6; i <= 60; i += 3){
//     console.log(i)
// }

// i = 3
// k = 'k'
// console.log(k*1)
// exercize 4
// for (let i = 1; i <=7; i++){
//     string = "#";
//     console.log(string.repeat( i ));
// }
//exercize 5
// for (let i = 2; i <= 10; i +=2){
//     if(i % 2 == 0){
//     console.log(i)
//     }
// }

// for (let i = 2; i <=20; i ++){
//     console.log(i)
// }

//while loops
// let i = 1;
// while(i < 5){
// console.log(i)
// i++
// }


// i = 3;
// while(i <= 35){
//         console.log(i)
//         i+=3
//     }


// k = 5;
// while (k < 100){

//     console.log(k)
//     k +=5
// }

// j = 1;
// while(j <= 20){
//     if(j%2 ==0){
//     console.log(3*j)
//     }
//     j++

// }

// i = 2;
// while(i <20){
//     let factors =0;
//     let j = 2
//     while (j <i){
//         if (i%j == 0) factors++;
//         j++;
//     }
//     if(factors == 0 && i !=1) {
//         console.log(i + 'is prime');

//     }
//     i++;
// }

// let dollars = 6
// quarters = 0
// while (dollars > 0){
//     dollars -= .25;
//     quarters ++
// }
// console.log(quarters)


// x = 10;
// let list = [];
// while(x <= 100){
//     odds = [];
//     evens = [];
//     // let list = [];
//     list.push(x);
//     x+=10;
//     l = 0;
//     while(l <= list.length-1){
//        y = list[l];
//        if (l%2 == 0){
//         odds.push(y);
//         l++
//        } else {
//         evens.push(y)
//         l++
//     }

//     }
// }
//  console.log(odds, evens)
// console.log(list.length)

// x = 10;
// let list = [];
// while(x <= 100){
//     oddstr = '';
//     evenstr = '';
//     // let list = [];
//     list.push(x);
//     x+=10;
//     l = 0;
//     while(l <= list.length-1){
//        y = list[l];
//        if (l%2 == 0){
//         oddstr += (y+' ');
//         l++
//        } else {
//         evenstr += (y + ' ');
//         l++
//     }

//     }
// }
//  console.log(oddstr, evenstr)
// console.log(list.length)

// for(let i  = 1; i <= 5; i++){
//     let list = []
//     for (let k = 1; k <= i; k++){
//         list.push(k)

//     }
//     console.log(list)
// }

// for(let i = 5; i > 0; i --){
//     str = ''
//     for(let k = 1; k <= i; k++){
//         str += i;
//     }
//     console.log(str)
// }


// let i = 500;
// list = []
// while(i <= 800){
//     if((i % 4) == 0){ 
//         list.push(i)
//         // console.log(i)
//     }

//     i+=2
// }

// console.log(list)
// for of, for each
let foods = ['kimchi','tacos', 'arepa','spam']


// const myForEachFunction = function() {

// }

// foods.forEach(function(item, idx, array) {
//     console.log(item)
// })

// foods.forEach(() => {

// }) 

// anonymous function
// filter
// let newFoodsArray = foods.filter((item, idx) => {
// if true -> keep item
// if false _> discard
// if(item[0] == 'k' || item[0] == 's'){
//     return true
// }else{return}
// })

// console.log(newFoodsArray)

// map
// let newArray = foods.map(function(item, idx) {
//     return item + '!';
// })
// console.log(newArray)

// reduce (built in array method)

// let nums = [4, 10, 25, 30, 100]

// let results = nums.reduce((previousValue, currentValue) =>{
//     return currentValue + previousValue
// }, 400)


// console.log(results)

// let fizzBuzz = function(num){

// }
// function fizzBuzz(num){
//     for(let i = 1; i <= num -1; i++){
//         if (i % 3 == 0&& i %5 == 0){
//             console.log('fizz buzz')
//         } else if (i % 3 == 0){
//             console.log("fizz")
//         } else if (i % 5 == 0){
//             console.log('buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }
// console.log(fizzBuzz(100))

// 

// function minChange(cost, bill){
//     denom_1 = 1;
//     denom_5 = 5;
//     denom_10 = 10;
//     denom_20 = 20;
//     denom_50 = 50;
//     bill_count = 0;
//     change = bill - cost;
//     change = Math.round(change);
//     for(i = change; i != 0;){
//         if(i - denom_50 >= 0){
//             i = i- denom_50;
//             bill_count++;
//         } else if (i - denom_20 >= 0){
//             i = i - denom_20;
//             bill_count++;
//         } else if (i - denom_10 >= 0){
//             i = i - denom_10;
//             bill_count++;
//         } else if(i - denom_5 >= 0){
//             i = i - denom_5;
//             bill_count++;
//         } else{
//             i--;
//             bill_count++;
//         }
//     }
//     return bill_count;
// }

// console.log(minChange(27.83, 113))