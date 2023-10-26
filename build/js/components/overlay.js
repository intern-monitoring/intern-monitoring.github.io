document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggleButton = document.getElementById("sidebar-toggle-button");
  const sidebar = document.getElementById("application-sidebar");
  const closeSidebarButton = document.getElementById("close-sidebar-button");

  sidebarToggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });

  closeSidebarButton.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });
});
