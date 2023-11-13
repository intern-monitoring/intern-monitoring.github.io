import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetApply =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export const tableApply = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="pl-6 pr-6 py-3">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="../../images/netflix_logo.jpg"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800"
          >#NAMAPERUSAHAAN#</span
        >
      </div>
    </div>
  </div>
</td>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#POSISI#</span
    >
  </div>
</td>

<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#LOKASI#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="#BGKAMPUS# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #SELEKSIKAMPUS#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="#BGMITRA# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #SELEKSIMITRA#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-1.5">
    <a
      href="detailApplyMagang?applyId=#DETAIL#"
      type="button"
      class="inline-flex items-center gap-x-1.5 pr-2"
    >
      <div>
        <span
          class="py-1 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        >
          Detail
        </span>
      </div>
    </a>
    <a
      href="#"
      type="button"
      class="inline-flex items-center gap-x-1.5"
    >
      <div>
        <span
          class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none"
        >
          Batal Apply
        </span>
      </div>
    </a>
  </div>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const statuskampus =
    value.seleksikampus === true
      ? "Lolos"
      : value.seleksikampus === false
      ? "Tidak Lolos"
      : "Proses";

  const statusmitra =
    value.seleksimitra === true
      ? "Lolos"
      : value.seleksimitra === false
      ? "Tidak Lolos"
      : "Proses";

  const bgkampus =
    value.seleksikampus === true
      ? "bg-green-200"
      : value.seleksikampus === false
      ? "bg-red-200"
      : "bg-gray-200";

  const bgmitra =
    value.seleksimitra === true
      ? "bg-green-200"
      : value.seleksimitra === false
      ? "bg-red-200"
      : "bg-gray-200";

  const content = tableApply
    .replace("#NAMAPERUSAHAAN#", value.magang.mitra.nama)
    .replace("#POSISI#", value.magang.posisi)
    .replace("#LOKASI#", value.magang.lokasi)
    .replace("#SELEKSIKAMPUS#", statuskampus)
    .replace("#SELEKSIMITRA#", statusmitra)
    .replace("#BGKAMPUS#", bgkampus)
    .replace("#BGMITRA#", bgmitra)
    .replace("#DETAIL#", value._id);
  addInner("applyMagang", content);
}
