import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetSeleksiKampus =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa";

const seleksiKampusLolosCount = (count) => {
  const resultCountElement = document.getElementById("seleksiKampusLolosCount");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};
const seleksiKampusTidakLolosCount = (count) => {
  const resultCountElement = document.getElementById(
    "seleksiKampusTidakLolosCount"
  );
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};

const getSeleksiKampus = (target_url) => {
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

      const lolosCount = jsonData.filter(
        (item) => item.seleksikampus === 1
      ).length;
      const tidaklolosCount = jsonData.filter(
        (item) => item.seleksikampus === 2
      ).length;

      seleksiKampusLolosCount(lolosCount);
      seleksiKampusTidakLolosCount(tidaklolosCount);
    })
    .catch((error) => console.log("error", error));
};
getSeleksiKampus(URLGetSeleksiKampus);
