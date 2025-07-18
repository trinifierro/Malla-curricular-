function toggleRamoConPrer(element) {
  if (element.classList.contains("bloqueado")) return;

  element.classList.toggle("aprobado");

  // Revisar todos los ramos bloqueados para ver si se pueden activar
  document.querySelectorAll(".ramo.bloqueado").forEach(ramo => {
    const prerId = ramo.dataset.prer;
    const prerRamo = document.querySelector(`.ramo[data-id="${prerId}"]`);
    if (prerRamo && prerRamo.classList.contains("aprobado")) {
      ramo.classList.remove("bloqueado");
    }
  });
}
