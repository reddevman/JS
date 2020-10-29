let persona1 = prompt ("Introduce la edad de Persona1");
let persona2 = prompt ("Introduce la edad de Persona2");
if (persona1>persona2) {
    alert ("Persona1 es mayor");
    alert ("Se llevan " + (persona1-persona2) + " años de diferencia");
} else {
    alert ("Persona2 es mayor");
    alert ("Se llevan " + (persona2-persona1) + " años de diferencia");
}

/* PRUEBA 1
if (edad > 18) {
    document.getElementById("resultado").innerHTML = "Eres mayor de edad.";
} else document.getElementById("resultado").innerHTML = "No puedes pasar."; */

/* PRUEBA 2
let x = 39;
let y = parseInt(prompt("Introduce un valor", "0"));
let suma = x + y;
document.getElementById("resultado").innerHTML = suma; */