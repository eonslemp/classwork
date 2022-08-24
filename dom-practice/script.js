// alert('t')

// d
// console.log(document.getElementById("title"))

let h1Tag = document.getElementById("title")
console.log(h1Tag)
// console.log(h1Tag.innerText)

let pTag = document.querySelector('p')
// console.log(pTag.textContent)
// console.log(pTag.innerHTML)
// console.log(pTag.textContent)

// let pEl = document.querySelector('cool')
// console.log(pEl)

// let pE2 = document.querySelector('nice')
// console.log(pE2)
console.dir(pTag)

pTag.style.textAlign = 'right'
h1Tag.style.background = 'red'
h1Tag.style.textAlign = 'center'
pTag.style.color = 'black'

h1Tag.getAttribute('color')
aTag = document.querySelector('a')
aTag.setAttribute('href', 'http://www.realultimatepower.net/index4.htm')
console.dir(aTag.getAttribute('href'))

/**
 * - getElementById
 */
pTag.classList.add('second-class')
// console.log(pTag.classList)

liTags = document.getElementsByTagName('li')
// console.log(liTags[1])
let liTags2 = document.getElementsByClassName('comment')
console.log(liTags2)

let liTag3 = document.querySelectorAll('.comment')
console.log(liTag3)

// query selector and query select all
console.log('looping ...')
// for(let li of liTag3){
//     console.log(li)
// }
// console.log('for loop')
// for(let i = 0; i < liTag3.length; i++){
//     console.log(liTag3[i])
// }
// liTag3.forEach(element => console.log(element))

for(let comment of liTag3){
    comment.style.fontSize='30px'
    console.log(comment)
}