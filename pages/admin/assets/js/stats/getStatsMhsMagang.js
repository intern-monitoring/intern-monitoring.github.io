import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetMahasiswaMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

const mahasiswaLolosCount = (count) => {
  const resultCountElement = document.getElementById("mahasiswaLolosCount");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};
const mahasiswaTidakLolosCount = (count) => {
  const resultCountElement = document.getElementById(
    "mahasiswaTidakLolosCount"
  );
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};
// const mahasiswaMagangCount = (count) => {
//   const resultCountElement = document.getElementById("mahasiswaMagangCount");
//   resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
// };

const get = (target_url, responseFunction) => {
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
      responseFunction(jsonData);

      const lolosCount = jsonData.filter((item) => item.status === 1).length;
      const tidaklolosCount = jsonData.filter(
        (item) => item.status === 2
      ).length;

      mahasiswaLolosCount(lolosCount);
      mahasiswaTidakLolosCount(tidaklolosCount);
      //   mahasiswaMagangCount(count);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetMahasiswaMagang);
