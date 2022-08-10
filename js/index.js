import { addTask } from './agregarTarea.js';
import { displayTasks } from './leerTarea.js';
//Inmediately Invoked Function Expression IIFE
(() => {
  //enlazamos el boton  y lo guardamos en una variable btn
  const btn = document.querySelector('[data-form-btn]');

  //Arrow functions o funciones flechas o funciones anonimas =>
  //escuchar un evento --> click
  btn.addEventListener('click', addTask);

  displayTasks();
})();
