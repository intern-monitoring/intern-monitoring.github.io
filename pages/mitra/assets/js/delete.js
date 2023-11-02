document.addEventListener("DOMContentLoaded", function () {
  const deleteMagang = (IDHAPUS) => {
    try {
      const magangId = IDHAPUS;
      const target_url =
        "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-delete-magang?id=" +
        magangId;

      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(target_url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          Swal.fire({
            icon: "success",
            title: "Data berhasil dihapus",
            showConfirmButton: false,
            timer: 1500,
          });
          location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            icon: "error",
            title: "Gagal menghapus data",
            text: "Terjadi kesalahan saat menghapus data. Silakan coba lagi.",
            showConfirmButton: true,
            confirmButtonText: "OK",
          });
        });
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
  };
});
