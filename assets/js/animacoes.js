/* Animação caseBox */
const animaCaseBox = function revealCaseBox () {
     let cases = document.getElementsByClassName('cases__caseBox')
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
                    cases[i].classList.remove("cases__caseBox--invisivel")
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
 
 window.addEventListener("scroll", animaCaseBox);
 
 /* Animação click faqBox */
 
 let coll = document.getElementsByClassName("collapsible");
 var i;
 let textoFaq = "Em 1999 o campeão da Champions League Manchester United, chegou ao final do mundial de clubes para enfrentar o campeão da Libertadores daquele ano, o Palmeiras, a partida terminou em 1 a 0 com um gol de Keane, desde então o time palestrino não chegou mais a final da competição, então, dado os fatos apresentados, conclui-se que o Palmeiras não tem mundial.";
 
 for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() { /* adiciona um listener de click para todos os botões */
      
     /* Código para fechar todas as outras caixas de FAQ quando abrir alguma caixa. */
     this.classList.add("box-atual");
     for(j = 0; j < coll.length; j++)
     {
      if(coll[j].classList.contains("box-atual"))
           this.classList.remove("box-atual");
      else
      {
           coll[j].classList.remove("active") 
           let content = coll[j].nextElementSibling;
           let div = coll[j].parentElement
           let wrapper = div.parentElement
 
           content.style.maxHeight = null;
           if(window.innerWidth > 1024)                /* Desktop */
               wrapper.style.marginBottom = "30px";
           else                                        /* Mobile */
               div.style.marginBottom= "5px";
      }
     }
     /* Código para abrir e fechar a caixa que o usuario clicou */
     let content = this.nextElementSibling;
     let div = this.parentElement
     let wrapper = div.parentElement

     let paragrafo = content.children[0]
     if(this.classList.contains('active')) /* if maxHeight > 0 == true */
     {
      this.classList.remove("active") 
      content.style.maxHeight = null;
       if(window.innerWidth >= 1024)                /* Desktop */
           wrapper.style.marginBottom = "30px";
       else                                        /* Mobile */
           div.style.marginBottom= "5px";
     } 
     else 
     {
       this.classList.add("active")
       paragrafo.innerText = textoFaq
       content.style.maxHeight = content.scrollHeight + "px";
       if(window.innerWidth >= 1440)
          wrapper.style.marginBottom = "180px";
       else if(window.innerWidth >= 1024)
          wrapper.style.marginBottom = "230px";
       else if(window.innerWidth <= 400)
          div.style.marginBottom = "280px";
       else
          div.style.marginBottom= "170px";
     } 
   });
 }

 
 /* Query javascript para não quebrar as faqbox ao trocar de resolução */
 
 /* Desktop -> Mobile */
 const mobileQuery = window.matchMedia('(max-width: 1023px)');
 
 function desktopMobile(e){
   if (e.matches) {
      for(j = 0; j < coll.length; j++)
      {
      coll[j].classList.remove("active") 
      let content = coll[j].nextElementSibling;
      let div = coll[j].parentElement
      let wrapper = div.parentElement
 
      content.style.maxHeight = null;
      wrapper.style.marginBottom = "30px";
      }
   }
 }
 
 mobileQuery.addListener(desktopMobile)
 desktopMobile(mobileQuery) 
 
 /*  Mobile -> Desktop */
 const desktopQuery = window.matchMedia('(min-width: 1024px)');
 function mobileDesktop(e){
   if (e.matches) {
      for(j = 0; j < coll.length; j++)
      {
      coll[j].classList.remove("active") 
      let content = coll[j].nextElementSibling;
      let div = coll[j].parentElement
 
      content.style.maxHeight = null;
      div.style.marginBottom= "5px"; 
      }
   }
 }
 
 desktopQuery.addListener(mobileDesktop)
 mobileDesktop(desktopQuery)
 
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