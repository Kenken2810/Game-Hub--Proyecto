/*==================================================
                    GAMEHUB
              CATÁLOGO DE VIDEOJUEGOS
==================================================*/


//==================================================
// BASE DE DATOS
//==================================================


const juegos = [


    {

        id:1,

        nombre:"Cyberpunk 2077",

        genero:"RPG",

        plataforma:"PC",

        año:2020,

        calificacion:9.2,

        precio:"$39.99",

        imagen:"img/cyberpunk.jpg",

        descripcion:
        "Explora Night City en un RPG futurista de mundo abierto lleno de decisiones, acción y mejoras cibernéticas.",

        enlace:
        "https://deyvii-30.github.io/GameVerse-Proyecto/game.html?game=cyberpunk"

    },


    {

        id:2,

        nombre:"Minecraft",

        genero:"Sandbox",

        plataforma:"PC",

        año:2011,

        calificacion:9.5,

        precio:"$29.99",

        imagen:"img/minecraft.jpg",

        descripcion:
        "Construye, explora y sobrevive en un mundo infinito donde tu creatividad es el límite.",

        enlace:
        "https://deyvii-30.github.io/GameVerse-Proyecto/game.html?game=minecraft"

    },


    {

        id:3,

        nombre:"Red Dead Redemption 2",

        genero:"Acción",

        plataforma:"PC",

        año:2019,

        calificacion:9.8,

        precio:"$59.99",

        imagen:"img/rdr2.jpg",

        descripcion:
        "Vive la historia de Arthur Morgan en uno de los mundos abiertos más impresionantes creados.",

        enlace:
        "https://deyvii-30.github.io/GameVerse-Proyecto/game.html?game=rdr2"

    },


    {

        id:4,

        nombre:"God of War Ragnarök",

        genero:"Acción",

        plataforma:"PlayStation",

        año:2022,

        calificacion:9.7,

        precio:"$69.99",

        imagen:"img/gow.jpg",

        descripcion:
        "Kratos y Atreus enfrentan el destino de los dioses nórdicos en una aventura épica.",

        enlace:
        "https://deyvii-30.github.io/GameVerse-Proyecto/game.html?game=godofwar"

    }


];



//==================================================
// ELEMENTOS HTML
//==================================================


const contenedor =
document.getElementById(
    "contenedorJuegos"
);

const contenedorFavoritos =
document.getElementById(
    "contenedorFavoritos"
);

const inputBuscar =
document.getElementById(
    "buscarJuego"
);


const botonesFiltro =
document.querySelectorAll(
    ".filtro"
);



const modal =
document.getElementById(
    "modalJuego"
);



const contenidoModal =
document.getElementById(
    "contenidoModal"
);



const cerrarModal =
document.getElementById(
    "cerrarModal"
);



const pantallaCompra =
document.getElementById(
    "pantallaCompra"
);



const toast =
document.getElementById(
    "toast"
);



//==================================================
// VARIABLES
//==================================================


let generoSeleccionado =
"Todos";



//==================================================
// FAVORITOS
//==================================================


let favoritos =
JSON.parse(
localStorage.getItem("favoritos")
) || [];



//==================================================
// MOSTRAR JUEGOS
//==================================================


function mostrarJuegos(lista){


    if(!contenedor)
        return;



    contenedor.innerHTML="";



    lista.forEach(juego=>{


        const esFavorito =
        favoritos.includes(
            juego.id
        );



        const tarjeta =
        document.createElement(
            "div"
        );



        tarjeta.className =
        "card animar";



        tarjeta.innerHTML = `


        <img 
        src="${juego.imagen}"
        alt="${juego.nombre}">



        <div class="contenido-card">


            <h3>

                ${juego.nombre}

            </h3>



            <p>

                <strong>Género:</strong>
                ${juego.genero}

            </p>



            <p>

                <strong>Plataforma:</strong>
                ${juego.plataforma}

            </p>



            <p>

                <strong>Año:</strong>
                ${juego.año}

            </p>



            <span>

                ⭐ ${juego.calificacion}

            </span>



            <p>

                <strong>
                ${juego.precio}
                </strong>

            </p>



            <button
            class="card-btn detalles"
            data-id="${juego.id}">


                <i class="fa-solid fa-eye"></i>

                Ver detalles


            </button>



            <button
            class="card-btn comprar"
            data-id="${juego.id}">


                <i class="fa-solid fa-cart-shopping"></i>

                Comprar licencia


            </button>



            <button
            class="card-btn favorito"
            data-id="${juego.id}">


                <i class="
                ${esFavorito 
                ? "fa-solid fa-heart" 
                : "fa-regular fa-heart"}
                ">
                </i>


                ${esFavorito
                ? "Favorito"
                : "Agregar favorito"}


            </button>



        </div>


        `;



        contenedor.appendChild(
            tarjeta
        );


    });


}

