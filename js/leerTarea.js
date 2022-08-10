import { createTask } from './agregarTarea.js';
import dateElement from './elementoFecha.js';
import { unicaFecha } from './servicios/fecha.js';
//Leer tarea
export const displayTasks = () => {
  const list = document.querySelector('[data-list]');
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const dates = unicaFecha(taskList);

  dates.forEach((date) => {
    const dateMoment = moment(date, 'DD/MM/YYYY');
    list.appendChild(dateElement(date));

    taskList.forEach((task) => {
      const taskDate = moment(task.formatoFecha, 'DD/MM/YYYY');
      //list.appendChild(dateElement(task.formatoFecha));
      const diff = dateMoment.diff(taskDate);
      if (diff == 0) {
        list.appendChild(createTask(task));
      }
    });
  });
};
