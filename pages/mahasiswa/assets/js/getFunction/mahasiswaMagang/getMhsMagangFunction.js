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

get(URLGetMahasiswaMagang, responseID);

export let pembimbingID;
export let mentorID;

function responseID(results) {
  results.forEach((result) => {
    getIDMentor(result);
    getIDPembimbing(result);
  });
}

function getIDMentor(value) {
  if (value.status === 1) {
    return (pembimbingID = value.pembimbing._id);
  }
  console.log(mentorID);
}
function getIDPembimbing(value) {
  if (value.status === 1) {
    return (mentorID = value.mentor._id);
  }
  console.log(pembimbingID);
}