//==================================================
// ABRIR MODAL DE DETALLES
//==================================================


function mostrarDetalles(juego){


    if(!modal || !contenidoModal)
        return;



    contenidoModal.innerHTML = `


        <img 
        class="modal-imagen"
        src="${juego.imagen}"
        alt="${juego.nombre}">



        <h2>

            ${juego.nombre}

        </h2>



        <div class="modal-rating">

            ⭐ ${juego.calificacion} / 10

        </div>



        <div class="modal-info">


            <div>

                <i class="fa-solid fa-gamepad"></i>

                <p>

                    ${juego.genero}

                </p>

            </div>



            <div>

                <i class="fa-solid fa-desktop"></i>

                <p>

                    ${juego.plataforma}

                </p>

            </div>



            <div>

                <i class="fa-solid fa-calendar"></i>

                <p>

                    ${juego.año}

                </p>

            </div>


        </div>



        <p class="modal-descripcion">

            ${juego.descripcion}

        </p>



        <div class="modal-precio">

            ${juego.precio}

        </div>



        <button
        class="btn comprar-modal"
        data-id="${juego.id}">


            <i class="fa-solid fa-cart-shopping"></i>

            Comprar licencia


        </button>


    `;



    modal.classList.add(
        "mostrar"
    );



    document.body.style.overflow =
    "hidden";


}



//==================================================
// CERRAR MODAL
//==================================================


if(cerrarModal){


    cerrarModal.addEventListener(
    "click",
    ()=>{


        modal.classList.remove(
            "mostrar"
        );


        document.body.style.overflow =
        "auto";


    });


}



// cerrar al hacer click fuera


if(modal){


modal.addEventListener(
"click",
(e)=>{


    if(e.target === modal){


        modal.classList.remove(
            "mostrar"
        );


        document.body.style.overflow =
        "auto";


    }


});


}



//==================================================
// MOSTRAR TOAST
//==================================================


function mostrarToast(texto){


    if(!toast)
        return;



    toast.textContent =
    texto;



    toast.classList.add(
        "mostrar"
    );



    setTimeout(()=>{


        toast.classList.remove(
            "mostrar"
        );


    },2200);


}



//==================================================
// FAVORITOS
//==================================================


function alternarFavorito(id){


    const posicion =
    favoritos.indexOf(id);



    if(posicion === -1){


        favoritos.push(id);


        mostrarToast(
            "❤️ Agregado a favoritos"
        );


    }else{


        favoritos.splice(
            posicion,
            1
        );


        mostrarToast(
            "🤍 Eliminado de favoritos"
        );


    }



    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    mostrarFavoritos();


    // Solo actualiza los botones,
    // no destruye el catálogo

    document.querySelectorAll(
        ".favorito"
    ).forEach(
    boton=>{


        const botonId =
        Number(
            boton.dataset.id
        );



        if(
            favoritos.includes(botonId)
        ){


            boton.innerHTML =
            `
            <i class="fa-solid fa-heart"></i>
            Favorito
            `;


        }else{


            boton.innerHTML =
            `
            <i class="fa-regular fa-heart"></i>
            Agregar favorito
            `;


        }



    });


}


//==================================================
// COMPRAR LICENCIA
//==================================================


function comprarJuego(juego){


    if(!pantallaCompra)
        return;



    pantallaCompra.classList.add(
        "mostrar"
    );



    setTimeout(()=>{


        window.open(
            juego.enlace,
            "_blank"
        );



        pantallaCompra.classList.remove(
            "mostrar"
        );



    },1200);


}



//==================================================
// EVENTOS DE TARJETAS
//==================================================


document.addEventListener(
"click",
(e)=>{


    const botonDetalle =
    e.target.closest(
        ".detalles"
    );



    const botonComprar =
    e.target.closest(
        ".comprar"
    );



    const botonFavorito =
    e.target.closest(
        ".favorito"
    );



    const botonComprarModal =
    e.target.closest(
        ".comprar-modal"
    );



    if(botonDetalle){


        const id =
        Number(
        botonDetalle.dataset.id
        );



        const juego =
        juegos.find(
        juego=>juego.id===id
        );



        mostrarDetalles(
            juego
        );


    }



    if(botonComprar){


        const id =
        Number(
        botonComprar.dataset.id
        );



        const juego =
        juegos.find(
        juego=>juego.id===id
        );



        comprarJuego(
            juego
        );


    }



    if(botonComprarModal){


        const id =
        Number(
        botonComprarModal.dataset.id
        );



        const juego =
        juegos.find(
        juego=>juego.id===id
        );



        comprarJuego(
            juego
        );


    }



    if(botonFavorito){


        const id =
        Number(
        botonFavorito.dataset.id
        );



        alternarFavorito(
            id
        );


    }



});

