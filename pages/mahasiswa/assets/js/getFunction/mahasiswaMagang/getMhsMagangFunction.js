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

export let pembimbingID;
export let mentorID;

const responseID = (results) => {
  results.forEach((result) => {
    getIDMentor(result);
    getIDPembimbing(result);
  });
};

const getIDMentor = (value) => {
  if (value.status === 1) {
    pembimbingID = value.pembimbing._id;
  }
  console.log(mentorID);
};

const getIDPembimbing = (value) => {
  if (value.status === 1) {
    mentorID = value.mentor._id;
  }
  console.log(pembimbingID);
};

get(URLGetMahasiswaMagang, responseDataDailyReport);
get(URLGetMahasiswaMagang, responseID);
