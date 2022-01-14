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
