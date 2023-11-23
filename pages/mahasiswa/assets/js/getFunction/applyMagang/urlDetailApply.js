const urlParams = new URLSearchParams(window.location.search);
const applyId = urlParams.get("applyId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang/intermoni-mahasiswa-magang/seleksi?id=" +
  applyId;
