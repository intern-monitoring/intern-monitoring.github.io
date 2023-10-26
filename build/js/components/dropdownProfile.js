document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown-profile");
  const toggleButton = document.getElementById("hs-dropdown-with-header");

  toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle("opacity-100");
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isClickInsideToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideDropdown && !isClickInsideToggleButton) {
      dropdown.classList.remove("opacity-100");
      dropdown.classList.add("hidden");
    }
  });

  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
