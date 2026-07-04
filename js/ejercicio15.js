var listaEstudiantes = [];

function agregarEstudiante() {
    var inputNombre = document.getElementById("nombreEstudiante").value;
    var inputCalificacion = document.getElementById("calificacionEstudiante").value;

    if (inputNombre.trim() === "" || inputCalificacion.trim() === "") {
        alert("Por favor rellena tanto el nombre como la calificación");
        return;
    }

    var nota = parseFloat(inputCalificacion);

    if (isNaN(nota) || nota < 0) {
        alert("Por favor ingresa una calificación valida");
        return;
    }

    var nuevoEstudiante = {
        nombre: inputNombre.trim(),
        calificacion: nota
    };

    listaEstudiantes.push(nuevoEstudiante);

    alert("Estudiante " + nuevoEstudiante.nombre + " agregado correctamente.");
    document.getElementById("nombreEstudiante").value = "";
    document.getElementById("calificacionEstudiante").value = "";
}

function calcularPromedios() {
    if (listaEstudiantes.length === 0) {
        alert("Aún no has agregado ningún estudiante a la lista");
        return;
    }

    var sumaTotal = 0;
    for (var i = 0; i < listaEstudiantes.length; i++) {
        sumaTotal = sumaTotal + listaEstudiantes[i].calificacion;
    }
    var promedioGlobal = sumaTotal / listaEstudiantes.length;

var alumnoMasAlto = listaEstudiantes[0];
    var alumnoMasBajo = listaEstudiantes[0];

    for (var j = 1; j < listaEstudiantes.length; j++) {
        
        if (listaEstudiantes[j].calificacion > alumnoMasAlto.calificacion) {
            alumnoMasAlto = listaEstudiantes[j];
        }

        if (listaEstudiantes[j].calificacion < alumnoMasBajo.calificacion) {
            alumnoMasBajo = listaEstudiantes[j];
        }
    }

   document.getElementById("promedio").value = promedioGlobal.toFixed(2);
    document.getElementById("masAlta").value = alumnoMasAlto.nombre + " Con una calificación de" + " " + alumnoMasAlto.calificacion ;
    document.getElementById("masBaja").value = alumnoMasBajo.nombre + " Con una calificación de " + " " + alumnoMasBajo.calificacion ;
}