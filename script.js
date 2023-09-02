const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      remove_active_class_from_all_panels();
      panel.classList.add("active");
    }
  });
});

function remove_active_class_from_all_panels() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
