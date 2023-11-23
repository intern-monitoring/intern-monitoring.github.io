import { URLGetMahasiswaMagang, responseData } from "./getMahasiswaMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountMahasiswaMagang = (count) => {
  const resultCountElement = document.getElementById("countMahasiswaMagang");
  resultCountElement.textContent = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const get = async (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", await getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(target_url, requestOptions);
  const result = await response.text();

  const parsedResult = JSON.parse(result);

  // Filter the data based on the search query
  const searchInput = document.getElementById("search-mahasiswa-magang");
  const searchQuery = searchInput.value.toLowerCase();

  let filteredData;

  if (searchQuery) {
    filteredData = parsedResult.filter((user) => {
      return user.nama.toLowerCase().includes(searchQuery);
    });
  } else {
    // If the search query is empty, use the entire parsedResult
    filteredData = parsedResult;
  }

  console.log(filteredData);
  console.log(searchInput.value);
  // Update the result count before calling the response function
  CountMahasiswaMagang(filteredData.length);

  // Call the response function with the filtered data
  await responseFunction(filteredData);
};

get(URLGetMahasiswaMagang, responseData);
