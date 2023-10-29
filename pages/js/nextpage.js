// Handle Next Button Click
const handleNextButtonClick = () => {
  const selectRole = document.getElementById("af-submit-app-category");
  const selectedRole = selectRole.value;

  if (selectedRole === "Mahasiswa") {
    window.location.href = "mahasiswa/signUpMahasiswa.html";
  } else if (selectedRole === "Mitra") {
    window.location.href = "mitra/signUpMitra.html";
  }
};
