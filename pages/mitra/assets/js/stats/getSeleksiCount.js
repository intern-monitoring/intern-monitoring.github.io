import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetSeleksi =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

const seleksiBerkasCount = (count) => {
  const resultCountElement = document.getElementById("berkasCount");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};
const seleksiWawancaraCount = (count) => {
  const resultCountElement = document.getElementById("wawancaraCount");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};

const getSeleksi = (target_url) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonData = JSON.parse(result);

      const berkas = jsonData.filter((item) => item.seleksiberkas === 1).length;
      const wawancara = jsonData.filter(
        (item) => item.seleksiwewancara === 1
      ).length;

      seleksiBerkasCount(berkas);
      seleksiWawancaraCount(wawancara);
    })
    .catch((error) => console.log("error", error));
};
getSeleksi(URLGetSeleksi);
