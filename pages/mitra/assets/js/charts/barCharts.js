import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetMhsApply =
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
      const parsedResult = JSON.parse(result);

      // Count the number of "Mahasiswa" and "Mitra"
      const posisiMagang = parsedResult.filter(
        (user) => user.magang.posisi
      ).value;
      const applyCount = parsedResult.length;

      responseFunction(posisiMagang, applyCount);
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  get(URLGetMhsApply, (posisiMagang, applyCount) => {
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
          name: "Jumlah yang apply",
          data: posisiMagang.map((position) => ({
            x: position,
            y: applyCount,
          })),
        },
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
        },
      },
      colors: ["#2563eb"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Mahasiswa yang apply"],
        markers: {
          fillColors: ["#2563eb"],
        },
      },
    }));
  })();
});
