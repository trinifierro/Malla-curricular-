document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const prereqs = (ramo.dataset.prer || "").split(",").filter(p => p);

    if (estado[id] === "aprobado") {
      ramo.classList.add("aprobado");
    }

    if (prereqs.some(pr => estado[pr] !== "aprobado")) {
      ramo.classList.add("bloqueado");
    }

    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");
      estado[id] = ramo.classList.contains("aprobado") ? "aprobado" : "pendiente";
      localStorage.setItem("estadoRamos", JSON.stringify(estado));

      ramos.forEach(r => {
        const reqs = (r.dataset.prer || "").split(",").filter(p => p);
        if (reqs.length === 0) return;

        const todosAprobados = reqs.every(pr => estado[pr] === "aprobado");
        if (todosAprobados) {
          r.classList.remove("bloqueado");
        } else {
          r.classList.add("bloqueado");
        }
      });
    });
  });
});
