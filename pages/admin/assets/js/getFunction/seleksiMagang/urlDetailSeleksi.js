const urlParams = new URLSearchParams(window.location.search);
const seleksiId = urlParams.get("seleksiId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
  seleksiId;
