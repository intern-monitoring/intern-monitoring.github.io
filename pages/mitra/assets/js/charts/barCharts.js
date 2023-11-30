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
    buildChart(
      "#hs-single-bar-chart",
      (mode) => ({
        chart: {
          type: "bar",
          height: 300,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        series: [
          {
            name: "Jumlah Apply",
            data: [applyCount],
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "16px",
            borderRadius: 0,
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 8,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [posisiMagang],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          labels: {
            style: {
              colors: "#9ca3af",
              fontSize: "13px",
              fontFamily: "Inter, ui-sans-serif",
              fontWeight: 400,
            },
            offsetX: -2,
            formatter: (title) => title.slice(0, 3),
          },
        },
        yaxis: {
          labels: {
            align: "left",
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: "#9ca3af",
              fontSize: "13px",
              fontFamily: "Inter, ui-sans-serif",
              fontWeight: 400,
            },
            formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          },
        },
        states: {
          hover: {
            filter: {
              type: "darken",
              value: 0.9,
            },
          },
        },
        tooltip: {
          y: {
            formatter: (value) =>
              `$${value >= 1000 ? `${value / 1000}k` : value}`,
          },
          custom: function (props) {
            const { categories } = props.ctx.opts.xaxis;
            const { dataPointIndex } = props;
            const title = categories[dataPointIndex];
            const newTitle = `${title}`;

            return buildTooltip(props, {
              title: newTitle,
              mode,
              hasTextLabel: true,
              wrapperExtClasses: "min-w-[120px]",
              labelDivider: ":",
              labelExtClasses: "ms-2",
            });
          },
        },
        responsive: [
          {
            breakpoint: 568,
            options: {
              chart: {
                height: 300,
              },
              plotOptions: {
                bar: {
                  columnWidth: "14px",
                },
              },
              stroke: {
                width: 8,
              },
              labels: {
                style: {
                  colors: "#9ca3af",
                  fontSize: "11px",
                  fontFamily: "Inter, ui-sans-serif",
                  fontWeight: 400,
                },
                offsetX: -2,
                formatter: (title) => title.slice(0, 3),
              },
              yaxis: {
                min: 5,
                max: 15,
              },
            },
          },
        ],
      }),
      {
        colors: ["#2563eb", "#d1d5db"],
        grid: {
          borderColor: "#e5e7eb",
        },
      },
      {
        colors: ["#3b82f6", "#2563eb"],
        grid: {
          borderColor: "#374151",
        },
      }
    );
  })();
});
