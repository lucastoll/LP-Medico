/* Navbar mobile */

const botaoMenu = document.querySelector('[data-menu-button]');
const divListaMenu = document.querySelector('[data-lista-menu]');
let controleBotaoMenu = 0;
/* console.log(botaoMenu, divListaMenu)
 */

botaoMenu.addEventListener('click', ()=>{
if(controleBotaoMenu==1)
{
     /* divListaMenu.style.display = 'none' */
     divListaMenu.style.height = "0px";
     controleBotaoMenu = 0;
}
else
{
     /* ivListaMenu.style.display = 'flex' */
     if(window.innerWidth < 500)
     {divListaMenu.style.height = "166px";}
     else
     {divListaMenu.style.height = "188px";}
     controleBotaoMenu = 1;
}
})

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

/* Animações caseBox */
const animaCaseBox = function revealCaseBox () {
     let cases = document.getElementsByClassName('cases__caseBox')
     var windowHeight = window.innerHeight; /* height da pagina */
     var elementTop = cases[0].getBoundingClientRect().top;
     var elementVisible = 100;


     console.log(windowHeight + "," + elementTop + "," + elementVisible)
     for(var i = 0; i < cases.length; i++)
     {
          var elementTop = cases[i].getBoundingClientRect().top;
          if(elementTop < windowHeight - elementVisible) /* distancia ate o topo < altura da pag - altura da revelação */
          {                                         
               for(var l = 0; l < cases.length; l++)
               {
                    cases[i].classList.remove("cases__caseBox--invisivel")
               }
          } 
     }

     if(cases[2].getBoundingClientRect().top < windowHeight - elementVisible)
     {
          for(var j = 0; j < cases.length; j++)
          {
               cases[j].style.transition = "all .3s"
          }
     }
}

window.addEventListener("scroll", animaCaseBox); 