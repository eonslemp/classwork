let mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
console.log(mainEl)
const h1El = document.createElement('h1')
h1El.innerHTML = 'SEI rocks.'
console.log(h1El)
mainEl.append(h1El)

mainEl.classList.add('flex-ctr')
let topMenuEl = document.querySelector('#top-menu')
console.log(topMenuEl)
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
topMenuEl.classList.add('flex-around')
console.log(topMenuEl)

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  for(let element of menuLinks){
    const anchor = document.createElement('a')
    anchor.setAttribute('href',element.href)
    anchor.innerHTML = element.text
    topMenuEl.append(anchor)
  }