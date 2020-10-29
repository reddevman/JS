/* 
estructuras secuenciales javascript
alumno: ALEJANDRO MÁRQUEZ ARAGONÉS
fecha: 22/10/20
*/
var hsm;
var hst;
hsm = prompt('Horas de estudio por la mañana:');
hst = prompt('Horas de estudio por la tarde:');
var hsd = parseInt(hsm) + parseInt(hst);
document.getElementById("parrafo").innerHTML = `Ha estudiado
${hsd} horas a lo largo del día`;

/* document.write('Ha estudiado ');
document.write(hsd);
document.write(' horas<br>');
document.write('(a lo largo del día)'); */