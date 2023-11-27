import {
  URLGetReport,
  responseData,
  // pembimbingID,
  // mentorID,
} from "./getReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

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
      // const countPembimbing = jsonData.filter(
      //   (value) => pembimbingID === value.penerima._id
      // ).length;
      // const countMentor = jsonData.filter(
      //   (value) => mentorID === value.penerima._id
      // ).length;

      // CountReportPembimbing(countPembimbing);
      // CountReportMentor(countMentor);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetReport, responseData);
