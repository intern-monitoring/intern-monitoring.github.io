import {
  URLGetPemilihanPembimbing,
  responseData,
} from "./getPemilihanPembimbing.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const CountPemilihanPembimbing = (count) => {
  const resultCountElement = document.getElementById(
    "countPemilihanPembimbing"
  );
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
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
      const parsedResult = JSON.parse(result);

      const filteredData = parsedResult.filter(
        (user) => user.status === 1 && !user.pembimbing.namalengkap
      );

      // Call the response function with the filtered data
      responseFunction(filteredData);

      CountPemilihanPembimbing(filteredData.length);
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};

get(URLGetPemilihanPembimbing, responseData);
