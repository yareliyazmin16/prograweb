const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (tipodeOp) => {

    //extraer los datos puesto por el usuario 
    const num1 = document.getElementById('numero1').value.trim();
    const num2 = document.getElementById('numero2').value.trim();
    const inputResultado = document.getElementById('resultado');


    //validacion de vacio
    if (num1 === '' || num2 === '') {
        Swal.fire({
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números para realizar la operación.',
            icon: 'error',
        });
        return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            title: 'Datos inválidos',
            text: 'Asegúrate de ingresar únicamente valores numéricos.',
            icon: 'error',
            confirmButtonColor: '#0d2839'
        });
        return;
    }

    let res;
    if (tipodeOp === 'suma') res = sumar(n1, n2);
    else if (tipodeOp === 'resta') res = restar(n1, n2);
    else if (tipodeOp === 'multiplicacion') res = multiplicar(n1, n2);
    else if (tipodeOp === 'division') res = dividir(n1, n2);

    if (typeof res === 'string' && res.includes('Error')) {
        Swal.fire({
            title: 'Error Matemático',
            text: res,
            icon: 'error',
            confirmButtonColor: '#0d2839'
        });
        inputResultado.value = '';
    } else {
        inputResultado.value = res;
    }
};

document.querySelectorAll('.boton-operacion').forEach(boton => {
    boton.addEventListener('click', () => {
        calcularOperacion(boton.getAttribute('data-op'));
    });
});