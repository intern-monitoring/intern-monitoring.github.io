import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const dataMentor = `
<div class="bg-white rounded-xl shadow-md">
<div
  class="relative h-48 rounded-t-xl bg-[url('https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2232&amp;q=80')] bg-no-repeat bg-cover bg-center"
>
  <span
    class="absolute rounded-t-xl top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"
  ></span>
  <div class="absolute top-0 left-0 p-4">
    <a
      href="daftarMentor.html"
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
        #NAMAMENTOR#
      </h2>
    </div>
    <div class="flex justify-center gap-5 pt-5">
      <label class="text-base text-gray-900 font-semibold"
        >EMAIL :</label
      >
      <h3 class="text-base text-gray-900 font-normal">#EMAIL#</h3>
    </div>
    <div class="flex justify-center gap-2">
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
  hide("skeletonLoader");
}

export function isiRow(value) {
  const content = dataMentor
    .replace("#NAMAMENTOR#", value.namalengkap)
    .replace("#EMAIL#", value.akun.email)
    .replace("#NIK#", value.nik);
  addInner("detailMentor", content);
}
