const urlParams = new URLSearchParams(window.location.search);
const seleksiMitraId = urlParams.get("seleksiMitraId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mitra?id=" +
  seleksiMitraId;
