//function declaration & can be called outside of coded expression 'hoisting'
function sayHello(){
    return 'hello'
}

// function expression &  can only be called after it is expressed
const sayHi = function(){
    console.log('Hi')
}


// arrow function - more concise syntax - implicit return

const sayHeyyy = () =>'Heyyy'
const whatsPoppin = () => "What's Poppin"

//calling

//sayHi()

// let x = sayHello()
// console.log(x)

// let y = whatsPoppin()
// console.log(y)
// console.log(sayHeyyy())

//parameter/argument distinction
function add(x,y, z = 0, q = 0){
    return x + y + z +q
}

// console.log(add(2,3))
// console.log(add(56, 93))

// console.log(add('eon ', 'Slemp'))

function computeArea(width, height){
    return 'area of a rectangle with width '+ width + ' and height ' + height + ' is ' + width*height + ' square units'
}
f = computeArea(5,8)
console.log(f)

const planetHasWater = function(planet){
    if (planet == 'earth' || planet == 'mars'){
        return true
    }else{return false}
}
g = planetHasWater('earth')
console.log(g)

// const sayHi = function(){
//     console.log('Hi')
// }

// const sayHeyyy = () =>'Heyyy'

const computeArea_2 = (width, height) => 'area of a rectangle with width '+ width + ' and height ' + height + ' is ' + width*height + ' square units'

console.log(computeArea_2(3,4))

const planetHasWater_2 = (planet) => {if (planet == 'earth' || planet == 'mars'){
    return true}else{return false}
}

console.log(planetHasWater_2('earthssss'))