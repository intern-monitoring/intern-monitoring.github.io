// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     // Mendapatkan elemen dropdown
//     const dropdown = document.getElementById("namalengkapmentor");

//     // Clear existing options
//     dropdown.innerHTML = "";

//     // Mengambil data dari API
//     const response = await fetch(
//       "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     // Memasukkan data dari API ke dalam dropdown
//     data.forEach((mentor) => {
//       const option = document.createElement("option");
//       option.value = mentor.posisi;
//       option.text = mentor.posisi;
//       dropdown.appendChild(option);
//     });
//   } catch (error) {
//     console.error("Error fetching or parsing data:", error);
//   }
// });

// fetch(
//   "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const mentorDropdown = document.getElementById("namalengkapmentor");
//     console.log(data);

//     if (Array.isArray(data)) {
//       // Iterasi setiap item dalam array
//       data.forEach((item) => {
//         const option = document.createElement("option");
//         option.value = item._id;
//         option.text = item.posisi;
//         mentorDropdown.appendChild(option);
//       });

//       // Event listener untuk perubahan dropdown
//       mentorDropdown.addEventListener("change", () => {
//         const selectedId = mentorDropdown.value;
//         const selectedMentor = data.find((item) => item._id === selectedId);

//         console.log(selectedMentor);
//         // Lakukan sesuatu dengan selectedMentor...
//         if (selectedMentor) {
//           namaMentorInput.value = selectedMentor.posisi;
//         } else {
//           namaMentorInput.value = "";
//         }
//       });
//     } else {
//       console.error("Data is not an array."); // Handle kasus di mana data bukan array
//     }
//   })
//   .catch((error) => console.log(error));

import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Dapatkan nilai Authorization dari cookie
const authorizationToken = getCookie("Authorization");

// Pastikan bahwa token Authorization ada sebelum menambahkannya ke header
if (authorizationToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", authorizationToken);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const apiUrl =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";

  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const mentorDropdown = document.getElementById("namalengkapmentor");
      console.log(data);

      // Memastikan data adalah objek
      if (typeof data === "object" && data !== null) {
        // Iterasi setiap properti dalam objek
        Object.entries(data).forEach(([id, item]) => {
          const option = document.createElement("option");
          option.value = id;
          option.text = item.posisi;
          mentorDropdown.appendChild(option);
        });

        // Event listener untuk perubahan dropdown
        mentorDropdown.addEventListener("change", () => {
          const selectedId = mentorDropdown.value;
          const selectedMentor = data[selectedId];

          // Lakukan sesuatu dengan selectedMentor...
          console.log(selectedMentor);
          if (selectedMentor) {
            namaMentorInput.value = selectedMentor.posisi;
          } else {
            namaMentorInput.value = "";
          }
        });
      } else {
        console.error("Data is not an object."); // Handle kasus di mana data bukan objek
      }
    })
    .catch((error) => console.error(error));
} else {
  console.error("Authorization token not found in cookies."); // Handle jika token Authorization tidak ditemukan
}
