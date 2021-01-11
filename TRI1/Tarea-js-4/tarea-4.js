/* 
estructuras secuenciales y repetitivas javascript
además del do..while están el while y el for

alumno: ALEJANDRO MÁRQUEZ ARAGONÉS
fecha: 23/10/20
*/
var hsm;
var hst;

do {
  alert('Introduce números del 0 al 8');
  hsm = prompt('Horas de estudio por la mañana:');

  // Mientras, hsm sea menor que 0 y mayor que 8, no es válido por lo que sigue repitiendo el bucle
} while (hsm < 0 || hsm > 8);


/* USANDO VARIABLE EXTERNA (puede ser un valor booleano) dar por válido el dato del usuario
  var valido=0;
  do {
	  hsm=parseInt(prompt('Horas de estudio por la mañana:',''));
    if (hsm>=0&&hsm<=8) valido=1;
    else alert ('No ha introducido el valor correcto');
  } while(valido==0); */



do {
  alert('Introduce números del 0 al 8');
  hst = prompt('Horas de estudio por la tarde:');

  // Mientras, hsm sea menor que 0 y mayor que 8, no es válido por lo que sigue repitiendo el bucle
} while (hsm < 0 || hsm > 8);


  /* USANDO VARIABLE EXTERNA (puede ser un valor booleano) dar por válido el dato del usuario
  valido = 0;
  while(valido == 0) {
	  hst=parseInt(prompt('Horas de estudio por la tarde:',''));
    if (hst>=0&&hst<=8) valido=1;
    else alert ('No ha introducido el valor correcto');
  } */


var hsd = parseInt(hsm) + parseInt(hst);
var mensaje = 'Ha estudiado ' + hsd + ' horas<br>(a lo largo del día)';

if (hsm > hst) {
  var mensaje2 = '.<br>Ha estudiado más por la mañana';
} else {
  var mensaje2 = '.<br>Por la tarde estudió al menos tanto como por la mañana';
}

var valor = 1;
do {
  valor = prompt('Ingrese el nro. cero para mostrar el resultado:');
} while (valor != 0);

document.getElementById("ubicacion1").innerHTML = mensaje + mensaje2;