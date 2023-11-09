import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetAccountMahasiswa =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

export const dataAccountMahasiswa = `
<div class="bg-white rounded-xl border shadow-md p-4 sm:p-7">
<div class="mb-8">
  <h2 class="text-xl font-bold text-gray-800 mb-2">Account</h2>
  <p class="text-sm text-gray-600">
    Informasi tentang data akun anda
  </p>
</div>

<!-- Display Account -->
<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
  <!-- Email -->
  <div class="sm:col-span-3">
    <label
      for="af-account-full-email"
      class="inline-block text-sm text-gray-800 mt-2.5"
    >
      Email
    </label>
  </div>
  <!-- End Col -->
  <div class="sm:col-span-9">
    <div class="sm:flex">
      <input
        id="email"
        type="text"
        value="#EMAIL#"
        class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500"
        disabled
      />
    </div>
  </div>
  <!-- End Col -->
  <!-- End Email -->
</div>
<!-- End Display Account-->
<div class="mt-5 flex justify-end gap-x-2">
  <a
    id="updateButton"
    href="editAccountMahasiswa?userId=#IDEDIT#"
    class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-5"
  >
    Edit Account
  </a>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
}

export function isiRow(value) {
  const content = dataAccountMahasiswa
    .replace("#EMAIL#", value.email)
    .replace("#IDEDIT#", value._id);
  addInner("accountMahasiswa", content);
}
