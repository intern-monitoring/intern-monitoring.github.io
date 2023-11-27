import { responseDataDetail } from "./detailReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "./urlDetailReport.js";
import { show, hide } from "https://jscroot.github.io/element/croot.js";

function get(target_url, responseFunction) {
  // Show the skeleton loader while waiting for the data
  show("skeletonLoader");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
}
setTimeout(() => {
  get(urlFetch, responseDataDetail);
}, 1500);
