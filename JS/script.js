
// <<INICIO DEL MODAL DE BIENVENIDA>>

function modalBienvenida(){
    document.getElementById("modalBienvenida").style.display="block";
    document.getElementById("heroTitle").style.animationPlayState="paused";
    document.getElementById("heroSubtitle").style.animationPlayState="paused";
    document.documentElement.style.overflowY="hidden";
}

function cerrarMBB(){
    document.getElementById("modalBienvenida").style.display="none";
    document.getElementById("heroTitle").style.animationPlayState="running";
    document.getElementById("heroSubtitle").style.animationPlayState="running";
    document.documentElement.style.overflowY="auto";
}
// <<FIN DEL MODAL DE BIENVENIDA>>

// INICIO DEL CARRUSEL AUTOMÁTICO PARA HERO IMAGE

var bgCounter = 0;
function heroSlideShow(){
    var listaImgBg = [
        "url('media/heroImage/HeroimageBRBA.jpg')",
        "url('media/heroImage/HeroimageBRBA02.jpg')",
        "url('media/heroImage/HeroimageBRBA03.jpg')"
    ];

    bgCounter++;

    if (bgCounter == listaImgBg.length) {
        bgCounter=0;
    }

    document.getElementById("encabezado").style.backgroundImage="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.4)),"+listaImgBg[bgCounter];
}

// FIN DEL CARRUSEL AUTOMÁTICO PARA HERO IMAGE

// INICIO DEL SLIDESHOW HEROIMAGES CON ANIMACIÓN

var counterNext = 0;
var counterMain = 0;

function slideShowAnim(){
    var listaImBgAnim = document.getElementsByClassName("fondosHero");

    counterNext++;
    counterMain=counterNext-1;

    if (counterNext==listaImBgAnim.length) {
        counterNext=0;
    }

    if (counterMain<0) {
        counterMain=listaImBgAnim.length-1;
    }

    for(var i = 0; i < listaImBgAnim.length; i++){

        listaImBgAnim[i].classList.remove("nextSlide");
        listaImBgAnim[i].classList.remove("mainSlide");
        listaImBgAnim[i].classList.remove("hiddenSlide");
        
        if (i == counterNext) {
            listaImBgAnim[i].classList.add("nextSlide");
        }

        else if (i == counterMain) {
            listaImBgAnim[i].classList.add("mainSlide");
        }

        else {
            listaImBgAnim[i].classList.add("hiddenSlide");
        }
    }
}


// FIN DEL SLIDESHOW HEROIMAGES CON ANIMACIÓN

// <<INICIO DEL DESPLIGUE DEL MENÚ>>

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function(){esconderMostrarMenu()}

function esconderMostrarMenu(){
    var posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll > posActualScroll) {
        //subimos scroll y se muestra el menú
        document.getElementById("navbar").style.top="0px";
        
        if (posActualScroll>200) {
            document.getElementById("navbar").style.height="50px";
            document.getElementById("navbar").style.fontSize="1.5rem";
            document.getElementById("menu").style.lineHeight="50px";
            document.getElementById("submenu").style.top="50px";
            document.getElementById("logo").style.padding="0px";
        }
        else{
            document.getElementById("navbar").style.height="150px";
            document.getElementById("navbar").style.fontSize="2rem";
            document.getElementById("menu").style.lineHeight="150px";
            document.getElementById("submenu").style.top="100px";
            document.getElementById("logo").style.padding="15px";
        }
    }
    else{
        //bajamos scroll y se esconde el menú
        if (posActualScroll<200) {
            document.getElementById("navbar").style.height="50px";
            document.getElementById("navbar").style.fontSize="1.5rem";
            document.getElementById("menu").style.lineHeight="50px";
            document.getElementById("submenu").style.top="50px";
            document.getElementById("logo").style.padding="0px";
        } else {
            document.getElementById("navbar").style.top="-150px";
        }
    }
    
    posPreviaScroll = posActualScroll; 
}
// <<FIN DEL DESPLIGUE DEL MENÚ>>


// <<INICIO DE LAS PESTAÑAS DEL ELENCO>>

