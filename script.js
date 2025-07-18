document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  // Recuperar estado guardado
  const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const prer = ramo.dataset.prer;

    // Aplicar estado guardado
    if (estado[id] === "aprobado") {
      ramo.classList.add("aprobado");
    }

    // Inicialmente bloquear si tiene prerrequisitos y aún no aprobado
    if (prer && estado[prer] !== "aprobado") {
      ramo.classList.add("bloqueado");
    }

    // Evento de clic
    ramo.addEventListener("click", () => {
      // No hacer nada si está bloqueado
      if (ramo.classList.contains("bloqueado")) return;

      // Toggle clase aprobado
      ramo.classList.toggle("aprobado");

      // Guardar estado
      estado[id] = ramo.classList.contains("aprobado") ? "aprobado" : "pendiente";
      localStorage.setItem("estadoRamos", JSON.stringify(estado));

      // Verificar desbloqueo de otros ramos
      ramos.forEach(r => {
        const prereq = r.dataset.prer;
        if (prereq && estado[prereq] === "aprobado") {
          r.classList.remove("bloqueado");
        } else if (prereq && estado[prereq] !== "aprobado") {
          r.classList.add("bloqueado");
        }
      });
    });
  });
});
