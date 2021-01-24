"use strict";

function regexDni() {
  var inputTexto = document.getElementById("inputDni").value;
  // ^ no puede haber nada por delante
  // [a-zA-Z] rango de la a a la z mayus y minus y un sólo carácter
  // -[0-9]{8,8} guión seguido de números del 0 al 9 y 8 dígitos obligatoriamente
  // $ no puede haber nada más por detrás
  // g es la flag global, no obligatoria
  var regEx = /^[a-zA-Z]-[0-9]{8,8}$/g;
  var res = regEx.test(inputTexto);

  if (res) {
    document.getElementById("resultado").innerHTML =
      "El DNI es válido usando la siguiente expresión regular: <b>/^[a-zA-Z]-[0-9]{8,8}$/g</b>";
  } else {
    document.getElementById("resultado").innerHTML =
      "<b>DNI no válido</b>, la forma correcta es la siguiente: A-12345678";
  }
}

function regexFrase() {
  var inputTexto = document.getElementById("inputFrase").value;
  var regEx = /^[A-Z]{1}[\w,]*\.{1}$/;
  var res = regEx.test(inputTexto);

  if (res) {
    document.getElementById("resultado2").innerHTML =
      "Frase alfanumérica válida usando la siguiente expresión regular: <b>/^[A-Z]{1}[w,]*.{1}$/</b>";
  } else {
    document.getElementById("resultado2").innerHTML =
      "<b>Frase no válida</b>, la forma correcta es la siguiente: Frase alfanumerica, comienzo mayusculas, posibles comas y punto final.";
  }
}

function regexNombre() {
  var inputTexto = document.getElementById("inputNombre").value;
  var regEx = /([A-Z]{1}[\w\s]{2,4})/g;
  var res = regEx.test(inputTexto);

  if (res) {
    document.getElementById("resultado3").innerHTML =
      "Nombre válido usando la siguiente expresión regular: <b>/([A-Z]{1}[\w\s]{2,4})/</b>";
  } else {
    document.getElementById("resultado3").innerHTML =
      "<b>Nombre no válido</b>, la forma correcta es la siguiente: Un nombre (al menos 2 palabras y maximo 4, cada una empieza con una mayuscula, separadas por al menos un espacio).";
  }
}
