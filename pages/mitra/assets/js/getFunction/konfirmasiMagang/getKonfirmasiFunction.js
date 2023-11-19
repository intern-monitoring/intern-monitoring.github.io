import { URLGetKonfirmasi, responseData } from "./getKonfirmasi.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountKonfirmasi = (count) => {
  const resultCountElement = document.getElementById("konfirmasiCount");
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
      const parsedResult = JSON.parse(result);

      const filteredData = parsedResult.filter((user) =>
        [1, 2].includes(user.status)
      );

      // Call the response function with the filtered data
      responseFunction(filteredData);

      CountKonfirmasi(filteredData.length);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetKonfirmasi, responseData);
