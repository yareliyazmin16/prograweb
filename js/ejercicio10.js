function convertirTemperatura() {
    var inputCelsius = document.getElementById("celsius").value;
    
    if (inputCelsius === "" || isNaN(inputCelsius)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }
    
    var celsius = parseFloat(inputCelsius);
    var fahrenheit = (celsius * 9 / 5) + 32;
    
    document.getElementById("fahrenheit").value = fahrenheit + "°F";
}