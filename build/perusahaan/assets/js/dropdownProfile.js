document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".hs-dropdown-menu");
  var toggleButton = document.getElementById("hs-dropdown-with-header");

  toggleButton.addEventListener("click", function () {
    dropdown.classList.toggle("opacity-100");
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    var isClickInsideDropdown = dropdown.contains(event.target);
    var isClickInsideToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideDropdown && !isClickInsideToggleButton) {
      dropdown.classList.remove("opacity-100");
      dropdown.classList.add("hidden");
    }
  });

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
