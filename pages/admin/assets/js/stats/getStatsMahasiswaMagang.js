import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetMahasiswaMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

const mahsaiswaMagangCount = (count) => {
  const resultCountElement = document.getElementById("mahasiswaMagang");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};

const getMahasiswaMagang = (target_url) => {
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

      const mhsCount = jsonData.filter((item) => item.status === 1).length;

      mahsaiswaMagangCount(mhsCount);
    })
    .catch((error) => console.log("error", error));
};
getMahasiswaMagang(URLGetMahasiswaMagang);