//==================================================
// BUSCADOR Y FILTROS
//==================================================


function actualizarCatalogo(){


    const texto = 
    inputBuscar
    ? inputBuscar.value
        .toLowerCase()
        .trim()
    : "";



    const filtrados =
    juegos.filter(
    juego=>{


        const coincideNombre =
        juego.nombre
        .toLowerCase()
        .includes(texto);



        const coincideGenero =

        generoSeleccionado === "Todos"

        ||

        juego.genero === generoSeleccionado;



        return 
        coincideNombre &&
        coincideGenero;


    });



    mostrarJuegos(
        filtrados
    );


}



//==================================================
// BUSQUEDA EN TIEMPO REAL
//==================================================


if(inputBuscar){


    inputBuscar.addEventListener(
    "input",
    ()=>{


        actualizarCatalogo();


    });


}



//==================================================
// BOTONES DE FILTRO
//==================================================


botonesFiltro.forEach(
boton=>{


    boton.addEventListener(
    "click",
    ()=>{


        botonesFiltro.forEach(
        btn=>{


            btn.classList.remove(
                "activo"
            );


        });



        boton.classList.add(
            "activo"
        );



        generoSeleccionado =
        boton.dataset.genero;



        actualizarCatalogo();


    });


});



//==================================================
// CARGAR CATÁLOGO INICIAL
//==================================================


mostrarJuegos(
    juegos
);

mostrarFavoritos();

function mostrarFavoritos(){


    if(!contenedorFavoritos)
        return;



    const juegosFavoritos =
    juegos.filter(
    juego =>
    favoritos.includes(juego.id)
    );



    contenedorFavoritos.innerHTML="";



    if(juegosFavoritos.length===0){


        contenedorFavoritos.innerHTML=
        `

        <p style="
        text-align:center;
        width:100%;
        color:#CBD5E1;
        ">

        Todavía no tienes videojuegos favoritos ❤️

        </p>

        `;


        return;


    }



    juegosFavoritos.forEach(
    juego=>{


        const tarjeta =
        document.createElement(
            "div"
        );


        tarjeta.className="card";


        tarjeta.innerHTML=
        `

        <img src="${juego.imagen}">


        <div class="contenido-card">


        <h3>
        ${juego.nombre}
        </h3>


        <p>
        ⭐ ${juego.calificacion}
        </p>


        <button 
        class="card-btn detalles"
        data-id="${juego.id}">

        Ver detalles

        </button>


        </div>

        `;



        contenedorFavoritos.appendChild(
            tarjeta
        );


    });


}

//==================================================
// LOADER CATÁLOGO
//==================================================


const loader =
document.getElementById(
    "loader"
);



const progressBar =
document.getElementById(
    "progress-bar"
);



const loaderText =
document.getElementById(
    "loader-text"
);



if(
loader &&
progressBar &&
loaderText
){



    const mensajes = [

        "Inicializando catálogo...",

        "Cargando videojuegos...",

        "Organizando biblioteca...",

        "Catálogo listo!"

    ];



    let progreso = 0;

    let mensaje = 0;



    const intervalo =
    setInterval(
    ()=>{


        progreso += 2;



        progressBar.style.width =
        progreso + "%";



        if(
            progreso % 25 === 0
            &&
            mensaje < mensajes.length-1
        ){


            mensaje++;


            loaderText.textContent =
            mensajes[mensaje];


        }



        if(progreso >= 100){


            clearInterval(
                intervalo
            );



            setTimeout(
            ()=>{


                loader.classList.add(
                    "ocultar-loader"
                );


            },
            300);



        }



    },
    35);



}



//==================================================
// CERRAR MODAL CON ESC
//==================================================


document.addEventListener(
"keydown",
(e)=>{


    if(
        e.key === "Escape"
        &&
        modal
    ){


        modal.classList.remove(
            "mostrar"
        );


        document.body.style.overflow =
        "auto";


    }


});



//==================================================
// ERROR DE IMAGEN
//==================================================


document.addEventListener(
"error",
(e)=>{


    if(
        e.target.tagName === "IMG"
    ){


        e.target.src =
        "img/no-image.png";


    }


},
true);