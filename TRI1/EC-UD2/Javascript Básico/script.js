function datos(){

    var nombre = prompt('Introduce tu nombre');
    var apellido = prompt('Introduce tu apellido');
    var edad = prompt('Introduce tu edad');
    /*document.getElementById('nombre').innerHTML = nombre;
    document.getElementById('apellidos').innerHTML = apellido;
    document.getElementById('edad').innerHTML = edad;*/
    return nombre + " " + apellido + " tiene " + edad + " años.";
}
document.getElementById ('losdatos').innerHTML = datos();