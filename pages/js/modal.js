// Ambil elemen-elemen HTML yang diperlukan
const openDialogButton = document.querySelector(
  '[data-dialog-target="dialog"]'
);
const dialogBackdrop = document.querySelector(
  '[data-dialog-backdrop="dialog"]'
);
const closeButton = document.querySelectorAll('[data-dialog-close="true"]');

// Fungsi untuk membuka modal
const openDialog = () => {
  dialogBackdrop.style.opacity = "1";
  dialogBackdrop.style.pointerEvents = "auto";
};

// Fungsi untuk menutup modal
const closeDialog = () => {
  dialogBackdrop.style.opacity = "0";
  dialogBackdrop.style.pointerEvents = "none";
};

// Tambahkan event listener untuk tombol buka modal
openDialogButton.addEventListener("click", openDialog);

// Tambahkan event listener untuk tombol-tombol tutup modal
closeButton.forEach((button) => {
  button.addEventListener("click", closeDialog);
});

// Tutup modal saat mengklik latar belakang backdrop modal
dialogBackdrop.addEventListener("click", (event) => {
  if (event.target === dialogBackdrop) {
    closeDialog();
  }
});
