document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button button").addEventListener("click", clearForm);
    document.querySelector("#celsius input").addEventListener("input", convertFromCelsius);
    document.querySelector("#fahrenheit input").addEventListener("input", convertFromFahrenheit);
    document.querySelector("#kelvin input").addEventListener("input", convertFromKelvin);
});

function convertFromCelsius() {
    var celsius = parseFloat(document.querySelector("#celsius input").value);

    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;

    updateResults(fahrenheit, kelvin);
}

function convertFromFahrenheit() {
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit input").value);

    var celsius = (fahrenheit - 32) * 5 / 9;
    var kelvin = (fahrenheit + 459.67) * 5 / 9;

    updateResults(celsius, kelvin);
}

function convertFromKelvin() {
    var kelvin = parseFloat(document.querySelector("#kelvin input").value);

    var celsius = kelvin - 273.15;
    var fahrenheit = (kelvin * 9 / 5) - 459.67;

    updateResults(celsius, fahrenheit);
}

function updateResults(value1, value2) {
    document.querySelector("#fahrenheit input").value = value1.toFixed(1);
    document.querySelector("#kelvin input").value = value2.toFixed(1);
}

function clearForm() {
    document.querySelector("#celsius input").value = '';
    document.querySelector("#fahrenheit input").value = '';
    document.querySelector("#kelvin input").value = '';
}
