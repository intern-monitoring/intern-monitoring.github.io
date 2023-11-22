import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetProfilePembimbing =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-pembimbing";

export const dataPembimbing = `
<div class="bg-white rounded-xl shadow-md">
<div
  class="relative h-48 rounded-t-xl bg-[url('https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2232&amp;q=80')] bg-no-repeat bg-cover bg-center"
>
  <span
    class="absolute rounded-t-xl top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"
  ></span>
  <div class="absolute top-0 right-0 p-4">
    <a
      href="editProfilePembimbing?pembimbingId=#IDEDIT#"
      class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil-square w-3 h-3"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
      Edit Profile
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
        #NAMAPEMBIMBING#
      </h2>
    </div>
    <div class="flex justify-center gap-5 pt-1">
      <h3 class="text-base text-gray-900 font-normal">#EMAIL#</h3>
      <a
        id="updateButton"
        href="editAccountPembimbing?userId=#EDITACCOUNT#"
        class="py-1 px-1 text-xs inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-lock w-3 h-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
          />
        </svg>
        Edit Account
      </a>
    </div>
    <div class="flex justify-center gap-2 pt-5">
      <label class="text-base text-gray-900 font-semibold"
        >NIK :</label
      >
      <h3 class="text-base text-gray-900 font-normal">#NIK#</h3>
    </div>
  </div>
  <div class="mt-2 border-b border-gray-200"></div>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
}

export function isiRow(value) {
  const content = dataPembimbing
    .replace("#NAMAPEMBIMBING#", value.namalengkap)
    .replace("#TANGGALLAHIR#", value.tanggallahir)
    .replace("#NIK#", value.nik)
    .replace("#PRODI#", value.prodi)
    .replace("#EMAIL#", value.akun.email)
    .replace("#EDITACCOUNT#", value.akun._id)
    .replace("#IDEDIT#", value._id);
  addInner("profilePembimbing", content);
}
