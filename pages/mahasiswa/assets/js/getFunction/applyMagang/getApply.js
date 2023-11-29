import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetApply =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export const tableBelumKonfirmasi = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-1.5">
    <button
      onclick="deleteApply('#IDHAPUS#')"
      class="inline-flex items-center gap-x-1.5"
    >
      <div>
        <span
          class="py-1 px-1 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none"
        >
          Batal Apply
        </span>
      </div>
    </button>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-3">
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
      class="#BGBERKAS# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #SELEKSIBERKAS#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="#BGWAWANCARA# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #SELEKSIWAWANCARA#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <a
    href="detailApplyMagang?applyId=#DETAIL#"
    type="button"
    class="block"
  >
    <span class="px-6 py-1.5">
      <span
        class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
          />
          <path
            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Detail
      </span>
    </span>
  </a>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-1.5">
    <button
      id="buttonPilih"
      value="1"
      onclick="pilihMagang('#PILIH#')"
      class="inline-flex items-center gap-x-1.5 text-sm text-green-600 decoration-2 hover:underline font-medium pr-5"
    >
      Pilih
    </button>
    <button
      id="buttonTidakPilih"
      value="2"
      onclick="tidakPilihMagang('#TIDAK#')"
      class="inline-flex items-center gap-x-1.5 text-sm text-red-600 decoration-2 hover:underline font-medium pr-5"
    >
      Tidak
    </button>
  </div>
</td>
</tr>
  `;

export const tableKonfirmasi = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="px-6 py-3">
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
      class="#BGBERKAS# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #SELEKSIBERKAS#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex justify-center py-3">
    <span
      class="#BGWAWANCARA# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #SELEKSIWAWANCARA#
    </span>
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <a
    href="detailApplyMagang?applyId=#DETAIL#"
    type="button"
    class="block"
  >
    <span class="px-6 py-1.5">
      <span
        class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
          />
          <path
            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Detail
      </span>
    </span>
  </a>
</td>
<td class="h-px w-px pr-6 whitespace-nowrap">
  <div class="flex py-3">
    <span
      class="#BGKONFIRMASI# inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium text-gray-900"
    >
      #STATUS#
    </span>
  </div>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach((result) => {
    isiRowBelumKonfirmasi(result);
    isiRowKonfirmasi(result);
  });
  hide("skeletonLoader");
}

export function isiRowBelumKonfirmasi(value) {
  if (!value.status) {
    const statusberkas =
      value.seleksiberkas === 1
        ? "Lolos"
        : value.seleksiberkas === 2
        ? "Tidak Lolos"
        : "Pending";

    const statuswawancara =
      value.seleksiwewancara === 1
        ? "Lolos"
        : value.seleksiwewancara === 2
        ? "Tidak Lolos"
        : "Pending";

    const bgberkas =
      value.seleksiberkas === 1
        ? "bg-green-200"
        : value.seleksiberkas === 2
        ? "bg-red-200"
        : "bg-gray-200";

    const bgwawancara =
      value.seleksiwewancara === 1
        ? "bg-green-200"
        : value.seleksiwewancara === 2
        ? "bg-red-200"
        : "bg-gray-200";

    const belumKonfirmasi = tableBelumKonfirmasi
      .replace("#NAMAPERUSAHAAN#", value.magang.mitra.nama)
      .replace("#POSISI#", value.magang.posisi)
      .replace("#LOKASI#", value.magang.lokasi)
      .replace("#SELEKSIBERKAS#", statusberkas)
      .replace("#SELEKSIWAWANCARA#", statuswawancara)
      .replace("#BGBERKAS#", bgberkas)
      .replace("#BGWAWANCARA#", bgwawancara)
      .replace("#IDHAPUS#", value._id)
      .replace("#DETAIL#", value._id)
      .replace("#PILIH#", value._id)
      .replace("#TIDAK#", value._id);
    addInner("belumKonfirmasiMagang", belumKonfirmasi);
  }
}

export function isiRowKonfirmasi(value) {
  if (value.status === 1 || value.status === 2) {
    const statusberkas =
      value.seleksiberkas === 1
        ? "Lolos"
        : value.seleksiberkas === 2
        ? "Tidak Lolos"
        : "Pending";

    const statuswawancara =
      value.seleksiwewancara === 1
        ? "Lolos"
        : value.seleksiwewancara === 2
        ? "Tidak Lolos"
        : "Pending";

    const bgberkas =
      value.seleksiberkas === 1
        ? "bg-green-200"
        : value.seleksiberkas === 2
        ? "bg-red-200"
        : "bg-gray-200";

    const bgwawancara =
      value.seleksiwewancara === 1
        ? "bg-green-200"
        : value.seleksiwewancara === 2
        ? "bg-red-200"
        : "bg-gray-200";

    const statusKonfirmasi =
      value.status === 1
        ? "Bersedia magang"
        : value.status === 2
        ? "Tidak bersedia"
        : "";
    const bgKonfirmasi =
      value.status === 1
        ? "bg-green-200"
        : value.status === 2
        ? "bg-red-200"
        : "";

    const konfirmasi = tableKonfirmasi
      .replace("#NAMAPERUSAHAAN#", value.magang.mitra.nama)
      .replace("#POSISI#", value.magang.posisi)
      .replace("#LOKASI#", value.magang.lokasi)
      .replace("#SELEKSIBERKAS#", statusberkas)
      .replace("#SELEKSIWAWANCARA#", statuswawancara)
      .replace("#BGBERKAS#", bgberkas)
      .replace("#BGWAWANCARA#", bgwawancara)
      .replace("#IDHAPUS#", value._id)
      .replace("#DETAIL#", value._id)
      .replace("#BGKONFIRMASI#", bgKonfirmasi)
      .replace("#STATUS#", statusKonfirmasi);

    addInner("konfirmasiMagang", konfirmasi);
  }
}
