window.addEventListener("load", () => {
  (function () {
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
          data: [
            {
              x: "Frontend Developer",
              y: 2,
            },
            {
              x: "Frontend Developer",
              y: 3,
            },
            {
              x: "Frontend Developer",
              y: 4,
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
  })();
});
