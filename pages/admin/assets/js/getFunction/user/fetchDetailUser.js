import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "./urlDetailUser.js";

import { responseDataMitra } from "./detailUserMitra.js";
import { responseDataMhs } from "./detailUserMhs.js";

function get(target_url) {
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
      console.log(parsedResult);
      console.log(result.akun.role);

      // Pilih fungsi respons berdasarkan peran yang ada di result
      if (parsedResult.role === "mahasiswa") {
        responseDataMhs(parsedResult);
      } else if (parsedResult.role === "mitra") {
        responseDataMitra(parsedResult);
      } else {
        // Tangani peran lain atau berikan perilaku default
        console.log("Peran tidak diketahui:", parsedResult.role);
      }
    })
    .catch((error) => console.log("error", error));
}

// Contoh pemanggilan metode get
get(urlFetch);
