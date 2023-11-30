import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetMahasiswaMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export const tableMahasiswaMagang = `
<tr>
<td class="h-px w-px whitespace-nowrap">
  <div class="pl-6 pr-6 py-3">
    <div class="flex items-center gap-x-3">
      <img
        class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div class="grow">
        <span
          class="block text-sm font-semibold text-gray-800"
          >#NAMAMHS#</span
        >
        <span class="block text-sm text-gray-500"
          >#EMAILMHS#</span
        >
      </div>
    </div>
  </div>
</td>
<td class="h-px w-72 whitespace-nowrap"></td>
<td class="h-px w-72 whitespace-nowrap">
  <div class="px-6 py-3">
    <span
      class="block text-sm font-semibold text-gray-800"
      >#POSISI#</span
    >
  </div>
</td>
</tr>
`;

export function responseData(results) {
  results.forEach(isiRow);
  hide("skeletonLoader");
}

export function isiRow(value) {
  if (value.status === 1 && value.mentor.namalengkap) {
    const mahasiswamagang = tableMahasiswaMagang
      .replace("#NAMAMHS#", value.mahasiswa.namalengkap)
      .replace("#EMAILMHS#", value.mahasiswa.akun.email)
      .replace("#POSISI#", value.magang.posisi);
    addInner("mahasiswaMagang", mahasiswamagang);
  }
}