function marcarPestanas(contenedorAMostrar, tabClicada){
    
    var listaConPestanas = document.getElementsByClassName("contenedorPersonajes");
    
    for(var i = 0; i < listaConPestanas.length; i++){
        listaConPestanas[i].style.display="none";
    }

    document.getElementById(contenedorAMostrar).style.display="block";
    
    var tabLinks = document.getElementsByClassName("etiquetasPestanas");
    for (var i = 0; i < tabLinks.length; i++){
        tabLinks[i].classList.remove("pestanaActiva");
    }
    
    document.getElementById(tabClicada).classList.add("pestanaActiva");
    
    var personajes = document.getElementsByClassName("personaje");
    for (var i = 0; i < personajes.length; i++){
        personajes[i].classList.remove("personajeAnimado");
    }
    
    var personajesC = document.getElementById(contenedorAMostrar).children;
    
    for(var i = 0; i < personajesC.length; i++){
        personajesC[i].classList.add("personajeAnimado");
    }
}

// <<FIN DE PESTAÑAS DEL ELENCO>>


// <<INICIO DEL MODAL DE LA GALERÍA>>

var listaRutaImgGal = [];
var numeroIMG = 0;


function lightBox(){
    var listaImgGal = document.getElementsByClassName("imgGal");
    
    for (var i = 0; i < listaImgGal.length; i++){
        listaRutaImgGal.push(listaImgGal[i].src)
    };

    for (var i = 0; i < listaImgGal.length; i++){
        listaImgGal[i].addEventListener('click',openLightBox)
    }

    function openLightBox(){
        var rutaImgClicada = event.currentTarget.src;
        numeroIMG = listaRutaImgGal.indexOf(rutaImgClicada);

        document.getElementById("imageToShow").innerHTML="<img class='imageLightBox' src="+listaRutaImgGal[numeroIMG]+">";
        document.getElementById("modalLightBoxG").style.display="block";
        document.documentElement.style.overflow="hidden";
        closeLightBox()
    }
    
    function closeLightBox(){
        window.addEventListener('click', function(event) {
            if(!event.target.matches(".imageLightBox") && !event.target.matches(".imgGal") && !event.target.matches(".lbButtons") && !event.target.matches(".fa-solid") )
            {
                // console.log("Se puede cerrar");
                document.getElementById("modalLightBoxG").style.display="none";
                document.documentElement.style.overflowY="auto";
                closeLightBox()   
            }
        });
    }
}

function nextImgGal(){
    numeroIMG++;
    
    if (numeroIMG==listaRutaImgGal.length) {
        numeroIMG=0;
    }
    
    document.getElementById("imageToShow").innerHTML="<img class='imageLightBox' src="+listaRutaImgGal[numeroIMG]+">";
}

function prevImgGal(){
    numeroIMG--;
    
    if (numeroIMG<0) {
        numeroIMG=listaRutaImgGal.length-1;
    }

    document.getElementById("imageToShow").innerHTML="<img class='imageLightBox' src="+listaRutaImgGal[numeroIMG]+">";
}

// <<FIN DEL MODAL DE LA GALERÍA>>


// <<INICIO DEL MODAL DE CONTACTO>>

function modalContacto(){
    document.getElementById("modalContacto").style.display="block";
    document.documentElement.style.overflowY="hidden";

    var email = document.getElementById("emailContacto").value;
    var asunto = document.getElementById("asuntoContacto").value;

    //Validamos datos del formulario
    (function formCheck(){
        if(!document.getElementById("emailContacto").checkValidity()){
            mensaje ="Introduce un email válido."
            document.getElementById("mensajeContacto").innerHTML=mensaje;
        }

        else if(!document.getElementById("asuntoContacto").checkValidity()){
            mensaje ="Introduce un asunto."
            document.getElementById("mensajeContacto").innerHTML=mensaje;
        }

        else {
            var mensaje ="Gracias por contactar con el despacho de Saul Goodman. En breve, nos podremos en contacto contigo a través del email: "+email+" para responder tus dudas sobre '"+asunto+"'.";

            document.getElementById("mensajeContacto").innerHTML=mensaje;
        }
    })();
}

function cerrarMBC(){
    document.getElementById("modalContacto").style.display="none";
    document.documentElement.style.overflowY="auto";

    document.getElementById("emailContacto").value ="";
    document.getElementById("asuntoContacto").value="";
    document.getElementById("textContacto").value="";
}

// <<FIN DEL MODAL DE CONTACTO>>