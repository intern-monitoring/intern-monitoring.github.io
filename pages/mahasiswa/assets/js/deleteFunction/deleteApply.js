import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const deleteApply = async (IDHAPUS) => {
  const applyId = IDHAPUS;
  const authorizationToken = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Apakah anda ingin membatalkan Apply Magang anda?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Batalkan!",
    cancelButtonText: "Batal",
  });

  if (isConfirmed.isConfirmed) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authorizationToken);

    const target_url =
      "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang?id=" +
      applyId;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Berhasil Membatalkan Apply Magang",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.deleteApply = deleteApply;
