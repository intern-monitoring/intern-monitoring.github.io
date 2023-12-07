import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("Authorization");
  const role = getCookie("Role");

  // Jika tidak ada token, kembalikan ke halaman signIn.html
  if (!token) {
    Swal.fire({
      icon: "info",
      title: "Informasi",
      text: "Anda belum login. Silahkan login terlebih dahulu.",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman sign in
      window.location.href = "../signIn.html";
    });
  } else {
    // Jika rolenya bukan "Mitra", tampilkan Sweet Alert dan redirect ke previousPageURL
    if (role !== "mitra") {
      Swal.fire({
        icon: "error",
        title: "Akses Ditolak",
        text: "Anda tidak memiliki akses untuk halaman ini.",
        confirmButtonText: "OK",
      }).then(() => {
        switch (role) {
          case "admin":
            window.location.href = "https://intermoni.my.id/pages/admin/";
            break;
          case "mahasiswa":
            window.location.href = "https://intermoni.my.id/pages/mahasiswa/";
            break;
          case "mentor":
            window.location.href = "https://intermoni.my.id/pages/mentor/";
            break;
          case "pembimbing":
            window.location.href = "https://intermoni.my.id/pages/pembimbing/";
            break;
          default:
            // Jika role tidak cocok dengan yang diharapkan, redirect ke URL sebelumnya atau ke halaman default
            window.location.href =
              previousPageURL || "https://intermoni.my.id/pages/signIn.html";
        }
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", checkTokenAndRedirect);
