/* Scroll Reveal */

async function revealCreditos() {
    /* divs */
    let reveals = document.querySelector(".creditos__div");
    let starLeft = document.querySelector(".creditos__div__starLeft");
    let starRight = document.querySelector(".creditos__div__starRight");
    let textoMeio = document.querySelector(".creditos__div__textoMeio");
    /* elementos */
    let starLeftHalf = document.querySelector(".creditos__div__starLeft__halfStarLeft");
    let starLeftFull = document.querySelector(".creditos__div__starLeft__fullStarLeft");
    let starRightHalf = document.querySelector(".creditos__div__starRight__halfStarRight");
    let starRightFull = document.querySelector(".creditos__div__starRight__fullStarRight");
    let lucastoll = document.querySelector(".creditos__div__textoMeio__usergithub");

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
    document.querySelector(".creditos__div__starLeft__fullStarLeft").style.transform = `rotate(${grausNegativo}deg)`
    document.querySelector(".creditos__div__starRight__fullStarRight").style.transform = `rotate(${graus}deg)`
    graus++;
    grausNegativo--;
    looper = setTimeout(rotate, 130);
  }

  