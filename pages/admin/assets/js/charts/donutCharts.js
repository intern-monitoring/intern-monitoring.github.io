window.addEventListener("load", () => {
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
        series: [60, 50],
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
