import { getValue } from "https://jscroot.github.io/element/croot.js";

function postSignUpMitra(target_url, datajson, responseFunction) {
  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const SignUpMitra = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-signup-mitra";

  const datainjson = {
    namanarahubung: getValue("namanarahubung"),
    nohpnarahubung: getValue("nohpnarahubung"),
    nama: getValue("nama"),
    kategori: getValue("kategori"),
    sektorindustri: getValue("sektorindustri"),
    tentang: getValue("tentang"),
    alamat: getValue("alamat"),
    website: getValue("website"),
    akun: {
      email: getValue("email"),
      password: getValue("password"),
      confirmpass: getValue("confirmpass"),
    },
  };
  console.log(datainjson);
  postSignUpMitra(target_url, datainjson, responseData);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Sign Up Successful",
      text: result.message,
    }).then(() => {
      window.location.href = "../signIn.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Sign Up Failed",
      text: result.message,
    });
  }
};

window.SignUpMitra = SignUpMitra;
