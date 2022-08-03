//enlazamos el boton  y lo guardamos en una variable btn
const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
  //quitar por defecto  el evento de recargar la pagina
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
};

//Arrow functions o funciones flechas o funciones anonimas =>
//escuchar un evento --> click
btn.addEventListener('click', createTask);
