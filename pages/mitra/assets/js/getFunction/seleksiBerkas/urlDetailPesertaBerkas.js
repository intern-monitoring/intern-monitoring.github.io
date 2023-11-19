const urlParams = new URLSearchParams(window.location.search);
const pesertaId = urlParams.get("pesertaId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
  pesertaId;
