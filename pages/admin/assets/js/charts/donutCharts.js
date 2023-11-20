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
      const pembimbingCount = parsedResult.filter(
        (user) => user.role === "pembimbing"
      ).length;
      const mentorCount = parsedResult.filter(
        (user) => user.role === "mentor"
      ).length;

      // Call the response function with the filtered data
      responseFunction(
        mahasiswaCount,
        mitraCount,
        pembimbingCount,
        mentorCount
      );
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  get(
    URLGetUser,
    (mahasiswaCount, mitraCount, pembimbingCount, mentorCount) => {
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
          series: [mahasiswaCount, mitraCount, pembimbingCount, mentorCount],
          labels: ["Mahasiswa", "Mitra", "Pembimbing", "Mentor"],
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
          colors: ["#001f3f", "#0050a1", "#3b82f6", "#a5c3f7"],

          // Warna stroke untuk kontras yang lebih baik
          stroke: {
            colors: ["rgb(255, 255, 255)"],
          },
        }
      );
    }
  );
});
