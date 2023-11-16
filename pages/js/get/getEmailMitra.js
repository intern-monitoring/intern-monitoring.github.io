import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetEmail =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mitra";

export const userEmail = `
<p class="text-sm text-gray-500">Signed in as</p>
<p class="text-sm font-medium text-gray-800">
  #EMAILUSER#
</p>
`;
export function responseData(results) {
  emailUser(results);
}
export function emailUser(value) {
  const email = userEmail.replace("#EMAILUSER#", value.akun.email);
  addInner("emailUser", email);
}
