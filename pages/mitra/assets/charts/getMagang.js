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
    .then((response) => response.json()) // Parse JSON directly here
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

export let posisiValues = [];

const responsePosisi = (results) => {
  console.log(results.posisi);
  results.forEach((result) => {
    getPosisiMagang(result);
    console.log(result);
  });
};

const getPosisiMagang = (value) => {
  posisiValues.push(value.posisi);
};

get(URLGetMagang, responsePosisi);

// Add a delay to wait for the asynchronous fetch to complete
setTimeout(() => {
  console.log(posisiValues);
}, 1500); // Adjust the delay as needed
