let mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
console.log(mainEl)
const h1El = document.createElement('h1')
h1El.innerHTML = 'SEI rocks.'
console.log(h1El)
mainEl.append(h1El)

mainEl.classList.add('flex-ctr')
// let topMenuEl = document.querySelector('#top-menu')
let topMenuEl = document.getElementById('top-menu')
console.log(topMenuEl)
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

// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catolog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#', subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text:  'sign out', href: '/account/signout'},
//   ]},
// ];

  for(let element of menuLinks){
    const anchor = document.createElement('a')
    anchor.setAttribute('href',element.href)
    anchor.innerHTML = element.text
    topMenuEl.append(anchor)
  }

  const subMenuEl = document.getElementById('sub-menu')
  console.log(subMenuEl)

  subMenuEl.style.height = '100%'
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  subMenuEl.classList.add('flex-around')
  subMenuEl.style.position = 'absolute'
  subMenuEl.style.top = '0'


console.log(topMenuEl)
// 5.1
const topMenuLinks = topMenuEl.getElementsByTagName('a')
console.log(topMenuLinks)
const showingSubMenu = false
// 5.2
function callBack(event){
  event.preventDefault();
  if(event.target.tagName !== 'A'){
    return 
  }else{
    
    console.log(event.target)

  }
}
topMenuEl.addEventListener('click',callBack)