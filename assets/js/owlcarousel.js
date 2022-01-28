/* Owl carousel */
/* https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
         items: 1,
         center: true,
         loop: true,
         margin: 50,
         dots: true,
         autoplay: false,
         autoplayTimeout: 25000,
         responsive : {
            1024 : {
                items: 3
            }
         }

    });

  });