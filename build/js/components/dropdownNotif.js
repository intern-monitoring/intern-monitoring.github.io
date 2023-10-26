document.addEventListener("DOMContentLoaded", () => {
  const notifDropdown = document.querySelector(".notif-dropdown");
  const notifToogle = document.getElementById("notif-dropdown-with-header");

  notifToogle.addEventListener("click", () => {
    notifDropdown.classList.toggle("opacity-100"); // Menambah atau menghapus kelas 'opacity-100'
    notifDropdown.classList.toggle("hidden"); // Menambah atau menghapus kelas 'hidden'
  });

  // Menyembunyikan dropdown saat mengklik di luar dropdown
  document.addEventListener("click", (event) => {
    const isClickInsideDropdown = notifDropdown.contains(event.target);
    const isClickInsideDropdownButton = notifToogle.contains(event.target);

    if (!isClickInsideDropdown && !isClickInsideDropdownButton) {
      notifDropdown.classList.remove("opacity-100");
      notifDropdown.classList.add("hidden");
    }
  });
  notifDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
