import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfileMhs.js";

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
  const tanggallahirValue = getValue("tanggallahir");
  const jeniskelaminValue = getValue("jeniskelamin");
  const nimValue = getValue("nim");
  const perguruantinggiValue = getValue("perguruantinggi");
  const prodiValue = getValue("prodi");

  // Create the updated data object
  const data = {
    namalengkap: namalengkapValue,
    tanggallahir: tanggallahirValue,
    jeniskelamin: jeniskelaminValue,
    nim: nimValue,
    perguruantinggi: perguruantinggiValue,
    prodi: prodiValue,
  };
  putData(urlPUT, data, AmbilResponse);
};

const updateProfileMhs = document.getElementById("updateProfileMhs");

updateProfileMhs.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});
