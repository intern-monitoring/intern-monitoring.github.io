import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

function postWithToken(target_url, datajson, responseFunction) {
  var myHeaders = new Headers();
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

const PostSignIn = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-login";
  const datainjson = {
    email: getValue("email"),
    password: getValue("hs-toggle-password"),
  };

  postWithToken(target_url, datainjson, responseData);
};

const responseData = (result) => {
  if (result.token) {
    // Jika memiliki token, simpan token di cookie
    setCookieWithExpireHour("Authorization", result.token, 2);
    // Tampilkan SweetAlert berhasil login
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have successfully logged in.",
    }).then(() => {
      // Redirect based on the user role
      if (result.role === "mahasiswa") {
        window.location.href = "./mahasiswa/index.html";
      } else if (result.role === "mitra") {
        window.location.href = "./mitra/index.html";
      } else if (result.role === "admin") {
        window.location.href = "./admin/index.html";
      } else if (result.role === "pembimbing") {
        window.location.href = "./pembimbing/index.html";
      } else if (result.role === "mentor") {
        window.location.href = "./mentor/index.html";
      } else {
        // Handle other roles or scenarios if needed
        // For example, redirect to a default page or show an error message
        console.error("Unknown user role:", result.role);
      }
    });
  } else {
    // Jika tidak memiliki token, tampilkan SweetAlert pesan kesalahan
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: result.message,
    });
  }
};

window.PostSignIn = PostSignIn;
