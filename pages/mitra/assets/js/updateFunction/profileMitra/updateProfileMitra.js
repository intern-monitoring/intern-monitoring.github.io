import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfileMitra.js";

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
  const namarahubungValue = getValue("namanarahubung");
  const nohpnarahubungValue = getValue("nohpnarahubung");
  const namaValue = getValue("nama");
  const kategoriValue = getValue("kategori");
  const sektorindustriValue = getValue("sektorindustri");
  const tentangValue = getValue("tentang");
  const alamatValue = getValue("alamat");
  const websiteValue = getValue("website");

  // Create the updated data object
  const data = {
    namanarahubung: namarahubungValue,
    nohpnarahubung: nohpnarahubungValue,
    nama: namaValue,
    kategori: kategoriValue,
    sektorindustri: sektorindustriValue,
    tentang: tentangValue,
    alamat: alamatValue,
    website: websiteValue,
  };
  putData(urlPUT, data, AmbilResponse);
};

const updateProfileMitra = document.getElementById("updateProfileMitra");

updateProfileMitra.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});
