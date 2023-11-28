import { URLGetMahasiswaMagang, responseData } from "./getMahasiswaMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const fetchData = async () => {
  document.getElementById("skeletonLoader").style.display = "grow";
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(URLGetMahasiswaMagang, requestOptions);
    let data = await response.json();

    data = data.filter(
      (value) => value.status === 1 && value.mentor.namalengkap
    );

    localStorage.setItem("mahasiswaMagang", JSON.stringify(data));

    responseData(data);
    updateCountElement(data.length); // Update count based on the fetched data
  } catch (error) {
    console.error("Error fetching or processing data: ", error);
  }
};

const updateCountElement = (count) => {
  const resultCountElement = document.getElementById("countMahasiswaMagang");
  resultCountElement.innerHTML = `<p class="text-sm text-gray-600">
    <span class="font-semibold text-gray-800">${count}</span> results
  </p>`;
};

const searchData = async () => {
  const namaInput = document
    .getElementById("search-mahasiswa-magang")
    .value.toLowerCase();

  try {
    let data = localStorage.getItem("mahasiswaMagang");

    if (!data) {
      await fetchData(); // Call fetchData to ensure data is fetched
      data = localStorage.getItem("mahasiswaMagang");
      countInitialData(); // Count initial data
    } else {
      data = JSON.parse(data);
    }

    if (Array.isArray(data)) {
      const filteredResults = data.filter((item) => {
        const nama = (item.mahasiswa.namalengkap || "").toLowerCase();
        return nama.includes(namaInput);
      });

      const mhsMagangContainer = document.getElementById(
        "tableMahasiswaMagang"
      );
      mhsMagangContainer.innerHTML = "";

      if (namaInput === "") {
        responseData(data);
      } else {
        responseData(filteredResults);
      }

      updateCountElement(filteredResults.length);
    } else {
      console.error("Data is not an array:", data);
      hide("skeletonLoader");
    }
  } catch (error) {
    console.error("Error searching data: ", error);
  }
};

window.onload = function () {
  fetchData();
  const searchInput = document.getElementById("search-mahasiswa-magang");

  searchInput.addEventListener("input", function () {
    searchData(this.value);
  });
};
