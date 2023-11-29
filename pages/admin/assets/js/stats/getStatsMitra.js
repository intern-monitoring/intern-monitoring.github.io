import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { responseData, URLGetMitra } from "./tableMitra";
import { hide } from "https://jscroot.github.io/element/croot.js";

const mitracount = (count) => {
  const resultCountElement = document.getElementById("jumlahMitra");
  resultCountElement.innerHTML = `<h3 class="mt-1 text-xl font-medium text-gray-800">${count}</h3>`;
};

const get = (target_url, responseFunction) => {
  document.getElementById("skeletonLoader").style.display = "grow";

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

      const mitraCount = jsonData.filter((item) => item.mou === 1).length;
      responseFunction(jsonData);

      mitracount(mitraCount);
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};
get(URLGetMitra, responseData);
