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

var boxes = document.getElementsByClassName("faq__box");
var i;

for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const boxAtual = this
    const img = boxAtual.firstElementChild
    const div = img.nextElementSibling
    const h2 = div.firstElementChild
    const p = h2.nextElementSibling

    if(this.classList.contains("active"))
    {
     this.style.maxHeight = "227px"
     img.src =  "/assets/img/setaazulbaixo.svg";
     p.innerText = "Em 1999 o campeão da Champions League, Manchester United, chegou ao final do mundial de clubes para enfrentar o campeão da Libertadores daquele ano, o Palmeiras, a partida terminou em 1 a 0 com um gol de Keane, desde então o time palestrino não chegou mais a final da competição, então, dado os fatos apresentados, conclui-se que o Palmeiras não tem mundial."
    }
    else
    {
     this.style.maxHeight = null;
     img.src =  "/assets/img/setaazuldireita.svg";
     p.innerText = "Em 1999 o campeão..."

    } 
});
}

