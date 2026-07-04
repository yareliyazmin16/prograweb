function Verificar(){

    var VarEdad =document.getElementById("Edad").value; 

    if (VarEdad === "" ||isNaN (VarEdad)){
        alert ("Por favor ingrese un número valido"); 
        return; 

    }


    var edad=parseFloat (VarEdad);

     if (edad  <= 0) {
        alert("Por favor ingresa un número positivo (mayor a cero)");
        return;
    } 

     
    if (edad  <18) {
      document.getElementById("mensaje").value = "No puedes votar";
       
    } else {document.getElementById("mensaje").value = "Puedes votar";
    }

  

}