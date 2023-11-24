import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetMahasiswaMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export const dataPembimbing = `
<div class="pb-3">
<img
  class="inline-block h-32 w-32 rounded-full ring-2 ring-white"
  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
  alt="Image Description"
/>
</div>
<div class="space-y-1">
<div>
  <h3 class="font-semibold text-gray-800">
    Nama Pembimbing :
  </h3>
  <p class="text-gray-500">#PEMBIMBING#</p>
</div>
<div>
  <span class="block font-semibold">Email :</span>
  <p class="text-blue-700">#EMAILPEMBIMBING#</p>
</div>
<div>
  <span class="block font-semibold"
    >Dosen Prodi :</span
  >
  <p class="text-gray-500">#PRODI#</p>
</div>
</div>
  `;

export const dataMentor = `
<div class="pb-3">
<img
  class="inline-block h-32 w-32 rounded-full ring-2 ring-white"
  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  alt="Image Description"
/>
</div>
<div class="space-y-1">
<div>
  <h3 class="font-semibold text-gray-800">
    Nama Mentor :
  </h3>
  <p class="text-gray-500">#MENTOR#</p>
</div>
<div>
  <span class="block font-semibold">Email :</span>
  <p class="text-blue-700">#EMAILMENTOR#</p>
</div>
<div>
  <span class="block font-semibold"
    >Mentor Perusahaan :</span
  >
  <p class="text-gray-500">#PERUSAHAAN#</p>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  results.forEach((result) => {
    isiRowPembimbing(result);
    isiRowMentor(result);
  });
}

export function isiRowPembimbing(value) {
  const pembimbing = dataPembimbing
    .replace("#PEMBIMBING#", value.pembimbing.namalengkap)
    .replace("#EMAILPEMBIMBING#", value.pembimbing.akun.email)
    .replace("#PRODI#", value.pembimbing.prodi);
  addInner("dataPembimbing", pembimbing);
}

export function isiRowMentor(value) {
  const mentor = dataMentor
    .replace("#MENTOR#", value.mentor.namalengkap)
    .replace("#EMAILMENTOR#", value.mentor.akun.email)
    .replace("#PERUSAHAAN#", value.mentor.mitra.nama);
  addInner("dataMentor", mentor);
}
