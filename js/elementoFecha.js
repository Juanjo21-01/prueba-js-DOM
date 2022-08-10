export default (fecha) => {
  const dateElement = document.createElement('li');
  dateElement.classList.add('date');
  dateElement.innerHTML = fecha;

  return dateElement;
};
