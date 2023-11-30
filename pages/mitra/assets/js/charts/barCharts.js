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
    .then((response) => response.json()) // Parse as JSON
    .then((parsedResult) => {
      const posisiMagang = parsedResult.map((user) => user.magang.posisi);
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
        height: 350, // Adjusted height for better visibility
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
      plotOptions: {
        bar: {
          columnWidth: "30%",
        },
      },
      colors: ["#2563eb"],
      xaxis: {
        categories: posisiMagang,
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          formatter: (title) => title.slice(0, 3),
        },
      },
      yaxis: {
        labels: {
          align: "left",
          minWidth: 0,
          style: {
            colors: "#9ca3af",
            fontSize: "13px",
            fontFamily: "Inter, ui-sans-serif",
            fontWeight: 400,
          },
          formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
        },
      },
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
  });
});
