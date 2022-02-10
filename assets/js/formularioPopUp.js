/* Formulário / popUp*/

const popup = document.querySelector('.popUp')

popup.addEventListener('click', (e) => {
  if(e.target.id == 'popUp__fechar1'|| e.target.id == 'popUp__fechar2')
    popup.style.display = 'none';
})


const myForm = document.querySelector("[data-form]")

myForm.addEventListener("submit", (e) => {
     e.preventDefault();
     popup.style.display = 'flex';

     const paragrafo = document.querySelector('[data-popUp-paragrafo]')
     const departamento = document.querySelector('[data-form-department]').value
     const time = document.querySelector('[data-form-time]').value

     paragrafo.textContent = `We will send you an email with options for ${departamento} clinics with free space on the agenda at ${time}.`

     document.querySelector('[data-form-department]').value = ""
     document.querySelector('[data-form-time]').value = ""
     document.querySelector('[data-form-name]').value = ""
     document.querySelector('[data-form-email]').value = ""
 }) 

 function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
   }
 


