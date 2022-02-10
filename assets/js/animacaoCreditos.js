/* Scroll Reveal */

async function revealCreditos() {
    let reveals = document.getElementById("divcreditos");
    let starLeft = document.getElementById("starLeft");
    let starRight = document.getElementById("starRight");
    let textoMeio = document.getElementById("textoMeio");

    let starLeftHalf = document.getElementById("l1");
    let starLeftFull = document.getElementById("l2");
    let starRightHalf = document.getElementById("r1");
    let starRightFull = document.getElementById("r2");
    let lucastoll = document.getElementById("usergithub");

    let windowHeight = window.innerHeight; /* height da pagina */
    let elementTop = reveals.getBoundingClientRect().top; /* distancia do elemento até o topo da pagina */
    let elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) /* distancia ate o topo < altura da pag - altura da revelação */
    {                                         
        reveals.classList.add("visivel");
        await delay(2000).then(() => {
        starLeft.style.animation  = "staresquerda 1.5s linear forwards";
        starRight.style.animation = "stardireita 1.5s linear forwards";
        if(window.innerWidth <= 400)
            textoMeio.style.animation = "textoMeioMobile 1.8s linear forwards";
        else
            textoMeio.style.animation = "textoMeioResto 1.8s linear forwards";
        delay(2000).then(() => {
            starLeftFull.style.animation = "starFullOpacity .5s linear forwards, starFullMovingAnimation 1.3s 1s linear infinite alternate"
            starRightFull.style.animation = "starFullOpacity .5s linear forwards, starFullMovingAnimation 1.3s 1s linear infinite alternate"
            delay(1000).then(() => {
                starLeftHalf.style.opacity = "0"
                starRightHalf.style.opacity = "0"
                setTimeout(rotate, 25);
                delay(1300).then(() => {
                starLeftFull.style.color = "#23A6F0"
                starRightFull.style.color = "#23A6F0"
                lucastoll.style.color = "Dodgerblue"
                })
            })
        });  
        });  
    } 
    /* esse else faz o elemento sumir denovo se você subir a página, sem ele o elemento revela e fica lá.     
    else 
    {
    reveals[i].classList.remove("invisivel"); 
    } */
  }
  
  window.addEventListener("scroll", revealCreditos); /* acontece sempre que o usuario fazer scroll */


  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  /* Função girar estrela */

  var looper;
  var graus=0;
  var grausNegativo=0;

  function rotate(){
    document.getElementById("l2").style.transform = `rotate(${grausNegativo}deg)`
    document.getElementById("r2").style.transform = `rotate(${graus}deg)`
    graus++;
    grausNegativo--;
    looper = setTimeout(rotate, 130);
  }

  