const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

export const urlPUTEmail =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user-email?id=" +
  userId;

export const AmbilEmailResponse = (result) => {
  console.log(result); // menampilkan response API pada console
  Swal.fire({
    icon: "success",
    title: "Email berhasil diubah",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "profileMitra.html";
  });
};
