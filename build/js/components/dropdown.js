// File: dropdowns.js

const profileDropdown = () => {
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
};

const notifikasiDropdown = () => {
  const notifDropdown = document.querySelector(".notif-dropdown");
  const notifToggle = document.getElementById("notif-dropdown-with-header");

  notifToggle.addEventListener("click", () => {
    notifDropdown.classList.toggle("opacity-100");
    notifDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideDropdown = notifDropdown.contains(event.target);
    const isClickInsideDropdownButton = notifToggle.contains(event.target);

    if (!isClickInsideDropdown && !isClickInsideDropdownButton) {
      notifDropdown.classList.remove("opacity-100");
      notifDropdown.classList.add("hidden");
    }
  });

  notifDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  profileDropdown();
  notifikasiDropdown();
});
