import { displayTasks } from './leerTarea.js';
//ELIMINAR ICONO
const eliminarIcono = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => eliminarTarea(id));
  return i;
};

const eliminarTarea = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id == id);
  const li = document.querySelector('[data-list]');

  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  li.innerHTML = '';

  displayTasks();
};

export default eliminarIcono;
