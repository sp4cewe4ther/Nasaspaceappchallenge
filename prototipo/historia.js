const secciones = document.querySelectorAll('main > section');
let index = 0;

const btnSiguiente = document.getElementById('siguiente');
const btnAnterior = document.getElementById('anterior');

function mostrarSeccion(n) {
  secciones.forEach((sec, i) => {
    sec.style.display = i === n ? 'flex' : 'none';
  });

  if (n === secciones.length - 1) {
    btnSiguiente.style.display = 'none';
  } else {
    btnSiguiente.style.display = 'inline-block';
  }

  if (n === 0) {
    btnAnterior.style.display = 'none'; 
  } else {
    btnAnterior.style.display = 'inline-block';
  }
}
mostrarSeccion(index);
btnSiguiente.addEventListener('click', () => {
  if (index < secciones.length - 1) {
    index++;
    mostrarSeccion(index);
  }
});
btnAnterior.addEventListener('click', () => {
  if (index > 0) {
    index--;
    mostrarSeccion(index);
  }
});