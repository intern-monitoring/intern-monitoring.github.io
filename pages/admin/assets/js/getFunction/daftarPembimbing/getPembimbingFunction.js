import { URLGetPembimbing, responseData } from "./getPembimbing.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountPembimbing = (count) => {
  const resultCountElement = document.getElementById("pembimbingCount");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

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

      // Hitung jumlah data dan perbarui tampilan
      const count = jsonData.length;
      CountPembimbing(count);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetPembimbing, responseData);
