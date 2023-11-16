import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetUser =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

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
      const mahasiswaCount = parsedResult.filter(
        (user) => user.role === "mahasiswa"
      ).length;
      const mitraCount = parsedResult.filter(
        (user) => user.role === "mitra"
      ).length;

      // Call the response function with the filtered data
      responseFunction(mahasiswaCount, mitraCount);
    })
    .catch((error) => console.log("error", error));
};
get(URLGetUser);

window.addEventListener("load", (mitraCount, mahasiswaCount) => {
  (function () {
    buildChart(
      "#hs-donut-chart",
      () => ({
        chart: {
          height: 170,
          width: 170,
          type: "donut",
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "76%",
            },
          },
        },
        series: [mitraCount, mahasiswaCount],
        labels: ["Mahasiswa", "Mitra"],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 5,
        },
        grid: {
          padding: {
            top: -12,
            bottom: -11,
            left: -12,
            right: -12,
          },
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
      }),
      {
        colors: ["#3b82f6", "#22d3ee"],
        stroke: {
          colors: ["rgb(255, 255, 255)"],
        },
      },
      {
        colors: ["#e5e7eb", "#3b82f6"],
        stroke: {
          colors: ["rgb(38, 38, 38)"],
        },
      }
    );
  })();
});
