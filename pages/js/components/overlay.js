const setupSidebar = () => {
  const sidebarToggleButton = document.getElementById("sidebar-toggle-button");
  const sidebar = document.getElementById("application-sidebar");

  const toggleSidebar = (event) => {
    event.stopPropagation(); // Menghentikan event klik dari menyebar ke dokumen
    sidebar.classList.toggle("hidden");
  };

  const closeSidebar = (event) => {
    const { target } = event;
    // Periksa apakah yang diklik bukanlah bagian dari sidebar atau tombol toggle
    if (target !== sidebar) {
      // Sembunyikan sidebar jika tidak diklik di dalam sidebar atau tombol toggle
      sidebar.classList.add("hidden");
    }
  };

  // Event listener untuk mencegah event klik di dalam sidebar dari menyebar ke dokumen
  sidebarToggleButton.addEventListener("click", toggleSidebar);
  document.addEventListener("click", closeSidebar);
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

document.addEventListener("DOMContentLoaded", setupSidebar);
