function ConvertiraMillas(){
    var VKilometros = document.getElementById("Kilometros").value;

    // 1. Validamos primero si está vacío
    if(VKilometros.trim() === ""){
        alert("Por favor ingresa un número"); 
        return;
    }

    var kil = parseFloat(VKilometros);

    if (isNaN(kil)) {
        alert("Por favor ingresa un número válido");
        return;
    }

    
    if (kil <= 0) {
        alert("Por favor ingresa un número positivo (mayor a cero)");
        return;
    }

  
    var millas = kil * 0.62137; 
    document.getElementById("millas").value = millas.toFixed(2) + " millas";
}