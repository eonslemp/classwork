// class Governor{
//     constructor(nameParam){
//     this.name = nameParam;
//     }
//     stateTitle(){console.log('Governor ' + this.name)};
//     static lawDownTheLaw(){
//         console.log('i am immediately deploying the national gaurd and all police to control the present disruption');
//     }
// }
// Governor.lawDownTheLaw()
// const bob = new Governor('bob')
// bob.stateTitle()
// // bob.lawDownTheLaw()


class Person{
    constructor(nameParam, ageParam, genderParam){
        this.name = nameParam;
        this.age = ageParam;
        this.gender = genderParam;
}
    greet(name){
        console.log('hello my name is ' + this.name)
    }
    walk(){
        console.log('left, left, left, right, left')
    }
    poop(){
        console.log('mrghh!!!  plop, plop')
    }

}

class PostalWorker extends Person{
    constructor(nameParam, ageParam, genderParam, rageParam = false){
        super(nameParam, ageParam, genderParam)
            this.rage = rageParam;
    }

    goPostal(){
        if(this.rage == true){
            console.log('THE MAIL NEVER STOPS!!  Ahhhhh!  BLAM! BLAM! BLAM!')
        }else {
            console.log("i'm pretty chill, so i don't really do the whole 'going postal' thing")
        }
    }
}

class Chef extends Person{
    constructor(nameParam, ageParam, genderParam, michelinStarParam = 0){
        super(nameParam, ageParam, genderParam)
            this.stars = michelinStarParam;
    }

    cookFood(){
        if(this.stars == 0){
            console.log('here is some yummy viddles for you to scarf')
        } else if (this.stars == 1){
            console.log('here is some delicious food for you to enjoy')
        }else if (this.stars >= 2){
            console.log('in all honesty you probably can not afford my food')
        }
    }
}

// const gary = new PostalWorker('gary', 50, 'male' )
// // gary.goPostal()
// console.log(gary.rage)
// gary.goPostal()
// const zeke = new PostalWorker('zeke', 35, 'male', true)
// zeke.greet()
// console.log(zeke.rage)
// zeke.goPostal()

// const kieth = new Chef("kieth", 46, 'male', 1)

// kieth.cookFood()

// const jones = new Chef('jones', 57, 'male', 4)
// jones.cookFood()


class BankAccount{
    constructor(ownerName, Balance){
        this.name = ownerName;
        this.balance = Balance;
        this.accountNum = Math.floor(Math.random()*1000)
    }
    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        if(this.balance - amoount < 0){
            console.log('transaction declined')
        } else{this.balance -= amount}

    }
    
}

// const test = new BankAccount('Eon', 1000000)
// console.log(test.name, test.balance, test.accountNum)
class checkingAccount extends BankAccount{
    constructor(ownerName, Balance, overdraftEnable = false){
        super(ownerName, Balance)
        this.accountNum = Math.floor(Math.random()*1000)
        this.overdraft = overdraftEnable
    }

    withdraw(amount){
        if(this.overdraftEnable == true && this.balance - amount <0){
            this.balance = this.balance - amount;
            console.lot('this transaction overdrafts.  your balance is : '+ this.balance)
        }else if(this.overdraft == false && (this.balance - amount < 0)){
            console.log('transaction declined')
        } else{this.balance = this.balance - amount}
    }
}
const checkingTest = new checkingAccount('Eon', 1000000, false)
checkingTest.withdraw(1000005)
console.log(checkingTest.name, checkingTest.balance, checkingTest.accountNum)

class savingsAccount extends BankAccount{
    constructor(ownerName, Balance){
        super(ownerName, Balance)
        this.name = ownerName;
        this.balance = Balance;
        this.accountNum = 's' + Math.floor(Math.random()*1000)
}
    withdraw(amount){
        console.log('no withdrawal allowed with savings acoount')
    }
}

// const savingsTest = new savingsAccount("Eon", 1000000)
// console.log(savingsTest.name, savingsTest.balance)
// savingsTest.withdraw(100)