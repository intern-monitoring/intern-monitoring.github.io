import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Deklarasi fungsi responseFunction di bagian atas
const responseFunction = (result) => responseData(result);

function postWithToken(
  target_url,
  tokenkey,
  tokenvalue,
  datajson,
  responseFunction
) {
  var myHeaders = new Headers();
  myHeaders.append(tokenkey, tokenvalue);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

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

      // Pemanggilan postWithToken setelah deklarasi responseFunction
      postWithToken(target_url, tokenkey, tokenvalue, responseFunction);
    }
  });
};

const responseData = (result) => {
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

// Mengekspor applyMagang sebagai fungsi global
window.applyMagang = applyMagang;
