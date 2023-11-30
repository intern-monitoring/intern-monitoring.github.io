import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGet =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

const mhsMagangCount = (count) => {
  const resultCountElement = document.getElementById("mahasiswaMagangCount");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};

const get = (target_url) => {
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

      const mhscount = jsonData.filter(
        (item) => item.status === 1 && item.mentor.namalengkap
      ).length;

      mhsMagangCount(mhscount);
    })
    .catch((error) => console.log("error", error));
};
get(URLGet);
