import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetUser =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

export const tableUser = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#EMAIL#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap"></td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#ROLE#</span
    >
  </div>
</td>
<td class="px-6 py-3 text-right">
  <div class="flex justify-end space-x-3">
    <a
      class="text-sm text-blue-600 hover:underline font-medium"
      href="detailUser?userId=#DETAIL#"
      >Detail</a
    >
    <a
      class="text-sm text-red-600 cursor-pointer hover:underline font-medium"
      onclick="deleteMagang('#IDHAPUS#')"
      >Delete</a
    >
  </div>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const content = tableUser
    .replace("#EMAIL#", value.email)
    .replace("#ROLE#", value.role)
    .replace("#IDHAPUS#", value._id)
    .replace("#DETAIL#", value._id);
  addInner("datauser", content);
}
