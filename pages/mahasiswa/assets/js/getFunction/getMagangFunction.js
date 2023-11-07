import { responseDataMagang, URLGetMagang } from "./getMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const fetchData = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(URLGetMagang, requestOptions);
    const data = await response.json();

    // Simpan data awal ke initialMagangData di localStorage
    localStorage.setItem("initialMagangData", JSON.stringify(data));

    // Simpan data ke magangData di localStorage
    localStorage.setItem("magangData", JSON.stringify(data));

    responseDataMagang(data);
  } catch (error) {
    console.error("Error fetching or processing data: ", error);
  }
};

const clearSearch = () => {
  document.getElementById("posisi").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("lokasi").value = "";

  // Ambil data awal dari localStorage dan tampilkan
  const initialData = JSON.parse(localStorage.getItem("initialMagangData"));
  if (initialData) {
    responseDataMagang(initialData);
  } else {
    // Jika data awal tidak ada di localStorage, panggil fetchData untuk mendapatkan data dari server
    fetchData();
  }
};

const searchData = async () => {
  const posisiInput = document.getElementById("posisi").value.toLowerCase();
  const namaInput = document.getElementById("nama").value.toLowerCase();
  const lokasiInput = document.getElementById("lokasi").value.toLowerCase();

  try {
    const data = JSON.parse(localStorage.getItem("magangData"));

    if (Array.isArray(data)) {
      const filteredResults = data.filter((item) => {
        const posisi = (item.posisi || "").toLowerCase();
        const nama = (item.mitra.nama || "").toLowerCase();
        const lokasi = (item.lokasi || "").toLowerCase();

        return (
          posisi.includes(posisiInput) &&
          nama.includes(namaInput) &&
          lokasi.includes(lokasiInput)
        );
      });

      const magangContainer = document.getElementById("magang");
      magangContainer.innerHTML = "";
      if (posisiInput === "" && namaInput === "" && lokasiInput === "") {
        // Jika semua input kosong, tampilkan semua data
        responseDataMagang(data);
      } else {
        // Jika ada kriteria pencarian, tampilkan hasil pencarian
        responseDataMagang(filteredResults);
      }
    } else {
      console.error("Data is not an array:", data);
    }
  } catch (error) {
    console.error("Error searching data: ", error);
  }
};

window.onload = function () {
  fetchData();
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");

  searchButton.addEventListener("click", searchData);
  clearButton.addEventListener("click", clearSearch);
};
