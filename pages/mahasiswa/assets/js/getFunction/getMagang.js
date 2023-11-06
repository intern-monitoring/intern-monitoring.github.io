import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";

export const cardMagang = `
<div class="flex flex-col justify-start rounded-xl p-4 md:p-6 bg-white border border-gray-200 shadow-md">
  <div class="flex items-center gap-x-4">
    <div class="grow">
      <h3 class="text-xl font-semibold text-gray-800">#POSISI#</h3>
      <div class="flex justify-between items-center mt-5">
        <h3 class="text-sm font-semibold text-gray-800">#MITRA#</h3>
        <p class="text-sm inline-flex justify-center items-center gap-x-1 text-center font-semibold text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          #LOKASI#
        </p>
      </div>
      <div class="border-t border-gray-200 mt-2 mb-2"></div>
    </div>
  </div>

  <div class="h-36 overflow-x-auto">
    <p class="text-gray-500 text-sm">#TENTANGMITRA#</p>
  </div>
  <h3 class="flex font-semibold text-gray-800 text-sm mt-8">
    Expired : #EXPIRED#
  </h3>

  <div class="flex justify-end pt-2">
    <a class="inline-flex w-full justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6" href="#">
      Detail
    </a>
  </div>
</div>
`;

window.onload = function () {
  fetchData(); // Fungsi untuk menampilkan semua data saat halaman dimuat
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchData); // Menjalankan fungsi pencarian saat tombol search diklik
};

const fetchData = async () => {
  try {
    const response = await fetch(URLGetMagang);
    const data = await response.json();
    responseDataMagang(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const responseDataMagang = (results) => {
  results.forEach(isiRow);
};

export const isiRow = (value) => {
  const content = cardMagang
    .replace("#POSISI#", value.posisi)
    .replace("#MITRA#", value.mitra.nama)
    .replace("#LOKASI#", value.lokasi)
    .replace("#TENTANGMITRA#", value.mitra.tentang)
    .replace("#EXPIRED#", value.expired);
  addInner("magang", content);
};

const searchData = async () => {
  const posisiInput = document.getElementById("posisi").value.toLowerCase();
  const namaInput = document.getElementById("nama").value.toLowerCase();
  const lokasiInput = document.getElementById("lokasi").value.toLowerCase();

  try {
    const response = await fetch(URLGetMagang);
    const data = await response.json();

    if (Array.isArray(data)) {
      const filteredResults = data.filter((item) => {
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
