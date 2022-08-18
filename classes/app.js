// classes: template for objects
/*object way to bundle data and functions - encapsulation
bjects are a way to reflect the structure of the problem - abstraction

*/

// class Vehicle{
//     constructor(vinParam, makeParam, modelParam, runningParam = false) {
//         this.vin = vinParam;
//         this.make = makeParam;
//         this.model = modelParam;
//         this.running = runningParam;
//         // console.log('new instance of vehicle class')
//     }
//     goVroom(){
//         console.log('VROOM!')
//     }
//     start(){
//         this.running = true
//         console.log('sckreeech!!')
//     }
//     stop(){
//         this.running = false;
//     }
//     toString(){
//         return ("vehicle make is " + this.make + " and model is " + this.model + ".")

//     }

// }
// freighter = []
// for(i = 0; i < 100; i++){
//     let carNum = i.toString()
//     // console.log(carNum)
//     carNum = new Vehicle()
//     carNum.vin = i.toString()
    
//     let makes = ['ford', 'tesla', 'toyota']
//     carNum.make = makes[Math.floor(Math.random()*makes.length)]
//     fordModels = ['f150', 'festiva'];
//     teslaModels = ['model 3','model x' ];
//     toyotaModels = ['sienna', 'tacoma'];
//     switch(carNum.make){
//         case 'ford':
//             carNum.model = fordModels[Math.floor(Math.random()*fordModels.length)];
//             break;
//         case 'tesla':
//             carNum.model = teslaModels[Math.floor(Math.random()*teslaModels.length)];
//             break;
//         case 'toyota':
//             carNum.model = toyotaModels[Math.floor(Math.random()*toyotaModels.length)];
//             break;
//     }
//     freighter.push(carNum)
    
// }
// console.log(freighter)
// console.log(freighter.length)

// const v1 = new Vehicle(1234, 'Toyota','Tacoma')
// const v2 = new Vehicle(5678, 'Tesla', 'model S')
// const v3 = new Vehicle(4567,  'Chrysler', '200')
// const v4 = new Vehicle(2867, 'Pheonix', 'Space Van')
// // console.log(v1,  v2, v3, v4)

// let arr2 = new Array()

// console.log(Math.random())

// v4.start()
// console.log(v4.running)
// v4.stop()
// console.log(v4.running)

// console.log(v2.toString())


class Pirate{
    constructor(nameParam, missingHandParam = 2, treasureParam, isCaptainParam = false){
        this.name = nameParam;
        this.hand = missingHandParam;
        this.treasure = treasureParam;
        this.isCaptain = isCaptainParam;

    }
    sayArgh(){
        console.log('Arrghhh!!')
    }
    becomesCaptain(){
        isCaptain = true;
    }
    losesHand(){
        if(this.hand >0){
            hand--;
        }else{console.log('there goes a foot')}
    }
}
let dreadPirateRoberts = new Pirate('roberts',2,10000,true)
let redBeard = new Pirate('redbeard',1, 5000, false)
let jollyRoger = [dreadPirateRoberts, redBeard]

// for(pirate of jollyRoger){
//     console.log('crew of the Jolly Roger: ', pirate.name, pirate.hand, pirate.treasure, pirate.isCaptain)
// }

// let jackSparrow = new Pirate('jack sparrow',2, 15000, true);
// let kiethRichards = new Pirate('kieth richards',2, 20000, false);
// let hunterThompson = new Pirate('hunter',1, 25000,false );

// blackPearl = [jackSparrow, kiethRichards, hunterThompson]
// for(pirate of blackPearl){
//     console.log('crew of the Black Pearl: ', pirate.name, pirate.hand, pirate.treasure, pirate.isCaptain)
// }

// inheritance - 


class Scoundrel extends Pirate{
    constructor(nameParam, missingHandParam = 2, treasureParam, isCaptainParam = false, sidekickParam, shipParam){
        super(nameParam, missingHandParam = 2, treasureParam, isCaptainParam = false)
            this.sidekick = sidekickParam
            this.ship = shipParam


    }
    charm(){
        console.log('you need more scoundrels in your life')
    }
    greet(name){
            console.log('nice to meet you ' + name)
    }
    brag(){
        console.log('the millenium falcon did the kessell run in 5 parsecs under my command')
    }
}
const han_solo = new Scoundrel('han solo',2, 500000, true , 'chewy', 'millenium falcon')

han_solo.charm()
han_solo.greet('luke')
han_solo.brag()
console.log(han_solo.sidekick)

han_solo.charm()