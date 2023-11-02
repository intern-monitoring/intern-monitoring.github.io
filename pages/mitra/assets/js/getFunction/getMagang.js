import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetMagang =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang-mitra";

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
      href="#"
    >
      Detail
    </a>
  </div>
  <div>
    <a
      id="editButton"
      data-ripple-light="true"
      data-dialog-target="dialog-edit"
      class="inline-flex items-center px-2 cursor-pointer text-sm text-green-600 decoration-2 hover:underline font-medium"
    >
      Edit
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
        <div
          class="opacity-100 h-full w-full py-10 px-5 md:px-16 lg:px-20"
        >
          <div
            class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          >
            <div
              class="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-gray-800 antialiased"
            >
              Edit data magang
            </div>
            <div class="p-5 overflow-y-auto">
              <!-- Grid -->
              <div
                class="grid sm:grid-cols-12 gap-2 sm:gap-6"
              >
                <div class="sm:col-span-3">
                  <label
                    class="inline-block text-sm text-gray-800 mt-2.5"
                  >
                    Profile photo
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <div class="flex items-center gap-5">
                    <img
                      class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                      src="../../images/netflix_logo.jpg"
                      alt="Image Description"
                    />
                    <div class="flex gap-x-2">
                      <div>
                        <button
                          type="button"
                          class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle text-sm"
                        >
                          <svg
                            class="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                              d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                            />
                          </svg>
                          Change photo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Col -->
                <!-- Posisi -->
                <div class="sm:col-span-3">
                  <label
                    for="af-account-full-name"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Posisi
                  </label>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input
                      id="posisi"
                      type="text"
                      class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Posisi magang"
                    />
                  </div>
                </div>
                <!-- End Col -->
                <!-- EndPosisi -->

                <!-- Lokasi -->
                <div class="sm:col-span-3">
                  <label
                    for="af-account-alamat"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Lokasi
                  </label>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-9">
                  <textarea
                    id="lokasi"
                    class="py-2 px-3 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    rows="4"
                    placeholder="Lokasi perusahaan"
                  ></textarea>
                </div>
                <!-- End Col -->
                <!-- End Lokasi -->

                <!-- Deskripsi Magang -->
                <div class="sm:col-span-3">
                  <label
                    for="af-account-deskripsi"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Deskripsi Magang
                  </label>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-9">
                  <input
                    id="deskripsimagang"
                    type="hidden"
                    name="content"
                  />
                  <trix-editor
                    input="deskripsimagang"
                  ></trix-editor>
                </div>
                <!-- End Col -->
                <!-- End Deskripsi Magang -->

                <!-- Info Tambahan -->
                <div class="sm:col-span-3">
                  <label
                    for="af-account-info"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Info Tambahan
                  </label>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-9">
                  <input
                    id="infotambahanmagang"
                    type="hidden"
                    name="content"
                  />
                  <trix-editor
                    input="infotambahanmagang"
                  ></trix-editor>
                </div>
                <!-- End Col -->
                <!-- End Info Tambahan -->

                <!-- Tentang Mitra -->
                <div class="sm:col-span-3">
                  <label
                    for="af-account-info"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Info Tambahan
                  </label>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-9">
                  <input
                    id="tentangmitra"
                    type="hidden"
                    name="content"
                  />
                  <trix-editor
                    input="tentangmitra"
                  ></trix-editor>
                </div>
                <!-- End Col -->
                <!-- End Tentang Mitra -->

                <!-- Expired -->
                <div class="sm:col-span-3">
                  <label
                    for="af-account-expired"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Expired
                  </label>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-9">
                  <input
                    id="expired"
                    type="date"
                    class="py-2 px-3 pr-11 block w-full border-[1px] border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Tanggal expired magang"
                  />
                </div>
                <!-- End Col -->
              </div>
              <!-- End Expired -->
              <!-- End Grid -->
            </div>
            <div
              class="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500"
            >
              <button
                data-ripple-dark="true"
                data-dialog-close="true"
                class="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                id="updateButton"
                data-ripple-light="true"
                data-dialog-close="true"
                class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
}

export function isiRow(value) {
  const content = tableMagang
    .replace("#POSISI#", value.posisi)
    .replace("#LOKASI#", value.lokasi)
    .replace("#EXPIRED#", value.expired)
    .replace("#IDHAPUS#", value._id)
    .replace("#IDEDIT#", value._id);
  addInner("magang", content);

  const editButton = document.getElementById("editButton");

  // Add a click event listener to the "Edit" button
  editButton.addEventListener("click", function () {
    // Call a function to fetch data based on the selected ID and populate the modal fields
    fetchDataAndPopulateModal(value._id);
  });
}

const API_ENDPOINT =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang-mitra";

function fetchDataAndPopulateModal(_id) {
  // Perform a fetch request to get data based on the selected ID
  fetch(`${API_ENDPOINT}/${_id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Populate the modal fields with the retrieved data
      document.getElementById("posisi").value = data.posisi;
      document.getElementById("lokasi").value = data.lokasi;
      document.getElementById("deskripsimagang").value = data.deskripsimagang;
      document.getElementById("infotambahanmagang").value =
        data.infotambahanmagang;
      document.getElementById("tentangmitra").value = data.tentangmitra;
      document.getElementById("expiredInput").value = data.expired;

      // Display the modal (you need to implement your modal display logic)
      // modalElement.style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
