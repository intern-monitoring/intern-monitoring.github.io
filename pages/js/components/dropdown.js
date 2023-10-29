const toggleProfileDropdown = () => {
  const dropdown = document.querySelector(".dropdown-profile");
  dropdown.classList.toggle("opacity-100");
  dropdown.classList.toggle("hidden");
};

const toggleNotifikasiDropdown = () => {
  const notifDropdown = document.querySelector(".notif-dropdown");
  notifDropdown.classList.toggle("opacity-100");
  notifDropdown.classList.toggle("hidden");
};
