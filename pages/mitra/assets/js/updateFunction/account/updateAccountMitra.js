import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUTEmail, AmbilEmailResponse } from "./urlPutAccountMitra.js";

console.log("hadeer");

const putEmail = (target_url, datajson, responseFunction) => {
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

const pushDataEmail = () => {
  const emailValue = getValue("email");

  // Create the updated data object
  const data = {
    email: emailValue,
  };
  putEmail(urlPUTEmail, data, AmbilEmailResponse);
};

const updateButton = document.getElementById("updateEmail");

updateButton.addEventListener("click", () => {
  console.log("button aktif");
  pushDataEmail(); // Call pushData function when the button is clicked
});
