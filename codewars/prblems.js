function findShort(s){
    stringArr = [...s.split(" ")]
    lengthArr = []
    for(let str of stringArr){
        strLength = str.length
        lengthArr.push(strLength)
    }
    longest = 0;
    for(let i = 0; i <= lengthArr.length; i++){
        
        if(lengthArr[i] <= lengthArr[longest]){
            longest = i
        } else{continue}
        shortlength = lengthArr[i]
    }
    return shortlength
    // return lengthArr
}

string = 'zeke the donkey is a silly name for a donkey'
string_2 = 'antidisestablishmentarianism'
console.log(findShort(string))
console.log(findShort(string_2))
