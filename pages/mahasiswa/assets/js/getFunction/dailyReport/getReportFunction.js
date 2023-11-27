import { URLGetReport, responseData } from "./getReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const get = async (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(target_url, requestOptions);
    const result = await response.text();
    const jsonData = JSON.parse(result);
    responseFunction(jsonData);
  } catch (error) {
    console.log("error", error);
  }
};

get(URLGetReport, responseData);
