import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutMagang";

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
  console.log("update gas");
  posisiValue = getValue("posisi");
  lokasiValue = getValue("lokasi");
  deskripsiMagangValue = getValue("deskripsimagang");
  infoTambahanMagangValue = getValue("infotambahanmagang");
  tentangMitraValue = getValue("tentangmitra");
  expiredValue = getValue("expired");

  // Create the updated data object
  const data = {
    posisi: posisiValue,
    lokasi: lokasiValue,
    deskripsimagang: deskripsiMagangValue,
    infotambahanmagang: infoTambahanMagangValue,
    tentangmitra: tentangMitraValue,
    expired: expiredValue,
  };
  putData(urlPUT, data, AmbilResponse);
};

document.getElementById("updateButton").addEventListener("click", pushData);
