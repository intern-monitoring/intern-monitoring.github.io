import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("Authorization");
  const role = getCookie("Role");
  // Mendapatkan URL sebelumnya dari local storage (jika ada)
  const previousPageURL = localStorage.getItem("previousPageURL");

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
  }

  // Jika rolenya bukan "Admin", tampilkan Sweet Alert dan redirect ke previousPageURL
  if (role !== "admin") {
    Swal.fire({
      icon: "error",
      title: "Akses Ditolak",
      text: "Anda tidak memiliki akses untuk halaman ini.",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke URL sebelumnya
      window.location.href = previousPageURL;
    });
  }
};

document.addEventListener("DOMContentLoaded", checkTokenAndRedirect);
