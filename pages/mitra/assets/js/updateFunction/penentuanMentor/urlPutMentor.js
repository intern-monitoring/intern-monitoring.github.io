const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get("mahasiswaId");

export const urlPUT =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
  mahasiswaId;

export const AmbilResponse = (result) => {
  console.log(result); // menampilkan response API pada console
  Swal.fire({
    icon: "success",
    title: "Data berhasil diubah",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.href = "pemilihanMentor.html";
  });
};
