// class Governor{
//     constructor(nameParam){
//     this.name = nameParam
//     static title = 'Governor ' + this.name;
//     }
//     static lawDownTheLaw{
//         console.log('i am immediately deploying the national gaurd and all police to handle the present disturbance')
//     }
// }


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
        if(this.rage = true){
            console.log('THE MAIL NEVER STOPS!!  Ahhhhh!  BLAM! BLAM! BLAM!')
        }else{
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

const gary = new PostalWorker('gary', 50, 'male', false )
gary.goPostal()
const zeke = new PostalWorker('zeke', 35, 'male', true)
zeke.greet()
console.log(zeke.rage)

console.log(break)
const kieth = new Chef("kieth", 46, 'male', 1)

kieth.cookFood()

const jones = new Chef('jones', 57, 'male', 4)
jones.cookFood()
