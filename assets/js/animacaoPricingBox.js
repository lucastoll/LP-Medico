/* Animação pricingbox ativo */

const pricingBoxes = document.getElementsByClassName("pricing__boxplano")

for (i = 0; i < pricingBoxes.length; i++) 
     {
     pricingBoxes[i].addEventListener("click", function() { /* adiciona um listener de click para todos os botões */ 
          for (i = 0; i < pricingBoxes.length; i++)
          {
               pricingBoxes[i].classList.remove("pricingAtivo")
          } 
          this.classList.add("pricingAtivo")
     });
}

/* Animação ScrollReveal PricingBox */

/* Animação pricingBox */
const animaPricingBox = function revealCaseBox () {
     let cases = document.getElementsByClassName('pricing__boxplano')
     var windowHeight = window.innerHeight; /* height da pagina */
     var elementTop = cases[0].getBoundingClientRect().top;
     var elementVisible = 100;
 
     for(var i = 0; i < cases.length; i++)
     {
          var elementTop = cases[i].getBoundingClientRect().top;
          if(elementTop < windowHeight - elementVisible) /* distancia ate o topo < altura da pag - altura da revelação */
          {                                         
               for(var l = 0; l < cases.length; l++)
               {
                    cases[i].classList.remove("pricing__boxplano--invisivel")
               }
          } 
     }
 
     if(cases[2].getBoundingClientRect().top < windowHeight - elementVisible)
     {
          for(var j = 0; j < cases.length; j++)
          {
               sleep(17000);
               cases[j].style.transition = "all .3s"
          }
     }
 }
 
 window.addEventListener("scroll", animaPricingBox);