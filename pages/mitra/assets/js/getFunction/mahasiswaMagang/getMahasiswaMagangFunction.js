import { URLGetMahasiswaMagang, responseData } from "./getMahasiswaMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// const CountMahasiswaMagang = (count) => {
//   const resultCountElement = document.getElementById("countMahasiswaMagang");
//   resultCountElement.innerHTML = `
//     <p class="text-sm text-gray-600">
//       <span class="font-semibold text-gray-800">${count}</span> results
//     </p>`;
// };

// const get = (target_url, responseFunction) => {
//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", getCookie("Authorization"));
//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(target_url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => {
//       const parsedResult = JSON.parse(result);

//       // Store the initial data
//       const initialData = parsedResult;

//       // Listen for changes to the search input value
//       const searchInput = document.getElementById("search-mahasiswa-magang");
//       searchInput.addEventListener("keyup", () => {
//         // Filter the data based on the current search query
//         const searchQuery = searchInput.value.toLowerCase();
//         let filteredData;

//         if (searchQuery) {
//           filteredData = parsedResult.filter((user) => {
//             return user.mahasiswa.namalengkap
//               .toLowerCase()
//               .includes(searchQuery);
//           });
//         } else {
//           // Use the initial data
//           filteredData = initialData;
//         }

//         // Update the result count and call the response function with the filtered data
//         CountMahasiswaMagang(filteredData.length);
//         responseFunction(filteredData);

//         // Print the search query to the console log
//         console.log(searchInput.value);
//       });
//     })
//     .catch((error) => console.log("error", error));
// };

// get(URLGetMahasiswaMagang, responseData);

// Test
const fetchData = async () => {
  try {
    // Hapus data lama dari localStorage sebelum mendapatkan data baru
    // localStorage.removeItem("magangData");

    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(URLGetMahasiswaMagang, requestOptions);
    const data = await response.json();

    // Simpan data baru ke localStorage
    localStorage.setItem("mahasiswaMagang", JSON.stringify(data));

    responseData(data);
  } catch (error) {
    console.error("Error fetching or processing data: ", error);
  }
};

window.onload = function () {
  fetchData(); // Fungsi untuk menampilkan semua data saat halaman dimuat
  const searchInput = document.getElementById("search-mahasiswa-magang");

  searchInput.addEventListener("input", function () {
    searchData(this.value);
  });
};

const searchData = async () => {
  const namaInput = document
    .getElementById("search-mahasiswa-magang")
    .value.toLowerCase();

  try {
    let data = localStorage.getItem("mahasiswaMagang");

    if (!data) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", getCookie("Authorization"));
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(URLGetMahasiswaMagang, requestOptions);
      data = await response.json();
      localStorage.setItem("mahasiswaMagang", JSON.stringify(data));
    } else {
      data = JSON.parse(data);
    }

    if (Array.isArray(data)) {
      const filteredResults = data.filter((item) => {
        const nama = (item.mahasiswa.namalengkap || "").toLowerCase(); // Periksa apakah posisi ada

        return nama.includes(namaInput);
      });

      const mhsMagangContainer = document.getElementById(
        "tableMahasiswaMagang"
      );
      mhsMagangContainer.innerHTML = "";
      if (namaInput === "") {
        // Jika semua input kosong, tampilkan semua data
        responseData(data);
      } else {
        // Jika ada kriteria pencarian, tampilkan hasil pencarian
        responseData(filteredResults);
      }
    } else {
      console.error("Data is not an array:", data);
    }
  } catch (error) {
    console.error("Error searching data: ", error);
  }
};
