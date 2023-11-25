const urlParams = new URLSearchParams(window.location.search);
const seleksiMagangId = urlParams.get("seleksiMagangId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
  seleksiMagangId;
