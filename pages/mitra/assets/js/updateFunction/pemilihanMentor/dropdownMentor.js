import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const URLGetMentor =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mentor";

const get = (target_url) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const mentorDropdown = document.getElementById("namalengkapmentor");

      // Generate options for each data item
      data.forEach((item) => {
        const option = document.createElement("option");
        option.value = item._id;
        option.text = item.namalengkap;
        mentorDropdown.appendChild(option);
      });

      // Event listener for mentor dropdown change
      mentorDropdown.addEventListener("change", () => {
        const selectedId = mentorDropdown.value;
        const selectedMentor = data.find((item) => item._id === selectedId);

        // Assuming namaMentorInput is the input field for displaying mentor's position
        const namaMentorInput = document.getElementById("namalengkapmentor");

        if (selectedMentor) {
          namaMentorInput.value = selectedMentor.namalengkap;
        } else {
          namaMentorInput.value = "";
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
get(URLGetMentor);
