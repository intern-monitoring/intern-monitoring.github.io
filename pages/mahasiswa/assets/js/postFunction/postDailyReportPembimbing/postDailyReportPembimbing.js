import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { get } from "../../getFunction/mahasiswaMagang/getMhsMagangFunction.js";
import { URLGetMahasiswaMagang } from "../../getFunction/mahasiswaMagang/getMhsMagang.js";

let pembimbingID;

get(URLGetMahasiswaMagang, responseIDPembimbing);

function responseIDPembimbing(results) {
  results.forEach((result) => {
    getIDPembimbing(result);
  });
}

function getIDPembimbing(value) {
  if (value.status === 1) {
    return (pembimbingID = value.pembimbing._id);
  }
}

const PostDailyReportPembimbing = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    judul: getValue("judulReportPembimbing"),
    isi: document.getElementById("isiReportPembimbing").innerHTML,
    penerima: {
      _id: pembimbingID,
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
