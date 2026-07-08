const crearGestorTareas = () => {
    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem('tareas');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    return {
        agregar: (texto) => {
            const tareas = obtenerTareas();
            tareas.push(texto);
            guardarTareas(tareas);
        },
        eliminar: (indice) => {
            const tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarTareas(tareas);
        },
        listar: () => obtenerTareas()
    };
};

const gestor = crearGestorTareas();

const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

function renderizarTareas() {
    listaTareas.innerHTML = '';
    const tareas = gestor.listar();

    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');
        li.classList.add('item-tarea');

        const span = document.createElement('span');
        span.textContent = tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar');

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: `Vas a borrar: "${tarea}"`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0d2839',
                cancelButtonColor: '#e74c3c',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    gestor.eliminar(indice);
                    renderizarTareas();
                    Swal.fire({
                        title: 'Eliminado',
                        text: 'La tarea fue borrada con éxito.',
                        icon: 'success',
                        confirmButtonColor: '#0d2839'
                    });
                }
            });
        });

        li.appendChild(span);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}

btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (texto === '') {
        Swal.fire({
            title: 'Campo vacío',
            text: 'Por favor escribe una descripción para la tarea.',
            icon: 'error',
            confirmButtonColor: '#0d2839'
        });
        return;
    }
    gestor.agregar(texto);
    inputTarea.value = '';
    renderizarTareas();
});

inputTarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnAgregar.click();
    }
});

document.addEventListener('DOMContentLoaded', renderizarTareas);