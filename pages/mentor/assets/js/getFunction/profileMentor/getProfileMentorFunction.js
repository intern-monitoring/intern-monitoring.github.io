import { URLGetProfileMentor, responseData } from "./getProfileMentor.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Get Profile Mahasiswa
const getProfile = (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

getProfile(URLGetProfileMentor, responseData);
