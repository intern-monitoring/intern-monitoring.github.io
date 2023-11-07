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

    // Ubah data menjadi array
    const dataArray = Array.isArray(data) ? data : Array.from(data);

    responseDataMagang(dataArray);
  } catch (error) {
    console.error("Error fetching or processing data: ", error);
  }
};

const clearSearch = () => {
  document.getElementById("posisi").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("lokasi").value = "";

  // Panggil fetchData untuk menampilkan data awal setelah membersihkan kolom pencarian
  fetchData();
};

const searchData = async () => {
  const posisiInput = document.getElementById("posisi").value.toLowerCase();
  const namaInput = document.getElementById("nama").value.toLowerCase();
  const lokasiInput = document.getElementById("lokasi").value.toLowerCase();

  try {
    const data = await fetchData(); // Ambil data baru dari server setiap kali melakukan pencarian

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
      responseDataMagang(filteredResults);
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
