

function mostrarmensaje() {
    let mensaje = document.getElementsByid("mensaje");

    mensaje.innerHTML = " cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout( () =>{
        mensaje.style.opacity="1";
        mensaje.style.transform= "translatey (0)";
    }, 50);
}


