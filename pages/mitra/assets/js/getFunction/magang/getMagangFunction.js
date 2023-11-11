import { URLGetMagang, responseData } from "./getMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountMagang = (count) => {
  const resultCountElement = document.getElementById("magangCount");
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
    .then((result) => responseFunction(JSON.parse(result)))
    .then((result) => CountMagang(result.length))
    .catch((error) => console.log("error", error));
};

get(URLGetMagang, responseData);
