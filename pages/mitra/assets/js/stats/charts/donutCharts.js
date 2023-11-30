import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

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
      const parsedResult = JSON.parse(result);

      // Count the number of "Mahasiswa" and "Mitra"
      const lolos = parsedResult.filter(
        (item) => item.seleksiwewancara === 1
      ).length;

      const tidaklolos = parsedResult.filter(
        (user) => user.seleksiberkas === 2
      ).length;

      // Call the response function with the filtered data
      responseFunction(lolos, tidaklolos);
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  get(URLGet, (lolos, tidaklolos) => {
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
        series: [lolos, tidaklolos],
        labels: ["Lolos", "Tidak Lolos"],
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
        // Tentukan empat warna biru yang berbeda dari sangat tua ke sangat muda
        colors: ["#001f3f", "#0050a1"],

        // Warna stroke untuk kontras yang lebih baik
        stroke: {
          colors: ["rgb(255, 255, 255)"],
        },
      }
    );
  });
});
