import { addInner } from "https://jscroot.github.io/element/croot.js";
import { convertToWIB } from "./convertToWib.js";
import {
  mentorID,
  pembimbingID,
} from "../../getFunction/mahasiswaMagang/getIdPembimbingMentor.js";

export const URLGetReport =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report";

export const tableDailyReportPembimbing = `
<tr
class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
>
<td
  class="h-px w-px whitespace-nowrap align-top"
>
  <a class="block p-6 cursor-pointer">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
          >#NAMAPEMBIMBING#</span
        >
        <span
          class="block text-sm text-gray-500"
          >#NIKPEMBIMBING#</span
        >
      </div>
    </div>
  </a>
</td>
<td class="h-px w-72 min-w-[18rem] align-top">
  <a class="block p-6 cursor-pointer">
    <span class="block text-sm text-gray-500"
      >#TASK#</span
    >
  </a>
</td>
<td
  class="h-px w-px whitespace-nowrap align-top"
>
  <a class="block p-6 cursor-pointer">
    <span
      class="text-sm text-gray-600 dark:text-gray-400"
      >#TANGGAL#</span
    >
  </a>
</td>
<td
  class="h-px w-px whitespace-nowrap align-top"
>
  <a
    href="detailDailyReport?reportId=#DETAIL#"
    type="button"
    class="block py-6"
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
</tr>
  `;

export const tableDailyReportMentor = `
<tr
class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
>
<td
  class="h-px w-px whitespace-nowrap align-top"
>
  <a class="block p-6 cursor-pointer">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
          >#NAMAMENTOR#</span
        >
        <span
        class="block text-sm text-gray-500"
        >#NIKMENTOR#</span
      >
      </div>
    </div>
  </a>
</td>
<td class="h-px w-72 min-w-[18rem] align-top">
  <a class="block p-6 cursor-pointer">
    <span class="block text-sm text-gray-500"
      >#TASK#</span
    >
  </a>
</td>
<td
  class="h-px w-px whitespace-nowrap align-top"
>
  <a class="block p-6 cursor-pointer">
    <span
      class="text-sm text-gray-600 dark:text-gray-400"
      >#TANGGAL#</span
    >
  </a>
</td>
<td
  class="h-px w-px whitespace-nowrap align-top"
>
  <a
    href="detailDailyReport?reportId=#DETAIL#"
    type="button"
    class="block py-6"
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
</tr>
  `;

export function responseData(results) {
  results.forEach((result) => {
    isiRowReportPembimbing(result);
    isiRowReportMentor(result);
  });
  CountReportPembimbing(
    results.filter((value) => pembimbingID === value.penerima._id).length
  );
  CountReportMentor(
    results.filter((value) => mentorID === value.penerima._id).length
  );
}

const CountReportPembimbing = (count) => {
  const resultCountElement = document.getElementById("countReportPembimbing");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const CountReportMentor = (count) => {
  const resultCountElement = document.getElementById("countReportMentor");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

export function isiRowReportPembimbing(value) {
  if (pembimbingID === value.penerima._id) {
    const wibCreated = convertToWIB(value.createdat);
    const reportPembimbing = tableDailyReportPembimbing
      .replace("#NAMAPEMBIMBING#", value.penerima.nama)
      .replace("#NIKPEMBIMBING#", value.penerima.nik)
      .replace("#TASK#", value.judul)
      .replace("#TANGGAL#", wibCreated)
      .replace("#DETAIL#", value._id);
    addInner("tableDailyReportPembimbing", reportPembimbing);
  }
}

export function isiRowReportMentor(value) {
  if (mentorID === value.penerima._id) {
    const wibCreated = convertToWIB(value.createdat);
    const reportMentor = tableDailyReportMentor
      .replace("#NAMAMENTOR#", value.penerima.nama)
      .replace("#NIKMENTOR#", value.penerima.nik)
      .replace("#TASK#", value.judul)
      .replace("#TANGGAL#", wibCreated)
      .replace("#DETAIL#", value._id);
    addInner("tableDailyReportMentor", reportMentor);
  }
}
