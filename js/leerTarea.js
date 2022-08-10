import { createTask } from './agregarTarea.js';
import elementoFecha from './elementoFecha.js';
import { unicaFecha } from './servicios/fecha.js';
//Leer tarea
export const readTasks = () => {
  const list = document.querySelector('[data-list]');
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const dates = unicaFecha(taskList);

  dates.forEach((date) => {
    
  });

  taskList.forEach((task) => {
    list.appendChild(elementoFecha(task.formatoFecha));
    list.appendChild(createTask(task));
  });
};
