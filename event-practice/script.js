/**NOTES
 * event listener is a function that initiates whith an event
 *       method signature >  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 * element.addEventListener(<event-name>, <callback>, <use-capture>)
 * 
 * use-capture - optional - has to do with event phases
 * check html by adding some text in the body-->  <body>  TEST </body>
 * check css by setting backgroundColor-->  body{ background-color: rgb(167, 73, 199); }
 * check script by setting alert-->  alert('test')
 * 
 */
// alert('test')

// select element by assigning var to store reference
const button = document.querySelector("button")
// then attach event listener to 'btn'  
button.addEventListener("click", function(event){console.log(event)
const li = document.createElement('li')
// console.log(li)
// select input element and store it
const input = document.querySelector('input')
// console.dir(input.value)
// input has to access 'input.value'
li.textContent = input.value
// console.log(li.textContent)

// document.querySelector('ul').appendChild(li)
const ul = document.querySelector('ul')
ul.appendChild(li)

input.value = ''


// the more event listeners-->the more of a performance hit.
})
const ul = document.querySelector('ul')
ul.addEventListener("click", handleClick)
// btn.addEventListener("click", (event)=>console.log(event))
function handleClick(event){
    // ul.style.color = red;
    console.log(event)
    console.log(event.target)

    if (event.target.tagName  === 'LI'){
        event.target.style.color = 'blue'
    }
    if(event.target.tagName === "UL"){
        event.target.style.backgroundColor = 'black'
    }
}

ul.removeEventListener('click', handleClick)

// const ul = document.querySelector('ul').addEventListener(
//     'click', (event) => {event.target.style.color = red})

