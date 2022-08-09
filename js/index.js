import checkComplete from './seleccionarIcono.js';
import eliminarIcono from './eliminarIcono.js';

//Inmediately Invoked Function Expression IIFE
(() => {
  //enlazamos el boton  y lo guardamos en una variable btn
  const btn = document.querySelector('[data-form-btn]');
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
    tarea.appendChild(tareaContenido);
    tarea.appendChild(eliminarIcono());
    const agregarLista = document.querySelector('[data-list]');
    agregarLista.appendChild(tarea);
  };

  //Arrow functions o funciones flechas o funciones anonimas =>
  //escuchar un evento --> click
  btn.addEventListener('click', createTask);
})();
