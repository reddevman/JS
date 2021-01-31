"use strict";

function cambiarColor() {
    var parrafo = document.getElementById("parrafo");
    // Se recoge en una variable el valor de la propiedad estilo "color" de CSS
    // Devuelve un string
    var styleP = window.getComputedStyle(parrafo).getPropertyValue("color");

    // Recoger en una variable el color de fondo del body
    var styleBody = window.getComputedStyle(document.body).getPropertyValue("background-color");

    // Condicional para alternar los colores ante la pulsación del botón que lleve la función
    if (styleBody === "rgb(255, 255, 255)") {
        document.getElementById("parrafo").style.color = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = "rgb(65, 105, 225)";
    } else {
        document.getElementById("parrafo").style.color = "rgb(65, 105, 225)";
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }
}

function aumentarFuente() {
    var parrafo = document.getElementById("parrafo");
    // Se recoge en una variable el valor de la propiedad estilo "color" de CSS
    // Devuelve un string
    var styleP = window.getComputedStyle(parrafo).getPropertyValue("font-size");

    // Se debe convertir el string que a un número entero o decimal, es igual
    var currentSize = parseInt(styleP);

    // Aumentamos el párrafo en 1 px cada vez que le demos al botón
    parrafo.style.fontSize = (currentSize + 1) + "px";

}

function reducirFuente() {
    var parrafo = document.getElementById("parrafo");
    // Se recoge en una variable el valor de la propiedad estilo "color" de CSS
    // Devuelve un string
    var styleP = window.getComputedStyle(parrafo).getPropertyValue("font-size");

    // Se debe convertir el string que a un número entero o decimal, es igual
    var currentSize = parseInt(styleP);

    // Reducimos el párrafo en 1 px cada vez que le demos al botón
    parrafo.style.fontSize = (currentSize - 1) + "px";

}

function aumentarFuenteMax60px() {
    var parrafo = document.getElementById("parrafo");
    // Se recoge en una variable el valor de la propiedad estilo "color" de CSS
    // Devuelve un string
    var styleP = window.getComputedStyle(parrafo).getPropertyValue("font-size");

    // Se debe convertir el string que a un número entero o decimal, es igual
    var currentSize = parseInt(styleP);

    // Se aumentará el tamaño mientras currentSize sea menor o igual que 55
    if (currentSize < 60) {
        parrafo.style.fontSize = (currentSize + 1) + "px";
    } else {
        alert("Se alcanzó el límite de 60px para aumentar la fuente.");
    }
}

function reducirFuenteMin40px() {
    var parrafo = document.getElementById("parrafo");
    // Se recoge en una variable el valor de la propiedad estilo "color" de CSS
    // Devuelve un string
    var styleP = window.getComputedStyle(parrafo).getPropertyValue("font-size");

    // Se debe convertir el string que a un número entero o decimal, es igual
    var currentSize = parseInt(styleP);

    // Se reducirá el tamaño mientras currentSize sea menor o igual que 40
    if (currentSize > 40) {
        parrafo.style.fontSize = (currentSize - 1) + "px";
    } else {
        alert("Se alcanzó el límite de 40px para disminuir la fuente.");
    }
}