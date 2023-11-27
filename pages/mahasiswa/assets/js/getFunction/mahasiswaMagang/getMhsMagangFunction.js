import {
  URLGetMahasiswaMagang,
  responseDataDailyReport,
} from "./getMhsMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export const get = (target_url, responseFunction) => {
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
    .catch((error) => console.log("error", error));
};

get(URLGetMahasiswaMagang, responseDataDailyReport);
