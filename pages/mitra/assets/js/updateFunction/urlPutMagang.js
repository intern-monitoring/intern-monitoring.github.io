const urlParams = new URLSearchParams(window.location.search);
const magangId = urlParams.get("magangId");

export const urlPUT =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-update-magang?id=" +
  magangId;

export const AmbilResponse = (result) => {
  console.log(result); // menampilkan response API pada console
  Swal.fire({
    icon: "success",
    title: "Data berhasil diubah",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "daftarMagang.html";
  });
};
