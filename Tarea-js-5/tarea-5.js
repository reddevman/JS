/* 
condicional multiple javascript
uso del switch..case..default

alumno: ALEJANDRO MÁRQUEZ ARAGONÉS
fecha: 23/10/20
*/
var iniciales;
alert('--Ingresar las 2 primeras letras de un dia de la semana--');
alert('Introduce \'fin\' para acabar el programa');
do {
        iniciales = prompt('Ahora ingrese las 2 primeras letras de un dia de la semana:');
        switch (iniciales) {
                case 'lu':
                        document.write('lunes');
                        document.write('<br>');
                        break;
                case 'ma':
                        document.write('martes');
                        document.write('<br>');
                        break;
                case 'mi':
                        document.write('miercoles');
                        document.write('<br>');
                        break;
                case 'ju':
                        document.write('jueves');
                        document.write('<br>');
                        break;
                case 'vi':
                        document.write('viernes');
                        document.write('<br>');
                        break;
                case 'sa':
                        document.write('sabado');
                        document.write('<br>');
                        break;
                case 'do':
                        document.write('domingo');
                        document.write('<br>');
                        break;
                case 'fin':
                        document.write('<br> Fin del programa');
        }
        // FUNCIÓN para COMPARAR cadenas
} while (iniciales.localeCompare('fin'));