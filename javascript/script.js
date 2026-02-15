document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".projeto-card");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove classe ativa de todos e adiciona no clicado
      filters.forEach((btn) => btn.classList.remove("active"));
      filter.classList.add("active");

      const category = filter.getAttribute("data-filter");

      cards.forEach((card) => {
        if (
          category === "todos" ||
          card.getAttribute("data-category") === category
        ) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
