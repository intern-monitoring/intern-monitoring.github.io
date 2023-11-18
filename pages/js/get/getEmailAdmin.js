import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";

const URLGetEmail =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-user";

const userEmail = `
<p class="text-sm text-gray-500">Signed in as</p>
<p class="text-sm font-medium text-gray-800">
  #EMAILUSER#
</p>
`;

const responseData = (results) => {
  emailUser(results);
};

const emailUser = (value) => {
  const email = userEmail.replace("#EMAILUSER#", value.email);
  addInner("emailUser", email);
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
    .then((response) => response.text())
    .then((result) => {
      const parsedResult = JSON.parse(result);

      // Filter data for "mahasiswa" and "mitra" roles
      const filteredData = parsedResult.filter((user) =>
        ["admin"].includes(user.role)
      );

      // Call the response function with the filtered data
      responseFunction(filteredData);
    })
    .catch((error) => console.log("error", error));
};
get(URLGetEmail, responseData);
