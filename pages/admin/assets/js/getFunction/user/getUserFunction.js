import { URLGetUser, responseData } from "./getUser.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const updateResultCount = (count) => {
  const resultCountElement = document.getElementById("resultCount");
  resultCountElement.innerHTML = `<p class="text-sm text-gray-600"><span class="font-semibold text-gray-800">${count}</span> results</p>`;
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

      // Filter data for "mahasiswa" and "mitra" roles
      const filteredData = parsedResult.filter((user) =>
        ["mahasiswa", "mitra"].includes(user.role)
      );

      // Call the response function with the filtered data
      responseFunction(filteredData);

      updateResultCount(filteredData.length);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetUser, responseData);
