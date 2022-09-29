const inputBox = document.querySelector('.inputBox')
const pass = document.querySelector('.pass')
const btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
   if(inputBox.value !='' && pass.value !=''){
     localStorage.setItem('email', JSON.stringify(inputBox.value))
     localStorage.setItem('password', JSON.stringify(pass.value))

   }
   
})
console.log(sessionStorage.getItem('email'))
console.log(sessionStorage.getItem('password'))
localStorage.removeItem('email')
sessionStorage.removeItem('password')
