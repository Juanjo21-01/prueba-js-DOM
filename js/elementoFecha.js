export default (fecha) => {
  const elementoFecha = document.createElement('li');
  elementoFecha.classList.add('date');
  elementoFecha.innerHTML = fecha;

  return elementoFecha;
};
