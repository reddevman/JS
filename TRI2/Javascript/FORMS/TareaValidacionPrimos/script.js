function miFuncion()
{
    let inputNumber = document.getElementById("val1");
    let txtValidated = document.getElementById("data-validated");
    let txtPrimo = document.getElementById("primo");

    // Comprobar mediante condición si el valor input es válido
    // Presenta un mensaje de error si no es válido !
  if (!inputNumber.checkValidity()) {
    txtValidated.innerHTML = inputNumber.validationMessage;
  } else {
      txtValidated.innerHTML = "Input OK.";

      // Condición que se hará cuando el input sea válido
      if (esPrimo()) {
          txtPrimo.innerHTML = "Es primo.";
      } else {
        txtPrimo.innerHTML = "NO es primo."
      }
  }
}

function esPrimo() {
    let inputNumber = document.getElementById("val1").value;
    
    // No es primo el 0, el 1 ni el 4
    if (inputNumber == 0 || inputNumber == 1 || inputNumber == 4) return false;

    // Un número es primo es si NO es divisible (resto = 0)
    for (let i = 2; i < inputNumber / 2; i++) {
		if (inputNumber % i == 0) return false;
    }
    return true;
}
