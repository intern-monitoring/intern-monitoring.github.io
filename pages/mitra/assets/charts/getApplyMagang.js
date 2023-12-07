import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { posisiValue } from "./getMagang.js";

const URLGetSeleksiBerkas =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

const get = (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonData = JSON.parse(result);
      const filteredData = jsonData.filter(
        (item) => item.magang.posisi === posisiValue
      );

      responseFunction(filteredData);

      // Hitung jumlah data dan perbarui tampilan
      const countMhsApply = filteredData.length;
      countApply(countMhsApply);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetSeleksiBerkas, responseData);
