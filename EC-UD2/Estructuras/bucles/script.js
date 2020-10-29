let suma = 0;
let n = prompt ("Introduce un número");

while (n!=999) {
    suma += n;
    
}
if (n==suma) {
    alert ("EL número es igual a 999");
}
suma -= 999;
alert ("La suma es " + suma);