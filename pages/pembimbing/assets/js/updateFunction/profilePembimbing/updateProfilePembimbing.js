import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfilePembimbing.js";

console.log("hadeer");

const putData = (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const raw = JSON.stringify(datajson);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const namalengkapValue = getValue("namalengkap");
  const nikValue = getValue("nik");
  const prodiValue = getValue("prodi");

  // Create the updated data object
  const data = {
    namalengkap: namalengkapValue,
    nik: nikValue,
    prodi: prodiValue,
  };
  console.log(data);
  putData(urlPUT, data, AmbilResponse);
};

const updateProfileMentor = document.getElementById("updateProfilePembimbing");

updateProfileMentor.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});
