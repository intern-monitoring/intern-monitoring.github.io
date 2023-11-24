import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { get } from "../../getFunction/mahasiswaMagang/getMhsMagangFunction.js";
import { URLGetMahasiswaMagang } from "../../getFunction/mahasiswaMagang/getMhsMagang.js";

let pembimbingID;
let idMhsMgn;

get(URLGetMahasiswaMagang, responseIDPembimbing);

function responseIDPembimbing(results) {
  console.log(results);
  results.forEach((result) => {
    getIDPembimbing(result);
    getIDMahasiswaMagang(result);
  });
}

function getIDPembimbing(value) {
  console.log(value.pembimbing._id);
  return (pembimbingID = value.pembimbing._id);
}

function getIDMahasiswaMagang(value) {
  console.log(value._id);
  return (idMhsMgn = value._id);
}

const PostDailyReportPembimbing = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report?id=" +
    idMhsMgn;
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    judul: getValue("judulReportPembimbing"),
    isi: document.getElementById("isiReportPembimbing").innerHTML,
    penerima: {
      akun: pembimbingID,
    },
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  console.log(datainjson);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: result.message,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    });
  }
};

window.PostDailyReportPembimbing = PostDailyReportPembimbing;
