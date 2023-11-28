import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "./urlDetailUser.js";

import { responseDataMitra } from "./detailUserMitra.js";
import { responseDataMhs } from "./detailUserMhs.js";
import { responseDataPembimbing } from "./detailUserPembimbing.js";
import { responseDataMentor } from "./detailUserMentor.js";

import { show, hide } from "https://jscroot.github.io/element/croot.js";

function get(target_url) {
  show("skeletonLoader");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const parsedResult = JSON.parse(result);

      // Periksa peran berdasarkan hierarki objek
      const role = parsedResult.akun ? parsedResult.akun.role : null;

      // Pilih fungsi respons berdasarkan peran
      if (role === "mahasiswa") {
        responseDataMhs(parsedResult);
      } else if (role === "mitra") {
        responseDataMitra(parsedResult);
      } else if (role === "pembimbing") {
        responseDataPembimbing(parsedResult);
      } else if (role === "mentor") {
        responseDataMentor(parsedResult);
      } else {
        // Tangani peran lain atau berikan perilaku default
        console.log("Peran tidak diketahui:", role);
      }
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
}

// Contoh pemanggilan metode get
get(urlFetch);
