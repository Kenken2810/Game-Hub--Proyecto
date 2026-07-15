/*==================================================
                GAMEHUB
            SCRIPT PRINCIPAL
==================================================*/


//==================================================
// LOADER
//==================================================

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const loaderText = document.getElementById("loader-text");


if(loader && progressBar && loaderText){


    const mensajes = [

        "Inicializando GameHub...",

        "Cargando interfaz...",

        "Preparando experiencia gamer...",

        "Todo listo!"

    ];


    let progreso = 0;

    let mensajeActual = 0;



    const carga = setInterval(()=>{


        progreso += 2;


        progressBar.style.width = progreso + "%";



        if(
            progreso % 25 === 0 &&
            mensajeActual < mensajes.length - 1
        ){

            mensajeActual++;

            loaderText.textContent =
            mensajes[mensajeActual];

        }



        if(progreso >= 100){


            clearInterval(carga);


            setTimeout(()=>{


                loader.classList.add(
                    "ocultar-loader"
                );


            },400);


        }


    },35);


}



//==================================================
// NAVBAR EFECTO SCROLL
//==================================================


const header =
document.querySelector("header");



if(header){


window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(2,6,23,.95)";


        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.4)";


    }

    else{


        header.style.background =
        "rgba(11,17,32,.9)";


        header.style.boxShadow =
        "none";


    }



});


}



//==================================================
// ANIMACIÓN HERO
//==================================================


window.addEventListener(
"load",
()=>{


    const hero =
    document.querySelector(
        ".hero-content"
    );



    if(hero){


        hero.style.opacity="0";

        hero.style.transform=
        "translateY(40px)";



        setTimeout(()=>{


            hero.style.transition=
            "1s";


            hero.style.opacity="1";


            hero.style.transform=
            "translateY(0)";



        },500);



    }



});



//==================================================
// ANIMACIÓN BOTONES
//==================================================


const botones =
document.querySelectorAll(
".btn, .card-btn"
);



botones.forEach(
boton=>{


    boton.addEventListener(
    "click",
    ()=>{


        boton.style.transform=
        "scale(.95)";



        setTimeout(()=>{


            boton.style.transform="";


        },150);



    });


});



//==================================================
// ANIMACIÓN CARDS INDEX
//==================================================


const tarjetas =
document.querySelectorAll(
".card"
);



if(tarjetas.length){


window.addEventListener(
"load",
()=>{


    tarjetas.forEach(
    (card,index)=>{


        card.style.opacity="0";

        card.style.transform=
        "translateY(40px)";



        setTimeout(()=>{


            card.style.transition=
            ".6s";


            card.style.opacity="1";


            card.style.transform=
            "translateY(0)";



        },
        index*150);



    });



});


}