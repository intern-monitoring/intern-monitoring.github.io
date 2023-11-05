import { getValue } from "https://jscroot.github.io/element/croot.js";

function postSignUpMahasiswa(target_url, datajson, responseFunction) {
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

const SignUpMahasiswa = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-signup-mahasiswa";

  const datainjson = {
    namalengkap: getValue("namalengkap"),
    tanggallahir: getValue("tanggallahir"),
    jeniskelamin: getValue("jeniskelamin"),
    nim: getValue("nim"),
    perguruantinggi: getValue("perguruantinggi"),
    prodi: getValue("prodi"),
    akun: {
      email: getValue("email"),
      password: getValue("password"),
      confirmpass: getValue("confirmpass"),
    },
  };
  console.log(datainjson);
  postSignUpMahasiswa(target_url, datainjson, responseData);
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

window.SignUpMahasiswa = SignUpMahasiswa;
