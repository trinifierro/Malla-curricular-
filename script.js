document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (!ramo.classList.contains('bloqueado')) {
      ramo.classList.toggle('aprobado');
      actualizarBloqueos();
    }
  });
});

function actualizarBloqueos() {
  document.querySelectorAll('.ramo.bloqueado').forEach(ramo => {
    const prerqId = ramo.getAttribute('data-prerq');
    const prerq = document.querySelector(`.ramo[data-id="${prerqId}"]`);
    if (prerq && prerq.classList.contains('aprobado')) {
      ramo.classList.remove('bloqueado');
    }
  });
}
