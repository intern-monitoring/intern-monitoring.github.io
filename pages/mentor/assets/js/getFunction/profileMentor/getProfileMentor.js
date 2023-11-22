import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetProfileMentor =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mentor";

export const dataMentor = `

`;

export function responseData(results) {
  console.log(results);
  isiRow(results);
}

export function isiRow(value) {
  const content = dataMentor
    .replace("#NAMAMENTOR#", value.namalengkap)
    .replace("#TANGGALLAHIR#", value.tanggallahir)
    .replace("#NIK#", value.nik)
    .replace("#PRODI#", value.prodi)
    .replace("#EMAIL#", value.akun.email)
    .replace("#EDITACCOUNT#", value.akun._id)
    .replace("#IDEDIT#", value._id);
  addInner("profileMentor", content);
}
