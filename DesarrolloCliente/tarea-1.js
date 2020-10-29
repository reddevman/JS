/* 
fichero con codigo javascript
alumno:
fecha:
*/

var cad1 = prompt("Ingrese un mensaje:");
alert(cad1 + " (es el mensaje que usted acaba de ingresar)");
cad2 = "Gracias por decirnos: " + cad1;
document.getElementById("ubicacion1").innerHTML = cad2;