document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const prer = ramo.dataset.prer;

    if (estado[id] === "aprobado") {
      ramo.classList.add("aprobado");
    }

    if (prer && estado[prer] !== "aprobado") {
      ramo.classList.add("bloqueado");
    }

    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");

      estado[id] = ramo.classList.contains("aprobado") ? "aprobado" : "pendiente";
      localStorage.setItem("estadoRamos", JSON.stringify(estado));

      ramos.forEach(r => {
        const prereq = r.dataset.prer;
        const prereqAprobado = estado[prereq] === "aprobado";
        if (prereq && prereqAprobado) {
          r.classList.remove("bloqueado");
        } else if (prereq && !prereqAprobado) {
          r.classList.add("bloqueado");
        }
      });
    });
  });
});
