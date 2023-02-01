// querySelector
const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";
heading.classList.add("nueva-clase");
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); // regresa todos los elementos del selector
console.log(enlaces);
enlaces[0].textContent = "Nuevo texto";
console.log(enlaces[0]);

// modificar link del enlace
enlaces[0].href = "http://google.com";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace");

//otra forma de querySelectorAll
document.querySelectorAll(".navegacion a")[1].textContent = "Cambio de texto";


// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);

// generar codigo HTML mediante JS
const nuevoEnlace = document.createElement('A');
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregar texto
nuevoEnlace.textContent = "Tienda Virtual";
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

/*Eventos*/
console.log(1);

//* esto es lo mismo que onload
window.addEventListener('load', function(){ //load, espera a que javascript y los archivos que dependen del html esten listos
    console.log(2);
});
window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function (){ //DOMContentLoaded, solo espera a que se descargue el html y no espera css o imagenes
    console.log(4);
})
console.log(5);

window.onscroll = function () {
    console.log('scrolling...');
}

/*seleccionar elementos y asociarles un evento, se recomienda su uso para imagenes, textos*/
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    console.log(evento.target);
    evento.preventDefault();

    //preventDefault usado para validar un formulario
    console.log('enviando formulario');
});*/

/*Eventos en formulario - submit, se recomienda para el uso en formularios que enviaran datos*/
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    //validar formulario

    const {nombre, email, mensaje} =datos;
    if (nombre === "" || email === "" || mensaje === ""){
        // mostrarError('Todos los campos son obligatorios');
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //corta la ejecucion del codigo
    }

    //enviar el formulario
    //mostrarMensaje('Mensaje enviado correctamente');
    mostrarAlerta('Mensaje enviado correctamente');

});

/*Eventos de los inputs y textarea*/
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(evento.target)
    console.log(datos);
}

//funcion para hacer el refactoring de la funcion mostrarError y mostrarMensaje
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    },5000);
}

//muestra una alerta de que el mensaje se envio correctamente
function mostrarMensaje(mensaje){
    //const alerta = document.createElement('P');
    //alerta.textContent = mensaje;
    // alerta.classList.add('correcto');
    //formulario.appendChild(alerta);
    //desaparesca despues de 5 seg
    // setTimeout(()=>{
    //     alerta.remove();
    // },5000);
}

//muestra un error en pantalla
function mostrarError(mensaje) {
    //const error = document.createElement('P');
    // error.textContent = mensaje;
    // error.classList.add('error');
    //formulario.appendChild(error);
    //desaparesca despues de 5 seg
    // setTimeout(()=>{
    //     error.remove();
    // },5000);
}
