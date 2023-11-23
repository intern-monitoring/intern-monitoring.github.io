const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get("mahasiswaId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
  mahasiswaId;
