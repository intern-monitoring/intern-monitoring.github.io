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

      const lolosberkas = parsedResult.filter(
        (item) => item.seleksiberkas === 1
      ).length;

      const loloswawancara = parsedResult.filter(
        (user) => user.seleksiwewancara === 1
      ).length;
      const mahasiswamagang = parsedResult.filter(
        (user) => user.status === 1 && user.mentor.namalengkap
      ).length;

      responseFunction(lolosberkas, loloswawancara, mahasiswamagang);
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  get(URLGet, (lolosberkas, loloswawancara, mahasiswamagang) => {
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
          data: [
            {
              x: "Lolos Seleksi Berkas",
              y: lolosberkas,
            },
            {
              x: "Lolos Seleksi Wawancara",
              y: loloswawancara,
            },
            {
              x: "Mahasiswa Magang",
              y: mahasiswamagang,
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
      colors: ["#add8e6", "#0000ff", "#00008b"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: [
          "Lolos Seleksi Berkas",
          "Lolos Seleksi Wawancara",
          "Mahasiswa Magang",
        ],
        markers: {
          fillColors: ["#add8e6", "#0000ff", "#00008b"],
        },
      },
    }));
  });
});
