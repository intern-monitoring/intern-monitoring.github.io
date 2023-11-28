import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";

export const tableMagang = `
<tr>
<td class="h-px w-px whitespace-nowrap">
<div class="pl-6 pr-6 py-3">
  <div class="flex items-center gap-x-3">
    <div class="grow">
      <span
        class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >#POSISI#</span
      >
    </div>
  </div>
</div>
</td>
<td class="h-px w-72 whitespace-nowrap">
<div class="px-6 py-3">
  <span
    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#LOKASI#</span
  >
</div>
</td>
<td class="h-px w-px whitespace-nowrap">
<div class="px-6 py-3">
  <span class="text-sm text-gray-500"
    >#EXPIRED#</span
  >
</div>
</td>
<td class="h-px w-px">
<div class="flex justify-between px-6 py-1.5">
  <div>
    <a
      class="inline-flex items-center text-sm text-blue-600 decoration-2 hover:underline font-medium"
      href="detailMagang?magangId=#DETAIL#"
    >
      Detail
    </a>
  </div>
  <div>
    <a
      href="editMagang?magangId=#IDEDIT#"
      class="inline-flex items-center px-2 cursor-pointer text-sm text-green-600 decoration-2 hover:underline font-medium"
    >
      Edit
    </a>
  </div>
  <div>
    <a
      class="inline-flex items-center cursor-pointer text-sm text-red-600 decoration-2 hover:underline font-medium"
      onclick="deleteMagang('#IDHAPUS#')"
    >
      Delete
    </a>
  </div>
</div>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
  hide("skeletonLoader");
}

export function isiRow(value) {
  const content = tableMagang
    .replace("#POSISI#", value.posisi)
    .replace("#LOKASI#", value.lokasi)
    .replace("#EXPIRED#", value.expired)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#DETAIL#", value._id);
  addInner("magang", content);
}
