/* Owl carousel */
/* https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
         items: 1,
         center: true,
         loop: true,
         margin: 50,
         dots: true,
         autoplay: true,
         autoplayTimeout: 25000,
         responsive : {
            1024 : {
                items: 3
            }
         }

    });

  });

  /* Scroll reveal carrousel */

  /* Animação caseBox */
const animaTestimonialCarousel = function revealCaseBox () {
    let cases = document.querySelector('.testimonial__carousel')
    var windowHeight = window.innerHeight; /* height da pagina */
    var elementTop = cases.getBoundingClientRect().top;
    var elementVisible = 100;

    var elementTop = cases.getBoundingClientRect().top;
    if(elementTop < windowHeight - elementVisible) /* distancia ate o topo < altura da pag - altura da revelação */
    {                                         
        cases.classList.remove("testimonial__carousel--invisivel")
    } 


    if(cases.getBoundingClientRect().top < windowHeight - elementVisible)
    {
        sleep(17000);
    }
}

window.addEventListener("scroll", animaTestimonialCarousel);