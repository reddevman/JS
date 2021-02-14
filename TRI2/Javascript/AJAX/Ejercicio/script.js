// Variables
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let temperature = document.querySelector(".temperature");

// Evento escuchando cuando se hace click en el botón
document.querySelector("#btn-submit").addEventListener("click", getWeatherData, false);

// Función que captura la información de la API
function getWeatherData() {
    // Capturar selección actual del select en HTML
    let cities = document.querySelector("#cities");
    let selectedCityID = cities.options[cities.selectedIndex].value;
    let selectedCityName = cities.options[cities.selectedIndex].text;

    // Método fetch que se comunica con la API mediante AJAX
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + selectedCityID + '&appid=efe55429af07a5a65c4c7ebbfa33c8fe')
        // Una vez se realiza la comunicación, entonces se ejecuta la función que recoge el JSON
        .then(function (resp) {
            return resp.json()
        })
        // Y entonces se ejecuta la función que pinta la información en el html
        .then(function (data) {
            drawWeather(data, selectedCityName);
        })
        .catch(function () {
            // console.log("Error");
        });
}

function drawWeather(data, selectedCityName)
{
    // Convertir de fahrenheit que viene por defecto a celsius
    let celcius = Math.round(parseFloat(data.main.temp) - 273.15);
    // Recogemos la descripción del tiuempo actual
    let description = data.weather[0].description;
    // Recogemos el icono del tiempo actual y se construye la url que se insertará en el html
    let icon = data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    document.querySelector(".name").innerHTML = selectedCityName;
    document.querySelector(".text").innerHTML = "El tiempo en conversión en grados Celsius es:";
    document.querySelector(".temperature").innerHTML = `Temperatura: ${celcius} ºC`;
    document.querySelector(".description").innerHTML = description;
    document.querySelector("#icon").setAttribute("src", iconurl);
}