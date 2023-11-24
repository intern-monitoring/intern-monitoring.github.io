const urlParams = new URLSearchParams(window.location.search);
const reportId = urlParams.get("reportId");

export const urlFetch =
  "pages/mahasiswa/assets/js/getFunction/applyMagang/fetchDetailApply.js pages/mahasiswa/assets/js/getFunction/applyMagang/detailApply.js pages/mahasiswa/assets/js/getFunction/applyMagang/getApply.js pages/mahasiswa/assets/js/getFunction/applyMagang/getApplyFunction.js pages/mahasiswa/assets/js/getFunction/applyMagang/urlDetailApply.js?id=" +
  reportId;
