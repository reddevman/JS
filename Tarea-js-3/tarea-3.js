/* 
estructuras secuenciales javascript
alumno: ALEJANDRO MÁRQUEZ ARAGONÉS
fecha: 22/10/20
*/
  var cadena = " cadena rodeada de espacios    ";
  var numero = parseInt(cadena);
  document.getElementById("cadena1").innerHTML = numero;
  //document.write('La cadena ***'+cadena+'*** equivale al número '+numero+'<br>');

  var cadena = "cadena NO rodeada de espacios";
  var numero = parseInt(cadena);
  document.getElementById("cadena2").innerHTML = numero;
  //document.write('La cadena ***'+cadena+'*** equivale al número '+numero+'<br>');

  var cadena = " 1 cadena rodeada de espacios empieza con digito numerico.";
  var numero = parseInt(cadena);
  document.getElementById("cadena3").innerHTML = numero;
  //document.write('La cadena ***'+cadena+'*** equivale al número '+numero+'<br>');

  var cadena = "1024cadena empieza con digito numerico decimal normal";
  var numero = parseInt(cadena);
  document.getElementById("cadena4").innerHTML = numero;
  //document.write('La cadena ***'+cadena+'*** equivale al número '+numero+'<br>');

  var cadena = "075-0 cadena empieza con digito cero la toma como octal";
  var numero = parseInt(cadena);
  document.getElementById("cadena5").innerHTML = numero;
  //document.write('La cadena ***'+cadena+'*** equivale al número '+numero+'<br>');
  numero*=2;
  document.getElementById("cadena6").innerHTML = numero;
  //document.write('(pero esta característica no funciona siempre bien porque está en desuso)');

  var cadena = "0xA39B cadena empieza con digito cero equis la toma como hexadecimal";
  var numero = parseInt(cadena);
  document.getElementById("cadena7").innerHTML = numero;
  //document.write('La cadena ***'+cadena+'*** equivale al número '+numero+'<br>');

