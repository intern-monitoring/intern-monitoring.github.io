import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const responseFunction = (result) => responseData(result);

const postWithToken = async (
  target_url,
  tokenkey,
  tokenvalue,
  datajson,
  responseFunction
) => {
  const myHeaders = new Headers();
  myHeaders.append(tokenkey, tokenvalue);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(datajson);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(target_url, requestOptions);
    const result = await response.text();

    if (typeof responseFunction === "function") {
      responseFunction(JSON.parse(result));
    } else {
      console.error("responseFunction is not a function");
    }
  } catch (error) {
    console.log("error", error);
  }
};

const applyMagang = (APPLY) => {
  Swal.fire({
    title: "Konfirmasi Apply Magang",
    text: "Apakah Anda yakin ingin Apply Magang ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Apply!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const target_url = `https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=${APPLY}`;
      const tokenvalue = getCookie("Authorization");
      const tokenkey = "Authorization";

      // Panggilan postWithToken menggunakan async/await
      await postWithToken(
        target_url,
        tokenkey,
        tokenvalue,
        null,
        responseFunction
      );
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
