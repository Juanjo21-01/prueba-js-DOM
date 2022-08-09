import checkComplete from './seleccionarIcono.js';
import eliminarIcono from './eliminarIcono.js';

//Inmediately Invoked Function Expression IIFE
(() => {
  //enlazamos el boton  y lo guardamos en una variable btn
  const btn = document.querySelector('[data-form-btn]');

  const addTask = (evento) => {
    const agregarLista = document.querySelector('[data-list]');
    const tarea = createTask(evento);
    agregarLista.appendChild(tarea);
  };

  const createTask = (evento) => {
    //quitar por defecto  el evento de recargar la pagina
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = '';
    const tarea = document.createElement('li');
    //le agregamos la clase
    tarea.classList.add('card');
    //backticks
    //volver dinamico el codigo html
    const tareaContenido = document.createElement('div');
    tareaContenido.appendChild(checkComplete());
    const tituloTarea = document.createElement('span');
    tituloTarea.classList.add('task');
    tituloTarea.innerText = value;
    tareaContenido.appendChild(tituloTarea);
    //tarea.innerHTML = contenido;

    //Agregar calentario
    const calendario = document.querySelector('[data-for-date]');
    const fecha = calendario.value;
    const formatoFecha = moment(fecha).format('DD/MM/YYYY');
    const dateElement = document.createElement('span');
    dateElement.innerHTML = formatoFecha;

    tarea.appendChild(tareaContenido);
    tarea.appendChild(dateElement);
    tarea.appendChild(eliminarIcono());
    return tarea;
  };

  //Arrow functions o funciones flechas o funciones anonimas =>
  //escuchar un evento --> click
  btn.addEventListener('click', addTask);
})();
