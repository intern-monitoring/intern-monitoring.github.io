import { URLGetMagang, responseData } from "./getMagang.js";

const get = (target_url, responseFunction) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

get(URLGetMagang, responseData);
