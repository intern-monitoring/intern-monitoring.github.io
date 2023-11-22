const urlParams = new URLSearchParams(window.location.search);
const pembimbingId = urlParams.get("pembimbingId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-pembimbing?id=" +
  pembimbingId;
