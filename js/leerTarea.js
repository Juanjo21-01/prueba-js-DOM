import { createTask } from './agregarTarea.js';
//Leer tarea
export const readTasks = () => {
  const list = document.querySelector('[data-list]');
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

  taskList.forEach((task) => {
    list.appendChild(createTask(task));
  });
};
