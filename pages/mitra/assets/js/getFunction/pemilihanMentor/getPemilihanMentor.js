import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetPemilihanMentor =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang/seleksi";

export const tablePemilihanMentor = `

`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  if (value.status === 1) {
    // Mentor
    // const mentorNama =
    //   value.mentor.namalengkap === null
    //     ? value.mentor.namalengkap
    //     : "Mentor belum ditetapkan";

    // const mentorEmail =
    //   value.mentor.akun.email === null ? value.mentor.akun.email : "";

    // // Pembimbing
    // const pembimbingNama =
    //   value.pembimbing.namalengkap === null
    //     ? value.pembimbing.namalengkap
    //     : "Pembimbing belum ditetapkan";
    // const pembimbingEmail =
    //   value.pembimbing.akun.email === null ? value.pembimbing.akun.email : "";

    const pemilihanmentor = tablePemilihanMentor
      .replace("#NAMAMHS#", value.mahasiswa.namalengkap)
      .replace("#EMAILMHS#", value.mahasiswa.akun.email)
      .replace("#POSISI#", value.magang.posisi)
      .replace("#DETAIL#", value._id)
      .replace("#PENENTUANMENTOR#", value._id);

    addInner("tablePemilihanMentor", pemilihanmentor);
  }
}
