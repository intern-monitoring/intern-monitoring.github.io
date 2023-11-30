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
            {
              x: "Frontend Developer",
              y: 4,
              colors: ["#add8e6"],
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
          columnWidth: "30%",
        },
      },
      colors: ["#2563eb", "#add8e6"],
      dataLabels: {
        enabled: false,
      },
    }));
  })();
});
