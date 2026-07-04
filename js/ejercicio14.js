function Calcular() {
    var CadenaEntrada = document.getElementById("Numeros").value;

    if (CadenaEntrada.trim() === "") {
        alert("Por favor ingresa una serie de números separados por comas");
        return;
    }

    var arregloTexto = CadenaEntrada.split(","); 

    var numeros = arregloTexto.map(Number); 


    for (var i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            alert("Por favor asegúrate de ingresar solo números separados por comas");
            return;
        }
    }

    var maximo = Math.max(...numeros); 
    var minimo = Math.min(...numeros); 

    var suma = numeros.reduce((acc, valor) => acc + valor, 0);
    var promedio = suma / numeros.length;

    document.getElementById("numayor").value = maximo;
    document.getElementById("numenor").value = minimo;
    document.getElementById("promedio").value = promedio.toFixed(2); // Redondeado a 2 decimales
}