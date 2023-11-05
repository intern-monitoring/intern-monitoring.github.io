const urlParams = new URLSearchParams(window.location.search);
const mitraId = urlParams.get("mitraId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mitra?id=" +
  mitraId;
