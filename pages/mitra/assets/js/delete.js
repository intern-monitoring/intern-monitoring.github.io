function deleteMagang(IDHAPUS) {
  var magangId = IDHAPUS;
  var target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-delete-magang?id=" +
    magangId;

  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        location.reload();
      });
    })
    .catch((error) => console.log("Error:", error));
}
