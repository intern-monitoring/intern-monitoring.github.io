import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { posisiValue } from "./getMagang.js";

const URLGet =
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
      const mhsApply = jsonData.filter(
        (item) => item.magang.posisi === posisiValue
      );

      const countMhsApply = mhsApply.length;

      responseFunction(countMhsApply);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetSeleksiBerkas, responseData);

window.addEventListener("load", () => {
  setTimeout(() => {
    get(URLGet, (mhsApply) => {
      buildChart("#hs-single-bar-chart", () => ({
        chart: {
          type: "bar",
          height: 200,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        series: [
          {
            name: "Jumlah Mahasiswa",
            data: mhsApply.map((item) => ({
              x: item.mhsApply,
              y: item.posisiValue,
            })),
          },
        ],
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
          },
        },
        colors: ["#1e40af"],
        dataLabels: {
          enabled: false,
        },
      }));
    });
  }, 1500);
});
