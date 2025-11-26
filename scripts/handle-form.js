const fileInput = document.getElementById("biosfile");

const toggleInput = () => {
  const formUploadContainer = document.querySelector(".form__upload");
  const fileDetails = document.getElementById("filedetails");
  if (fileInput.files.length > 0) {
    fileDetails.classList.remove("hidden");
    formUploadContainer.classList.add("hidden");
  } else {
    fileDetails.classList.add("hidden");
    formUploadContainer.classList.remove("hidden");
  }
};

fileInput.addEventListener("change", () => {
  const fileName = document.getElementById("fileName");
  const fileSize = document.getElementById("fileSize");
  if (fileInput.files.length > 0) {
    toggleInput();

    const files = fileInput.files[0];
    fileName.textContent = files.name;
    fileSize.textContent = `${(files.size / 1000000).toFixed(2)} MB`;
  }
});

const clearFile = document.getElementById("clearfile");
clearFile.addEventListener("click", () => {
  fileInput.value = "";
  toggleInput();
});

const resetForm = () => {
  const manufacturerInput = document.getElementById("manufacturer");
  const versionInput = document.getElementById("version");
  const descriptionInput = document.getElementById("description");

  manufacturerInput.value = "";
  versionInput.value = "";
  descriptionInput.value = "";
  fileInput.value = "";
};

const clearForm = document.getElementById("clearForm");
clearForm.addEventListener("click", () => {
  toggleInput();
  resetForm();
});
