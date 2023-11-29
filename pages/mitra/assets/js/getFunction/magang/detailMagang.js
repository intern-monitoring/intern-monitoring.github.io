import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const dataMagang = `
<div class="bg-white rounded-xl border shadow-md p-4 sm:p-7">
<div class="p-5">
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h3 class="text-xl font-semibold text-gray-800">#POSISI#</h3>
      <p
        class="inline-flex justify-center items-center gap-x-1 text-center font-semibold text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-geo-alt"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
          />
          <path
            d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        #LOKASI#
      </p>
    </div>
    <div class="border-b border-gray-200"></div>

    <div>
      <h3
        class="text-lg font-semibold text-gray-800 dark:text-white"
      >
        Deskripsi Magang
      </h3>
      <ul class="list-disc pl-5">
        <li class="mt-1 text-gray-800">#DESKRIPSI#</li>
      </ul>
    </div>

    <div>
      <h3
        class="text-lg font-semibold text-gray-800 dark:text-white"
      >
        Info Tambahan Magang
      </h3>
      <ul class="list-disc pl-5">
        <li class="mt-1 text-gray-800">#INFO#</li>
      </ul>
    </div>

    <div>
      <div class="border-t border-gray-200 py-1"></div>
      <p
        class="inline-flex justify-center items-center gap-x-2 text-center font-semibold text-gray-800"
      >
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
        Expired : #EXPIRED#
      </p>
    </div>
    <div class="mt-5 flex justify-end gap-x-2">
      <a
        href="daftarMagang.html"
        class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
      >
        Kembali
      </a>
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
  const content = dataMagang
    .replace("#POSISI#", value.posisi)
    .replace("#LOKASI#", value.lokasi)
    .replace("#DESKRIPSI#", value.deskripsimagang)
    .replace("#INFO#", value.infotambahanmagang)
    .replace("#EXPIRED#", value.expired);
  addInner("detailMagang", content);
}
