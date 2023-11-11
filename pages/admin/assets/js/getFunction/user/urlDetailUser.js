const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user?id=" +
  userId;
