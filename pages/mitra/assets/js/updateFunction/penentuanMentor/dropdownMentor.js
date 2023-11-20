document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Mendapatkan elemen dropdown
    const dropdown = document.getElementById("namalengkapmentor");

    // Clear existing options
    dropdown.innerHTML = "";

    // Mengambil data dari API
    const response = await fetch(
      "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Memasukkan data dari API ke dalam dropdown
    data.forEach((mentor) => {
      const option = document.createElement("option");
      option.value = mentor.posisi;
      option.text = mentor.posisi;
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
});
