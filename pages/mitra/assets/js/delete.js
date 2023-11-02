const deleteMagang = document.getElementById("deleteMagang");

deleteMagang.addEventListener("click", async () => {
  const magangId = IDHAPUS;
  const target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-delete-magang?id=" +
    magangId;

  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  try {
    const response = fetch(target_url, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    Swal.fire({
      icon: "success",
      title: "Data berhasil dihapus",
      showConfirmButton: true,
      confirmButtonText: "OK",
    });

    location.reload();
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      icon: "error",
      title: "Gagal menghapus data",
      text: "Terjadi kesalahan saat menghapus data. Silakan coba lagi.",
      showConfirmButton: true,
      confirmButtonText: "OK",
    });
  }
});
