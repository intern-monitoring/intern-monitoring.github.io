import {
  URLGetReport,
  responseData,
  pembimbingID,
  mentorID,
} from "./getReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

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
  console.log(pembimbingID);
  console.log(mentorID);

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonData = JSON.parse(result);
      responseFunction(jsonData);

      // Hitung jumlah data dan perbarui tampilan
      const countPembimbing = jsonData.filter(
        (value) => pembimbingID === value.penerima._id
      ).length;
      const countMentor = jsonData.filter(
        (value) => mentorID === value.penerima._id
      ).length;

      console.log(pembimbingID);
      console.log(mentorID);

      CountReportPembimbing(countPembimbing);
      CountReportMentor(countMentor);
    })
    .catch((error) => console.log("error", error));
};

console.log(pembimbingID);
console.log(mentorID);
get(URLGetReport, responseData);
