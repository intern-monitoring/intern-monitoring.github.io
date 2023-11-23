import { URLGetMahasiswaMagang, responseData } from "./getMahasiswaMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const CountMahasiswaMagang = (count) => {
  const resultCountElement = document.getElementById("countMahasiswaMagang");
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

      console.log(searchQuery);
      // Update the result count before calling the response function
      CountMahasiswaMagang(filteredData.length);

      // Call the response function with the filtered data
      responseFunction(filteredData);
    })
    .catch((error) => console.log("error", error));
};

get(URLGetMahasiswaMagang, responseData);
