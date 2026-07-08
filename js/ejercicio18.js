const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'bg-dark', 'text-white', 'mb-2');
        li.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');

        botonEliminar.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);
        
        input.value = '';
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});