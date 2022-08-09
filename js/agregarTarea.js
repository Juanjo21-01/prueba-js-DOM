import checkComplete from './seleccionarIcono.js';
import eliminarIcono from './eliminarIcono.js';

//Agregar tarea
export const addTask = (evento) => {
  const agregarLista = document.querySelector('[data-list]');
  const tarea = createTask(evento);
  agregarLista.appendChild(tarea);
};

const createTask = (evento) => {
  //quitar por defecto  el evento de recargar la pagina
  evento.preventDefault();

  //JSON.stringify <-- parseo de un json a string
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  input.value = '';
  const tarea = document.createElement('li');
  //le agregamos la clase
  tarea.classList.add('card');
  //backticks
  //volver dinamico el codigo html
  const tareaContenido = document.createElement('div');

  //Agregar calentario
  const calendario = document.querySelector('[data-for-date]');
  const fecha = calendario.value;
  const formatoFecha = moment(fecha).format('DD/MM/YYYY');
  const dateElement = document.createElement('span');
  dateElement.innerHTML = formatoFecha;

  //guardar datos  en almacenamiento
  const taskObj = {
    value,
    formatoFecha,
  };

  taskList.push(taskObj);

  //JSON.stringify <-- parseo de un string a json
  localStorage.setItem('tasks', JSON.stringify(taskList));

  tareaContenido.appendChild(checkComplete());
  const tituloTarea = document.createElement('span');
  tituloTarea.classList.add('task');
  tituloTarea.innerText = value;
  tareaContenido.appendChild(tituloTarea);
  //tarea.innerHTML = contenido;

  tarea.appendChild(tareaContenido);
  tarea.appendChild(dateElement);
  tarea.appendChild(eliminarIcono());
  return tarea;
};
