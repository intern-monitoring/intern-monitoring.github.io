import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutProfileMhs.js";

const putData = async (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: datajson,
    redirect: "follow",
  };

  await fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const imageInput = document.getElementById("imageInput");
  const namalengkapValue = document.getElementById("namalengkap");
  const tanggallahirValue = document.getElementById("tanggallahir");
  const jeniskelaminValue = document.getElementById("jeniskelamin");
  const nimValue = document.getElementById("nim");
  const perguruantinggiValue = document.getElementById("perguruantinggi");
  const prodiValue = document.getElementById("prodi");

  const file = imageInput.files[0];

  if (!file) {
    alert("Please select an image file.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("namalengkap", namalengkapValue);
  formData.append("tanggallahir", tanggallahirValue);
  formData.append("jeniskelamin", jeniskelaminValue);
  formData.append("nim", nimValue);
  formData.append("perguruantinggi", perguruantinggiValue);
  formData.append("prodi", prodiValue);

  putData(urlPUT, formData, AmbilResponse);
};

const updateProfileMhs = document.getElementById("updateProfileMhs");

updateProfileMhs.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});
