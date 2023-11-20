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

// Import fungsi getCookie dari library eksternal
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Mendapatkan nilai Authorization dari cookie
const authorizationToken = getCookie("Authorization");

// Pastikan bahwa token Authorization ada sebelum menambahkannya ke header
if (authorizationToken) {
  // Mendefinisikan URL API
  const apiUrl =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang";

  // Membuat header dengan token Authorization
  const myHeaders = new Headers();
  myHeaders.append("Authorization", authorizationToken);

  // Membuat objek requestOptions
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  // Fetch data dari API
  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const mentorDropdown = document.getElementById("namalengkapmentor");
      console.log(data);

      // Memastikan data adalah objek
      if (typeof data === "object" && data !== null) {
        // Hapus opsi yang ada sebelumnya (jika ada)
        mentorDropdown.innerHTML = "";

        // Iterasi setiap properti dalam objek
        Object.entries(data).forEach(([item]) => {
          const option = document.createElement("option");
          option.value = item._id;
          option.text = item.posisi;
          mentorDropdown.appendChild(option);
        });

        // Perbarui tampilan dropdown
        // Sesuaikan dengan cara kerja script atau framework eksternal
        if (mentorDropdown.dispatchEvent) {
          mentorDropdown.dispatchEvent(new Event("input", { bubbles: true }));
        } else {
          // Jika tidak mendukung dispatchEvent (misalnya, Alpine.js tidak mendukung)
          // Anda mungkin perlu menyesuaikan dengan cara kerja script/framework yang digunakan
          console.warn(
            "Dropdown update may not work as expected with the current framework."
          );
        }

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
