import { URLGetMahasiswaMagang, responseData } from "./getMahasiswaMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountMahasiswaMagang = (count) => {
  const resultCountElement = document.getElementById("countMahasiswaMagang");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const clearTable = () => {
  const tableElement = document.getElementById("tableMahasiswaMagang");
  removeAllChildren(tableElement);
};

// Function to initialize the data
const initializeData = () => {
  // Clear the existing table contents
  clearTable();

  // Call the get function without a search value to get the initial data
  get(URLGetMahasiswaMagang, responseData);
};

document.addEventListener("DOMContentLoaded", initializeData);

// ... (your existing code)

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

      // Clear the existing table contents before populating with new data
      clearTable();

      // Call the response function with the filtered data
      responseFunction(searchData);

      CountMahasiswaMagang(searchData.length);
    })
    .catch((error) => console.log("error", error));
};

// ... (your existing code)

// Add an event listener to the search input
const searchInput = document.getElementById("search-mahasiswa-magang");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.trim();
  // Call the get function with the search value
  get(URLGetMahasiswaMagang, responseData, searchValue);
});

// Add an event listener to handle the case when the search input is cleared
searchInput.addEventListener("change", () => {
  const searchValue = searchInput.value.trim();
  // If the search input is empty, call the get function without a search value
  if (!searchValue) {
    get(URLGetMahasiswaMagang, responseData);
  }
});
