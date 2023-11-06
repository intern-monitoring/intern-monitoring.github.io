import { responseDataMagang, URLGetMagang } from "./getMagang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const fetchData = async () => {
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

  responseDataMagang(data);
};

window.onload = function () {
  fetchData(); // Fungsi untuk menampilkan semua data saat halaman dimuat
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchData); // Menjalankan fungsi pencarian saat tombol search diklik
};

const searchData = () => {
  const posisiInput = document.getElementById("posisi").value.toLowerCase();
  const namaInput = document.getElementById("nama").value.toLowerCase();
  const lokasiInput = document.getElementById("lokasi").value.toLowerCase();

  const magangData = JSON.parse(localStorage.getItem("magangData")) || [];

  const filteredResults = magangData.filter((item) => {
    const posisi = item.posisi.toLowerCase();
    const nama = item.mitra.nama.toLowerCase();
    const lokasi = item.lokasi.toLowerCase();
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
    responseDataMagang(magangData);
  } else {
    // Jika ada kriteria pencarian, tampilkan hasil pencarian
    responseDataMagang(filteredResults);
  }
};
