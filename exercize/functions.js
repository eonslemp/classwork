// function maxOfTwoNumbers(x, y){
//     if(x == y){
//         return x
//     } else if (x<y){
//         return y
//     } else {return x}
// }
// g = maxOfTwoNumbers(4,6)
// console.log(maxOfTwoNumbers(4,6))


// function maxOfThree(x,y,z){
//     if(x>y){
//         if(x>z){
//             return x
//         }else {return z}
//     }else if(y>z){
//         return y
//     } else {return z}
// }
// console.log(maxOfThree(3,45,9))

// function isVowel(character){
//     character.toLowerCase
//     switch (character) {
//         case 'a': 
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return 'is a vowel'
//         default:
//             return "not a vowel"
//     }
// }

// console.log(isVowel('x'))

// function sumArray(array){
//     x = array[0];
//     for(i = 1; i < array.length; i++){
//         x+=array[i]
//     }
//     return x
// }

// arr_1 = [1,2,3,4,5,6];
// console.log(sumArray(arr_1))


// function multiplyArray(array){
//     x = array[0];
//     for(let i = 1; i < array.length; i++){
//         x*= array[i];
//     }
//     return x
// }
// let arr = [1,2,3,4,5]
// // console.log(multiplyArray(arr[2]))
// console.log(multiplyArray(arr))

// arr_2 = [7,8,9,5]
// num_1 = 7;
// num_2 = 8;
// num_3 = 9;
// num_4 = 5;
// // const numArgs = function(...args){
// //     arg_array = [...args]
// // }
// // console.log(numArgs(arr_2))
// const numArgs = function(...array){
//     spread = [...array]
//     return spread.length;
// }
// console.log(numArgs(num_1,num_2,num_3, num_4))
// console.log(arr_2.length)

// function reverseString(string){
//     rev_str = '';
//     for(i = string.length-1; i >= 0; i--){
//         rev_str +=string[i];    }
//     return rev_str
// }

str = 'this is a string';

// console.log(reverseString(str))
// // console.log(string+='!');

// console.log(reverseString(str))
// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseString(str))
// rev_str = '';
// for(i = str.length-1; i == 0; i--){
//     rev_str +=str[i];    }
// console.log(rev_str);
// console.log(str[15])

// string_arr = [...str.split(' ')];
// console.log(string_arr)
// const longestStringInArray = function(string_array){
//     long_str = string_array[0];
//     for(i = 1; i <= string_array.length-1; i++ ){
//         if(string_array[i].length >= long_str.length){
//             long_str = string_array[i]
//         }

//     }
//     return long_str
// }
// result = longestStringInArray(string_arr)
// console.log(result)

string_arr = ['steven', 'the', 'donkey', 'is', 'a', 'silly', 'name', 'for', 'a', 'donkey']

function stringsLongerThan(str_arr, num){
    len = num;
    longer_than_arr = [];
    for(i = 0; i <= str_arr.length-1; i++){
        if(str_arr[i].length > len ){
            longer_than_arr.push(str_arr[i])
        }
    }
    return longer_than_arr
}

console.log(stringsLongerThan(string_arr,3))