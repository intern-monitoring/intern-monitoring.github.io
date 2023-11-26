import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { get } from "../../getFunction/mahasiswaMagang/getMhsMagangFunction.js";
import { URLGetMahasiswaMagang } from "../../getFunction/mahasiswaMagang/getMhsMagang.js";

let mentorID;

get(URLGetMahasiswaMagang, responseIDMentor);

function responseIDMentor(results) {
  results.forEach((result) => {
    getIDMentor(result);
  });
}

function getIDMentor(value) {
  if (value.status === 1) {
    return (mentorID = value.mentor._id);
  }
}

const PostDailyReportMentor = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-report";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    judul: getValue("judulReportMentor"),
    isi: document.getElementById("isiReportMentor").innerHTML,
    penerima: {
      _id: mentorID,
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

window.PostDailyReportMentor = PostDailyReportMentor;
