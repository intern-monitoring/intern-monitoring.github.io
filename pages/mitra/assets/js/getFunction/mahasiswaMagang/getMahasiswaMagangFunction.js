import { URLGetMahasiswaMagang, responseData } from "./getMahasiswaMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountMahasiswaMagang = (count) => {
  const resultCountElement = document.getElementById("countMahasiswaMagang");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const initializeData = () => {
  // Call the get function without a search value to get the initial data
  get(URLGetMahasiswaMagang, responseData);
};

document.addEventListener("DOMContentLoaded", initializeData);

// Function to filter data based on search input
const filterData = (data, searchValue) => {
  const lowercasedSearch = searchValue.toLowerCase();
  return data.filter((user) =>
    user.name.toLowerCase().includes(lowercasedSearch)
  );
};

// Modify the get function to include the search functionality
const get = (target_url, responseFunction, searchValue) => {
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

      const filteredData = parsedResult.filter((user) => user.status);

      // Filter data based on the search input
      const searchData = searchValue
        ? filterData(filteredData, searchValue)
        : filteredData;

      // Call the response function with the filtered data
      responseFunction(searchData);

      CountMahasiswaMagang(searchData.length);
    })
    .catch((error) => console.log("error", error));
};

// Add an event listener to the search input
const searchInput = document.getElementById("search-mahasiswa-magang");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.trim();
  // Call the get function with the search value
  get(URLGetMahasiswaMagang, responseData, searchValue);
});
