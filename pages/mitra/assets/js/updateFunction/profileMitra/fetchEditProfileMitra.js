import { isiDataProfile } from "./editProfileMitra.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "./urlEditProfileMitra.js";

function get(target_url, responseFunction) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const parsedResult = JSON.parse(result);
      responseFunction(parsedResult);
      console.log("Result:", parsedResult); // Menampilkan hasil di console log
    })
    .catch((error) => console.log("error", error));
}
get(urlFetch, isiDataProfile);
