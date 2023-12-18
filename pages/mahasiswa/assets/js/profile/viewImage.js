const handleFileInputChange = (event) => {
  const input = event.target;

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const previewImage = document.getElementById("previewImage");
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
};

// Attach the event listener to the file input
const imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", handleFileInputChange);
