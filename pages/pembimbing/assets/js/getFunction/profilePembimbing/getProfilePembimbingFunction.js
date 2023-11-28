import {
  URLGetProfilePembimbing,
  responseData,
} from "./getProfilePembimbing.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { show, hide } from "https://jscroot.github.io/element/croot.js";

// Get Profile Mahasiswa
const getProfile = (target_url, responseFunction) => {
  show("skeletonLoader");

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
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};

getProfile(URLGetProfilePembimbing, responseData);
