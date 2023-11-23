import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetPembimbing =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-pembimbing";

const get = (target_url) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const pembimbingDropdown = document.getElementById(
        "namalengkappembimbing"
      );

      // Generate options for each data item
      data.forEach((item) => {
        const option = document.createElement("option");
        option.value = item._id;
        option.text = item.namalengkap;
        pembimbingDropdown.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
get(URLGetPembimbing);
