const urlParams = new URLSearchParams(window.location.search);
const reportId = urlParams.get("reportId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report?id=" +
  reportId;
