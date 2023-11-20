document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Mendapatkan elemen dropdown
    const dropdown = document.getElementById("namalengkapmentor");

    // Mengambil data dari API
    const response = await fetch(
      "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mentor"
    );
    const data = await response.json();

    // Memasukkan data dari API ke dalam dropdown (hanya mentor)
    const mentors = data.filter((user) => user.role === "mentor");
    mentors.forEach((mentor) => {
      const option = document.createElement("option");
      option.value = mentor.namalengkap;
      option.text = mentor.namalengkap;
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
