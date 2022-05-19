function modalBienvenida(){
    document.getElementById("modalBienvenida").style.display="block";
    document.getElementById("heroTitle").style.animationPlayState="paused";
    document.getElementById("heroSubtitle").style.animationPlayState="paused";
    document.documentElement.style.overflow="hidden";
}

function cerrarMBB(){
    document.getElementById("modalBienvenida").style.display="none";
    document.getElementById("heroTitle").style.animationPlayState="running";
    document.getElementById("heroSubtitle").style.animationPlayState="running";
    document.documentElement.style.overflow="auto";
}

function modalContacto(){
    document.getElementById("modalContacto").style.display="block";
    document.documentElement.style.overflow="hidden";

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
    document.documentElement.style.overflow="auto";

    document.getElementById("emailContacto").value ="";
    document.getElementById("asuntoContacto").value="";
    document.getElementById("textContacto").value="";
}

//Aquí comienza el código para el menú

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

//Aquí finaliza el código para el menú
