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
     let img = this.children[0]


     let paragrafo = content.children[0]
     if(this.classList.contains('active')) 
     {
      this.classList.remove("active") 
      content.style.maxHeight = null;
      img.src="https://raw.githubusercontent.com/lucastoll/LandingPageMedico/main/assets/img/setaazuldireita.svg"
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
       img.src="https://raw.githubusercontent.com/lucastoll/LandingPageMedico/main/assets/img/setaazulbaixo.svg"
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

/* Hover faqbox (javascript pois são duas divs que fazem um conjunto) */

let content = document.getElementsByClassName("content");

for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("mouseover", function() { 
      let content = this.nextElementSibling;
      this.style.background = "#f3f3f3"
      content.style.background = "#f3f3f3"
   }
)};

for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("mouseleave", function() { 
      let content = this.nextElementSibling;
      this.style.background = "#ffffff"
      content.style.background = "#ffffff"
   }
)};

for (i = 0; i < content.length; i++) {
   content[i].addEventListener("mouseover", function() { 
      let coll = this.previousElementSibling
      coll.style.background = "#f3f3f3"
      this.style.background = "#f3f3f3"
   }
)};

for (i = 0; i < content.length; i++) {
   content[i].addEventListener("mouseleave", function() { 
      let coll = this.previousElementSibling
      coll.style.background = "#ffffff"
      this.style.background = "#ffffff"
   }
)};
 
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
 
