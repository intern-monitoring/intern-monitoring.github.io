import { responseData } from "./detailReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "./urlDetailReport.js";
import { hide, show } from "https://jscroot.github.io/element/croot.js";

function get(target_url, responseFunction) {
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
      hide("skeletonLoader");
    });
}
get(urlFetch, responseData);
