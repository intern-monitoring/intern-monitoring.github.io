import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const detailPeserta = `
<div class="bg-white rounded-xl shadow-md">
<div
  class="relative h-48 rounded-t-xl bg-[url('https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2232&amp;q=80')] bg-no-repeat bg-cover bg-center"
>
  <span
    class="absolute rounded-t-xl top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"
  ></span>
  <div class="absolute top-0 left-0 p-4">
    <a
      href="seleksiBerkas.html"
      class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
    >
      Kembali
    </a>
  </div>
</div>

<div class="pt-0 p-4 sm:pt-0 sm:p-7">
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
    <div class="flex justify-center gap-5 pt-1">
      <h3 class="text-base text-gray-900 font-normal">#EMAIL#</h3>
    </div>
    <div class="flex justify-center gap-2 pt-5">
      <label class="text-base text-gray-900 font-semibold"
        >NIM :</label
      >
      <h3 class="text-base text-gray-900 font-normal">#NIM#</h3>
    </div>
    <div class="flex justify-center gap-2">
      <label class="text-base text-gray-900 font-semibold"
        >Tanggal Lahir :</label
      >
      <h3 class="text-base text-gray-900 font-normal">
        #TANGGALLAHIR#
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
      <p class="text-center text-sm text-gray-500">#PERGURUAN#</p>
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
      <p class="text-center text-sm text-gray-500">#PRODI#</p>
    </div>
  </div>
  <div class="border-b border-gray-200"></div>

  <div class="pt-5">
    <div class="flex justify-center pb-2">
      <h2 class="text-xl text-gray-900 font-semibold">
        Magang yang di Apply :
      </h2>
    </div>
    <div class="flex justify-center pb-10">
      <h2 class="text-lg text-gray-900 font-semibold">#POSISI#</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex justify-center gap-2">
        <label
          class="text-sm text-gray-900 font-semibold lg:text-base"
          >Nama Perusahaan :</label
        >
        <h2 class="text-sm text-gray-900 font-normal lg:text-base">
          #NAMAPERUSAHAAN#
        </h2>
      </div>
      <div class="flex justify-center gap-2">
        <label
          class="text-sm text-gray-900 font-semibold lg:text-base"
          >Narahubung :</label
        >
        <h3 class="text-sm text-gray-900 font-normal lg:text-base">
          #NAMANARAHUBUNG#
        </h3>
      </div>
      <div class="flex justify-center gap-2">
        <label
          class="text-sm text-gray-900 font-semibold lg:text-base"
          >Nomor Narahubung :</label
        >
        <h3 class="text-sm text-gray-900 font-normal lg:text-base">
          #NOHP#
        </h3>
      </div>
      <div class="flex justify-center gap-2 pb-5">
        <label
          class="text-sm text-gray-900 font-semibold lg:text-base"
          >Website :</label
        >
        <h3 class="text-sm text-gray-900 font-normal lg:text-base">
          #WEBSITE#
        </h3>
      </div>
    </div>
    <div class="mt-2 border-b border-gray-200"></div>
    <div class="grid grid-cols-3 gap-2 pt-5">
      <div class="mx-auto">
        <div class="flex justify-center mb-2">
          <p
            class="inline-flex justify-center items-center gap-x-3 text-base text-center font-semibold text-gray-900 lg:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bank"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"
              />
            </svg>
            Kategori
          </p>
        </div>
        <p
          class="flex justify-center text-xs text-center text-gray-500 lg:text-base"
        >
          #KATEGORI#
        </p>
      </div>
      <div class="mx-auto">
        <div class="flex justify-center mb-2">
          <p
            class="inline-flex justify-center items-center gap-x-3 text-base text-center font-semibold text-gray-900 lg:text-lg"
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
            Alamat
          </p>
        </div>
        <p class="text-center text-xs text-gray-500 lg:text-base">
          #ALAMAT#
        </p>
      </div>
      <div class="mx-auto">
        <div class="flex justify-center mb-2">
          <p
            class="inline-flex justify-center items-center gap-x-3 text-base text-center font-semibold text-gray-900 lg:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
            Sektor
          </p>
        </div>
        <p
          class="justify-center text-xs text-center text-gray-500 lg:text-base"
        >
          #SEKTOR#
        </p>
      </div>
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
  const content = detailPeserta
    .replace("#NAMALENGKAP#", value.mahasiswa.namalengkap)
    .replace("#TANGGALLAHIR#", value.mahasiswa.tanggallahir)
    .replace("#GENDER#", value.mahasiswa.jeniskelamin)
    .replace("#EMAIL#", value.mahasiswa.akun.email)
    .replace("#NIM#", value.mahasiswa.nim)
    .replace("#PERGURUAN#", value.mahasiswa.perguruantinggi)
    .replace("#PRODI#", value.mahasiswa.prodi)
    .replace("#NAMAPERUSAHAAN#", value.magang.mitra.nama)
    .replace("#POSISI#", value.magang.posisi)
    .replace("#NAMANARAHUBUNG#", value.magang.mitra.namanarahubung)
    .replace("#NOHP#", value.magang.mitra.nohpnarahubung)
    .replace("#KATEGORI#", value.magang.mitra.kategori)
    .replace("#SEKTOR#", value.magang.mitra.sektorindustri)
    .replace("#TENTANG#", value.magang.mitra.tentang)
    .replace("#ALAMAT#", value.magang.mitra.alamat)
    .replace("#WEBSITE#", value.magang.mitra.website);
  addInner("detailSeleksiBerkas", content);
}
