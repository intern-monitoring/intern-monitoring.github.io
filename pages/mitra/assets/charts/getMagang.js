import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";

const get = (target_url, responseFunction) => {
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
export let posisiValue;

const responsePosisi = (results) => {
  console.log(results.posisi);
  results.forEach((result) => {
    getPosisiMagang(result);
  });
};

const getPosisiMagang = (value) => {
  posisiValue = value.posisi;
};
console.log(posisiValue);
get(URLGetMagang, responsePosisi);
