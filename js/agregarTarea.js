import checkComplete from './seleccionarIcono.js';
import eliminarIcono from './eliminarIcono.js';

//Agregar tarea
export const addTask = (evento) => {
  //quitar por defecto  el evento de recargar la pagina
  evento.preventDefault();
  const agregarLista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  //Agregar calentario
  const calendario = document.querySelector('[data-for-date]');

  const value = input.value;
  const fecha = calendario.value;
  const formatoFecha = moment(fecha).format('DD/MM/YYYY');

  //validar para agregar tarea
  if (value == '' || fecha == '') {
    return;
  }

  input.value = '';
  calendario.value = '';
  //guardar datos  en almacenamiento
  const taskObj = {
    value,
    formatoFecha,
  };

  //JSON.stringify <-- parseo de un json a string
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.push(taskObj);
  //JSON.stringify <-- parseo de un string a json
  localStorage.setItem('tasks', JSON.stringify(taskList));

  const tarea = createTask(taskObj);
  agregarLista.appendChild(tarea);
};

export const createTask = ({ value, formatoFecha }) => {
  const tarea = document.createElement('li');
  //le agregamos la clase
  tarea.classList.add('card');

  //backticks
  //volver dinamico el codigo html
  const tareaContenido = document.createElement('div');
  const dateElement = document.createElement('span');
  dateElement.innerHTML = formatoFecha;

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
