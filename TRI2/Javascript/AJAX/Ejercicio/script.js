
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let temperature = document.querySelector(".temperature");

document.querySelector("#btn-submit").addEventListener("click", getWeatherData, false);

function getWeatherData() {
    // Capturar selección actual del select en HTML
    let cities = document.querySelector("#cities");
    let selectedCityID = cities.options[cities.selectedIndex].value;
    let selectedCityName = cities.options[cities.selectedIndex].text;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + selectedCityID + '&appid=efe55429af07a5a65c4c7ebbfa33c8fe')
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawWeather(data, selectedCityName);
        })
        .catch(function () {
            // console.log("Error");
        });
}

function drawWeather(data, selectedCityName) {
    let celcius = Math.round(parseFloat(data.main.temp) - 273.15);
    let description = data.weather[0].description;

    document.querySelector(".name").innerHTML = selectedCityName;
    document.querySelector(".text").innerHTML = "El tiempo en conversión en grados Celsius es:";
    document.querySelector(".temperature").innerHTML = `Temperatura: ${celcius} ºC`;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".icon").setAttribute(src, icon);
}