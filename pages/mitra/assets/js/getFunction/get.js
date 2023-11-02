import { URLGetMagang, responseData } from "./getMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

function get(target_url, responseFunction) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

get(URLGetMagang, responseData);
