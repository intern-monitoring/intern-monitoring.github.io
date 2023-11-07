const urlParams = new URLSearchParams(window.location.search);
const magangId = urlParams.get("magangId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang?id=" +
  magangId;
