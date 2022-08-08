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
  const contenido = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;

  tarea.innerHTML = contenido;

  const agregarLista = document.querySelector('[data-list]');
  agregarLista.appendChild(tarea);
};

//Arrow functions o funciones flechas o funciones anonimas =>
//escuchar un evento --> click
btn.addEventListener('click', createTask);
