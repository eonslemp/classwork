const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
const H1El = document.createElement('h1')
H1El.innerText = 'SEI rocks?'
mainEl.appendChild(H1El)
mainEl.classList.add('flex-ctr')


// let topMenuEl = document.querySelector('#top-menu')
let topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')
console.log(topMenuEl)

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

for(let element of menuLinks){
    let anchor = document.createElement('a')
    anchor.setAttribute('href', element.href)
    anchor.innerHTML = element.text
    topMenuEl.append(anchor)
  }
// for(let element of menuLinks){
//     const anchor = document.createElement('a')
//     anchor.setAttribute('href',element.href)
//     anchor.innerHTML = element.text
//     topMenuEl.append(anchor)
//   }