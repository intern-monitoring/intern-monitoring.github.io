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

      const valuePosisi = posisiValue;

      const posisiCounts = jsonData.reduce((counts, item) => {
        if (item.magang.posisi === posisiValue) {
          if (!counts[item.magang.posisi]) {
            counts[item.magang.posisi] = 0;
          }
          counts[item.magang.posisi]++;
        }
        return counts;
      }, {});

      responseFunction(posisiCounts, valuePosisi);
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  setTimeout(() => {
    get(URLGet, (posisiCounts, valuePosisi) => {
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
            data: [
              {
                x: valuePosisi,
                y: posisiCounts[valuePosisi] || 0,
              },
            ],
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
  }, 2500);
});
