import { onClick, getValue } from "https://jscroot.github.io/element/croot.js";
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
  const posisiValue = getValue("posisi");
  const lokasiValue = getValue("lokasi");
  const deskripsiMagangValue = getValue("deskripsimagang");
  const infoTambahanMagangValue = getValue("infotambahanmagang");
  const tentangMitraValue = getValue("tentangmitra");
  const expiredValue = getValue("expired");

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

// Menambahkan event listener pada tombol "Save"
document.getElementById("updateButton").addEventListener("click", function () {
  // Memanggil fungsi postData dengan callback AmbilResponse
  pushData(urlPUT, data, AmbilResponse);
});
