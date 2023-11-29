import { addInner } from "https://jscroot.github.io/element/croot.js";
import { convertToWIB } from "./convertToWib.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

export const dataDailyReport = `
<div class="bg-white rounded-xl border shadow-md p-4 sm:p-7">
<div class="grid gap-4">
  <div>
    <h2 class="text-2xl font-semibold text-gray-800">
      Data report
    </h2>
    <p class="text-md text-gray-600 pb-1">
      Berikut merupakan data daily report magang yang dikirim oleh
      mahasiswa.
    </p>
    <div class="border-b pt-1 border-gray-200"></div>
  </div>
  <div>
    <div class="grid">
      <!-- Mahasiswa -->
      <div class="pb-4">
        <h2 class="text-lg font-semibold text-gray-800">
          Pengirim Report :
        </h2>
      </div>
      <div class="flex gap-x-8 text-sm items-center">
        <div>
          <img
            class="inline-block h-28 w-28 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
        </div>
        <div class="space-y-1">
          <div>
            <h3 class="font-semibold text-gray-800">
              Nama Mahasiswa :
            </h3>
            <p class="text-gray-500">#MAHASISWA#</p>
          </div>
          <div>
            <span class="block font-semibold">NIM :</span>
            <p class="text-gray-500">#NIM#</p>
          </div>
          <div>
            <span class="block font-semibold">Prodi :</span>
            <p class="text-gray-500">#PRODI#</p>
          </div>
        </div>
      </div>
      <!-- End Mahasiswa -->
    </div>
  </div>
  <!-- Col -->
  <div>
    <div>
      <div class="pb-2">
        <h2 class="text-lg font-semibold text-gray-800">
          Isi Report :
        </h2>
        <div class="border-b pt-1 border-gray-200"></div>
      </div>
      <div class="py-2">
        <h3 class="text-md font-semibold text-gray-800">
          Judul daily report :
        </h3>
        <p class="text-gray-800 text-sm">#JUDUL#</p>
      </div>
      <div class="py-2">
        <h3 class="text-md font-semibold text-gray-800">
          Deskripsi daily report :
        </h3>
        <p class="text-gray-800 text-sm">#DESKRIPSI#</p>
        <div class="border-b border-gray-200 pt-4"></div>
      </div>
      <div class="pt-2 flex justify-between items-start">
        <div class="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
            />
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
            />
          </svg>
          <p class="text-md font-semibold text-gray-800">
            Terikirim pada :
            <span class="text-gray-800 text-sm font-normal"
              >#TANGGAL#</span
            >
          </p>
        </div>
        <a
          href="reportReview.html"
          class="py-2 px-3 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-md shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1 focus:ring-offset-white"
        >
          Kembali
        </a>
      </div>
    </div>
  </div>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
  hide("skeletonLoader");
}

export function isiRow(value) {
  const wibCreated = convertToWIB(value.createdat);
  const content = dataDailyReport
    .replace("#MAHASISWA#", value.mahasiswa.namalengkap)
    .replace("#NIM#", value.mahasiswa.nim)
    .replace("#PRODI#", value.mahasiswa.prodi)
    .replace("#JUDUL#", value.judul)
    .replace("#DESKRIPSI#", value.isi)
    .replace("#TANGGAL#", wibCreated);
  addInner("detailReportReview", content);
}
