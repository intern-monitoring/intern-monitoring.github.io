import { URLGetReport, responseData } from "./getReport.js";
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
      // const countPembimbing = jsonData.filter(pembimbingID).length;
      // const countMentor = jsonData.filter(mentorID).length;

      // CountReportPembimbing(countPembimbing);
      // CountReportMentor(countMentor);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetReport, responseData);
