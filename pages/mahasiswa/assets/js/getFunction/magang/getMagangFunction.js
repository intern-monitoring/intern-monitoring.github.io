import { responseDataMagang, URLGetMagang } from "./getMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { show, hide } from "https://jscroot.github.io/element/croot.js";

const fetchData = async () => {
  show("skeletonLoader");
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

    const response = await fetch(URLGetMagang, requestOptions);
    const data = await response.json();

    // Simpan data baru ke localStorage
    localStorage.setItem("magangData", JSON.stringify(data));

    responseDataMagang(data);
  } catch (error) {
    console.error("Error fetching or processing data: ", error);
    hide("skeletonLoader");
  }
};

window.onload = function () {
  fetchData(); // Fungsi untuk menampilkan semua data saat halaman dimuat
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");

  searchButton.addEventListener("click", searchData);
  clearButton.addEventListener("click", clearSearch); // Menjalankan fungsi clear saat tombol Clear diklik
};

const clearSearch = () => {
  document.getElementById("posisi").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("lokasi").value = "";

  // hapus card hasil pencarian juga lalu tampilkan data awal dari magangData di local storage
  const magangContainer = document.getElementById("magang");
  magangContainer.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("magangData"));
  responseDataMagang(data);
};

const searchData = async () => {
  const posisiInput = document.getElementById("posisi").value.toLowerCase();
  const namaInput = document.getElementById("nama").value.toLowerCase();
  const lokasiInput = document.getElementById("lokasi").value.toLowerCase();

  try {
    let data = localStorage.getItem("magangData");

    if (!data) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", getCookie("Authorization"));
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(URLGetMagang, requestOptions);
      data = await response.json();
      localStorage.setItem("magangData", JSON.stringify(data));
    } else {
      data = JSON.parse(data);
    }

    if (Array.isArray(data)) {
      const filteredResults = data.filter((item) => {
        const posisi = (item.posisi || "").toLowerCase(); // Periksa apakah posisi ada
        const nama = (item.mitra.nama || "").toLowerCase(); // Periksa apakah mitra dan nama ada
        const lokasi = (item.lokasi || "").toLowerCase(); // Periksa apakah lokasi ada

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
      hide("skeletonLoader");
    }
  } catch (error) {
    console.error("Error searching data: ", error);
  }
};
