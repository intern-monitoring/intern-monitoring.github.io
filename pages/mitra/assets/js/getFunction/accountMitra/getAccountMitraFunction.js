import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetAccountMitra =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

export const dataAccountMitra = `
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
    data-ripple-light="true"
    data-dialog-target="dialog-edit"
    class="inline-flex justify-center cursor-pointer items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-5"
  >
    Edit Account
  </a>
  <div
    data-dialog-backdrop="dialog-edit"
    data-dialog-backdrop-close="true"
    class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
  >
    <div
      data-dialog="dialog-edit"
      class="relative w-full h-full top-0 left-0 overflow-x-hidden overflow-y-auto"
    >
      <div class="opacity-100 h-full w-full py-10 px-5 lg:px-20">
        <div
          class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <div class="p-5 overflow-y-auto">
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                Edit Email
              </h2>
              <p class="text-sm text-gray-600">
                Ubah email akun anda
              </p>
            </div>

            <!-- Display Email -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <!-- Email -->
              <div class="sm:col-span-3">
                <label
                  for="af-account-email"
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
                    placeholder="Email akun anda"
                    class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <!-- End Col -->
              <!-- End Email -->
            </div>
            <!-- End Display Email-->
            <div class="mt-5 flex justify-end gap-x-2">
              <a
                data-ripple-dark="true"
                data-dialog-close="true"
                class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              >
                Cancel
              </a>
              <button
                id="updateEmail"
                data-ripple-light="true"
                data-dialog-close="true"
                class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-5"
              >
                Save
              </button>
            </div>
            <!-- Password -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                Edit Password
              </h2>
              <p class="text-sm text-gray-600">
                Ubah password akun anda
              </p>
            </div>
            <!-- Display Account -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <!-- Password Lama -->
              <div class="sm:col-span-3">
                <label
                  for="af-account-pass"
                  class="inline-block text-sm text-gray-800 mt-2.5"
                >
                  Password Lama
                </label>
              </div>
              <!-- End Col -->
              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input
                    id="password"
                    type="password"
                    class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Password Lama"
                  />
                </div>
              </div>
              <!-- End Col -->
              <!-- End Password Lama -->

              <!-- Password Baru -->
              <div class="sm:col-span-3">
                <label
                  for="af-account-pass"
                  class="inline-block text-sm text-gray-800 mt-2.5"
                >
                  Password Baru
                </label>
              </div>
              <!-- End Col -->
              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input
                    id="newpass"
                    type="password"
                    class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Password Baru"
                  />
                </div>
              </div>
              <!-- End Col -->
              <!-- End Password Baru -->

              <!-- Confirm Password -->
              <div class="sm:col-span-3">
                <label
                  for="af-account-cpass"
                  class="inline-block text-sm text-gray-800 mt-2.5"
                >
                  Konfirmasi Password
                </label>
              </div>
              <!-- End Col -->
              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input
                    id="confirmpass"
                    type="password"
                    class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Konfirmasi Password Baru"
                  />
                </div>
              </div>
              <!-- End Col -->
              <!-- End Confirm Password -->
            </div>
            <!-- End Display Account-->
            <div class="mt-5 flex justify-end gap-x-2">
              <a
                data-ripple-light="true"
                data-dialog-close="true"
                class="py-2 px-3 inline-flex cursor-pointer justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              >
                Cancel
              </a>
              <button
                id="updatePassword"
                data-ripple-light="true"
                data-dialog-close="true"
                class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-5"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
}

export function isiRow(value) {
  const content = dataAccountMitra.replace("#EMAIL#", value.email);
  addInner("accountMitra", content);
}
