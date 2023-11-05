import { URLGetMagang, responseDataMagang } from "./getMagang.js";

// Get Magang
const getMagang = (target_url, responseFunction) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};
getMagang(URLGetMagang, responseDataMagang);
