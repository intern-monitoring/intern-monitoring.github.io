import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";

const URLGetEmail =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

const userEmailTemplate = `
<p class="text-sm text-gray-500">Signed in as</p>
<p class="text-sm font-medium text-gray-800">
  #EMAILUSER#
</p>
`;

const responseData = (results) => {
  // Filter berdasarkan role admin
  const adminData = results.filter((item) => item.role === "admin");

  // Jika ada data admin, set nilai inner HTML
  if (adminData.length > 0) {
    const adminEmail = adminData[0].email;
    const email = userEmailTemplate.replace("#EMAILUSER#", adminEmail);

    // Set nilai inner HTML pada elemen dengan id "emailUser"
    addInner("emailUser", email);
  } else {
    console.error("No admin data found");
  }
};

const get = (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json()) // Mengubah dari response.text() menjadi response.json()
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

// Panggil fungsi get dengan URL dan fungsi responseData
get(URLGetEmail, responseData);
