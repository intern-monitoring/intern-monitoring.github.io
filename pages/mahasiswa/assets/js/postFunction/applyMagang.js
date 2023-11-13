import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const applyMagang = (APPLY) => {
  Swal.fire({
    title: "Konfirmasi Apply Magang",
    text: "Apakah Anda yakin ingin Apply Magang ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Apply!",
  }).then((result) => {
    if (result.isConfirmed) {
      const target_url =
        "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
        APPLY;
      const tokenvalue = getCookie("Authorization");
      const tokenkey = "Authorization";
      const idMagang = APPLY;
      postWithToken(target_url, tokenkey, tokenvalue, (result) =>
        responseData(result, idMagang)
      );
    }
  });
};

const responseData = (result, idMagang) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Berhasil Apply Magang",
      text: result.message,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Apply Gagal",
      text: result.message,
    });
  }
};

window.applyMagang = applyMagang;
