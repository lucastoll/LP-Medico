/* Animação pricingbox */

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