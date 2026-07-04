function Convertiradollar(){

    var VarPesos =document.getElementById("Pesos").value; 

    if (VarPesos === "" ||isNaN (VarPesos)){
        alert ("Por favor ingrese un número valido"); 
        return; 

    }


    var pesos=parseFloat (VarPesos);

     if (pesos  <= 0) {
        alert("Por favor ingresa un número positivo (mayor a cero)");
        return;
    } 

    var tasa= 0.055; 
    var dollar = pesos * tasa ;

    document.getElementById("dollar").value = dollar.toFixed(2) + " dólares"; 

}