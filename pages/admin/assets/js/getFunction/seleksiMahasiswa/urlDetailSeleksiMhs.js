const urlParams = new URLSearchParams(window.location.search);
const seleksiMhsId = urlParams.get("seleksiMhsId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa?id=" +
  seleksiMhsId;
