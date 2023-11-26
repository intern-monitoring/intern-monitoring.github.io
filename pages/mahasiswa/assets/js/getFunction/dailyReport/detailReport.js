import { addInner } from "https://jscroot.github.io/element/croot.js";
import { convertToWIB } from "./convertToWib.js";

export const dataDailyReport = `
<div class="bg-white rounded-xl border shadow-md p-4 sm:p-7">
<div>
  <div>
    <h2 class="text-xl font-semibold text-gray-800">Data report</h2>
    <p class="text-sm text-gray-600">
      Berikut merupakan data daily report magang.
    </p>
  </div>
  <div class="border-b pt-1 border-gray-200"></div>
  <div class="pt-5">
    <div>
      <h3 class="text-md font-semibold text-gray-800">
        Judul daily report :
      </h3>
      <p class="text-gray-800 text-sm">#JUDUL#</p>
    </div>

    <div class="pt-3">
      <h3 class="text-md font-semibold text-gray-800">
        Deskripsi daily report :
      </h3>

      <p class="text-gray-800 text-sm">#DESKRIPSI#</p>
      <div class="border-b border-gray-200 pt-5"></div>
    </div>
    <div class="pt-4 flex justify-between items-start">
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
          Dibuat tanggal :
          <span class="text-gray-800 text-sm font-normal"
            >#TANGGAL#</span
          >
        </p>
      </div>
      <a
        href="dailyReport.html"
        class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
      >
        Kembali
      </a>
    </div>
  </div>
</div>
<div class="mt-2 flex justify-end gap-x-2"></div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
}

export function isiRow(value) {
  const wibCreated = convertToWIB(value.createdat);
  const content = dataDailyReport
    .replace("#JUDUL#", value.judul)
    .replace("#DESKRIPSI#", value.isi)
    .replace("#TANGGAL#", wibCreated);
  addInner("detailDailyReport", content);
}
