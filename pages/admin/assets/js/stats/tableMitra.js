import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetMitra =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mitra";

export const tableMitra = `
<tr>
<td class="h-px w-px whitespace-nowrap">
    <div class="pl-6 pr-6 py-3">
    <div class="flex items-center gap-x-3">
        <svg
        class="inline-block h-5 w-5"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M16.0355 1.75926C10.6408 1.75926 5.30597 1.49951 0.0111241 1C-0.288584 7.23393 5.50578 13.1282 12.7987 14.5668L13.9975 14.7266C14.3372 12.4289 15.9956 3.7773 16.595 1.73928C16.4152 1.75926 16.2353 1.75926 16.0355 1.75926Z"
            fill="#A49DFF"
        />
        <path
            d="M16.615 1.75926C16.615 1.75926 25.2266 7.9932 28.5234 16.3451C30.0419 11.3499 31.1608 6.15498 32 1C26.8051 1.49951 21.71 1.75926 16.615 1.75926Z"
            fill="#28289A"
        />
        <path
            d="M13.9975 14.7466L13.8177 15.9455C13.8177 15.9455 12.2592 28.4133 23.1886 31.9699C25.2266 26.8748 27.0049 21.6599 28.5234 16.3251C21.9698 15.8456 13.9975 14.7466 13.9975 14.7466Z"
            fill="#5ADCEE"
        />
        <path
            d="M16.6149 1.75927C16.0155 3.79729 14.3571 12.4089 14.0175 14.7466C14.0175 14.7466 21.9897 15.8456 28.5233 16.3251C25.1866 7.9932 16.6149 1.75927 16.6149 1.75927Z"
            fill="#7878FF"
        />
        </svg>
        <div class="grow">
        <span
            class="block text-sm font-semibold text-gray-800"
        >
            #NAMAMITRA#
        </span>
        <span class="block text-sm text-gray-500">
            #EMAIL#
        </span>
        </div>
    </div>
    </div>
</td>

<td class="h-px w-px whitespace-nowrap">
    <div class="px-6 py-3">
    <span
        class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
    >
        <svg
        class="w-2.5 h-2.5"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        >
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
        </svg>
        #MOU#
    </span>
    </div>
</td>

<td class="h-px w-px whitespace-nowrap">
    <div class="px-6 py-2">
    <span
        class="text-sm text-gray-600 dark:text-gray-400"
        >#SEKTOR#</span
    >
    </div>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
  hide("skeletonLoader");
}

export function isiRow(value) {
  if (value.mou === 1) {
    const statusmou = "Bekerjasama";
    const content = tableMitra
      .replace("#NAMAMITRA#", value.nama)
      .replace("#EMAIL#", value.akun.email)
      .replace("#MOU#", statusmou)
      .replace("#SEKTOR#", value.sektorindustri);
    addInner("kerjasamaMitra", content);
  }
}
