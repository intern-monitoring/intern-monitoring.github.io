import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetProfileMahasiswa =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa";

export const dataMahasiswa = `
<div>
<div>
  <label class="sr-only"> Photo </label>

  <div class="flex items-center justify-center gap-x-5">
    <img
      class="-mt-14 relative z-10 inline-block h-32 w-32 mx-auto sm:mx-0 rounded-full ring-4 ring-white"
      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
      alt="Image Description"
    />
  </div>
</div>
<div class="flex justify-center gap-5 pt-5">
  <h2 class="text-2xl text-gray-900 font-semibold">
    #NAMALENGKAP#
  </h2>
</div>
<div class="flex justify-center gap-2">
  <h3 class="text-base text-gray-900 font-normal">1214054</h3>
</div>
<div class="flex justify-center gap-2 pt-5">
  <label class="text-base text-gray-900 font-semibold"
    >Tanggal Lahir :</label
  >
  <h3 class="text-base text-gray-900 font-normal">
    #TANGALLAHIR#
  </h3>
</div>
<div class="flex justify-center gap-2">
  <label class="text-base text-gray-900 font-semibold"
    >Jenis Kelamin :</label
  >
  <h3 class="text-base text-gray-900 font-normal">#GENDER#</h3>
</div>
</div>
<div class="mt-2 border-b border-gray-200"></div>

<div class="grid grid-cols-2 py-5">
<div class="mx-auto">
  <div class="flex justify-center mb-2">
    <p
      class="inline-flex justify-center items-center gap-x-3 text-xl text-center font-semibold text-gray-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-bank"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"
        />
      </svg>
      Perguruan Tinggi
    </p>
  </div>
  <p class="text-center text-base text-gray-500">
    #PERGURUAN#
  </p>
</div>
<div class="mx-auto">
  <div class="flex justify-center mb-2">
    <p
      class="inline-flex justify-center items-center gap-x-3 text-xl text-center font-semibold text-gray-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path
          d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"
        />
        <path
          d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"
        />
      </svg>
      Prodi
    </p>
  </div>
  <p class="text-center text-base text-gray-500">
    #PRODI#
  </p>
</div>
</div>
`;

export function responseDataProfile(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const content = dataMahasiswa
    .replace("#NAMALENGKAP#", value.namalengkap)
    .replace("#TANGGALLAHIR#", value.tanggallahir)
    .replace("#GENDER#", value.jeniskelamin)
    .replace("#NIM#", value.nim)
    .replace("#PERGURUAN#", value.perguruantinggi)
    .replace("#PRODI#", value.prodi);
  addInner("profileMahasiswa", content);
}
