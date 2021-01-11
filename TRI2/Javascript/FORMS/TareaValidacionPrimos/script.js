function miFuncion() {
    let inputNumber = document.getElementById("val1");

    if (inputNumber.checkValidity()) {
        document.getElementById("data-validated").innerHTML = "TODO OK";
        if (esPrimo()) {
            document.getElementById("primo").innerHTML = `El número ${inputNumber} es PRIMO.`;
        } else {
            document.getElementById("primo").innerHTML = `El número ${inputNumber} NO es PRIMO.`;
        }
    } else {
        document.getElementById("data-validated").innerHTML = inputNumber.validationMessage;
    }
}

function esPrimo() {
    let inputNumber = document.getElementById("val1");

}