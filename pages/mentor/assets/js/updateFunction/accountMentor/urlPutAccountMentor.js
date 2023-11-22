const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

export const urlPUTEmail =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user-email?id=" +
  userId;

export const AmbilEmailResponse = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Email berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "profileMentor.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: result.message, // Menampilkan pesan error dari response API
    });
  }
};

// Password

export const urlPUTPassword =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user-password?id=" +
  userId;

export const AmbilPasswordResponse = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Password berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "profileMentor.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: result.message, // Menampilkan pesan error dari response API
    });
  }
};
