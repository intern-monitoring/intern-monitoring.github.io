const urlParams = new URLSearchParams(window.location.search);
const mitraId = urlParams.get("mitraId");

export const urlPUT =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mitra?id=" +
  mitraId;

export const AmbilResponse = (result) => {
  console.log(result); // menampilkan response API pada console
  Swal.fire({
    icon: "success",
    title: "Data berhasil diubah",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "profileMitra.html";
  });
};
