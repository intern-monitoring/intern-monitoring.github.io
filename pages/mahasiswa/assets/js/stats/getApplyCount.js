import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetApply =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

const applyCount = (count) => {
  const resultCountElement = document.getElementById("applyCount");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};

const getApply = (target_url) => {
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

      const applycount = jsonData.length;

      applyCount(applycount);
    })
    .catch((error) => console.log("error", error));
};
getApply(URLGetApply);
