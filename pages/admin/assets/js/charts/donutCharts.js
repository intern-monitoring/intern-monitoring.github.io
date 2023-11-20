import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetUser =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

const colors = {
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  indigo: "bg-indigo-500",
  gray: "bg-gray-500",
};

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
        mentorCount,
        colors
      );
    })
    .catch((error) => console.log("error", error));
};

window.addEventListener("load", () => {
  get(
    URLGetUser,
    (mahasiswaCount, mitraCount, pembimbingCount, mentorCount, colors) => {
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
          colors: [colors.blue],
          stroke: {
            colors: [colors.blue],
          },
        },
        {
          colors: [colors.teal],
          stroke: {
            colors: [colors.teal],
          },
        },
        {
          colors: [colors.indigo],
          stroke: {
            colors: [colors.indigo],
          },
        },
        {
          colors: [colors.gray],
          stroke: {
            colors: [colors.gray],
          },
        }
      );
    }
  );
});
