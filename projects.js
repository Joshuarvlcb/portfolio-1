'use strict'

// const options = document.getElementsByClassName('select')
    
//     Array.from(options).forEach(option => {
//         option.addEventListener('onChange',(e) => {
//             console.log('hu')
//         })
//         console.log(option)
//     })

   document.querySelector('#select').addEventListener('onchange', myFunction)


function myFunction () {
    console.log(document.querySelector('#select').value)
}
myFunction()

   console.log(document.querySelector('#select'))