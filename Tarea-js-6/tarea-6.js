let saldo;
let coste;
let validado = false;
let destino;
let malDestino;

alert('Carga de bonobús, el mínimo debe ser entre 1 y 10 €');

do {
        saldo = parseInt(prompt('¿Cuánto quieres cargar:'));
        if (saldo >= 1 && saldo <= 10) {
                alert(`Ha recargado ${saldo} euro/s`);
                validado = true;
        } else alert('Recuerde, debe recargar entre 1 y 10 €');
} while (validado == false);

malDestino = true;
do {
        destino = prompt('¿Dónde va? \n Mijas (1€), Marbella (2€), Otro (3€)');

        switch (destino) {
                case 'Mijas':
                        coste = 1;
                        alert('Ha elegido Mijas.');
                        malDestino = true;
                        break;
                case 'Marbella':
                        coste = 2;
                        alert('Ha elegido Marbella.');
                        malDestino = true;
                        break;
                case 'Otro':
                        coste = 3;
                        alert('Ha elegido Otro.');
                        malDestino = true;
                        break;

                default:
                        malDestino = false;
                        break;
        }

        //saldo -= coste;
        if ((saldo - coste) >= 0) {
                saldo -= coste;
        } else {
                alert('El saldo es menor que el necesario ' + saldo + ' por lo que no puedes viajar allí.');
        }

        if (!malDestino) {
                alert('Introduzca otro destino válido');
        }


} while (saldo > 0);