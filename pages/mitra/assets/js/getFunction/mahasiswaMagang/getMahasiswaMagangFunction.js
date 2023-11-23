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

      // Listen for changes to the search input value
      const searchInput = document.getElementById("search-mahasiswa-magang");
      searchInput.addEventListener("keyup", () => {
        // Filter the data based on the current search query
        const searchQuery = searchInput.value.toLowerCase();
        let filteredData;

        if (searchQuery) {
          filteredData = parsedResult.filter((user) => {
            return user.mahasiswa.namalengkap
              .toLowerCase()
              .includes(searchQuery);
          });
        } else {
          // If the search query is empty, use the entire parsedResult
          filteredData = parsedResult;
        }

        // Update the result count and call the response function with the filtered data
        CountMahasiswaMagang(filteredData.length);
        responseFunction(filteredData);

        // Print the search query to the console log
        console.log(searchInput.value);
      });
    })
    .catch((error) => console.log("error", error));
};

get(URLGetMahasiswaMagang, responseData);
