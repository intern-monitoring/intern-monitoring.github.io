import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const PostMagang = () => {
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    posisi: getValue("posisi"),
    lokasi: getValue("lokasi"),
    deskripsimagang: document.getElementById("deskripsimagang").innerHTML,
    infotambahanmagang: document.getElementById("infotambahanmagang").innerHTML,
    expired: getValue("expired"),
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

window.PostMagang = PostMagang;
