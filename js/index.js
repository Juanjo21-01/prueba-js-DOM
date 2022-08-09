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
    const contenido = ` 
  <i class="fas fa-trash-alt trashIcon icon"></i>`;

    //tarea.innerHTML = contenido;
    tarea.appendChild(tareaContenido);

    const agregarLista = document.querySelector('[data-list]');
    agregarLista.appendChild(tarea);
  };

  //Arrow functions o funciones flechas o funciones anonimas =>
  //escuchar un evento --> click
  btn.addEventListener('click', createTask);

  const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
  };

  const completeTask = (event) => {
    const elemento = event.target;
    elemento.classList.toggle('fas');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');
  };
})();
