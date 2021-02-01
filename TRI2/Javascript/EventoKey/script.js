window.onkeydown = function (event) {
    if (event.keyCode === 112) {
        document.getElementById("texto").innerHTML = "F1 pulsada";
    } else if (event.keyCode !== 112) {
        document.getElementById("texto").style.display = "Pulsa F1 para ayuda";
    } else {
        document.getElementById("texto").style.display = "none";
    }
};