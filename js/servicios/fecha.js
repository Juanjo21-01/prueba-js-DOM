export const unicaFecha = (tasks) => {
  const unica = [];

  tasks.forEach((tarea) => {
    if (!unica.includes(tarea.formatoFecha)) unica.push(tarea.formatoFecha);
  });

  return unica;
};

export const orderDates = (dates) => {
  return dates.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY');
    const secondDate = moment(b, 'DD/MM/YYYY');
    return firstDate - secondDate;
  });
};
