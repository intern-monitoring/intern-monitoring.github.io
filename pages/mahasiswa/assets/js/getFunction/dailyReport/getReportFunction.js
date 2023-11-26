import { URLGetReport, responseData } from "./getReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const penerima = (result) => {
  let allReport = result.map((row) => {
    return row.penerima.nama.split(",").map(function (item) {
      return item.trim();
    });
  });
  let uniquePenerima = allReport
    .flat()
    .filter((item, index, arry) => arry.indexOf(item) === index);
  let sortingPenerima = uniquePenerima.sort(function (first, second) {
    return first > second ? 1 : -1;
  });
  length = sortingPenerima.length;
  for (let i = 0; i < length; i++) {
    console.log(sortingPenerima[i]);
  }
};

const CountReportPembimbing = (count) => {
  const resultCountElement = document.getElementById("countReportPembimbing");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};
const CountReportMentor = (count) => {
  const resultCountElement = document.getElementById("countReportMentor");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
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
      const jsonData = JSON.parse(result);
      responseFunction(jsonData);

      // Hitung jumlah data dan perbarui tampilan
      const count = jsonData.length;

      CountReportPembimbing(count);
      CountReportMentor(count);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetReport, responseData, penerima);
