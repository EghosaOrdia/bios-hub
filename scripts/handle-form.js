const fileInput = document.getElementById("biosfile");
const clearFile = document.getElementById("clearfile");
const formUploadContainer = document.querySelector(".form__upload");
const fileDetails = document.getElementById("filedetails");
const fileSize = document.getElementById("fileSize");
const fileName = document.getElementById("fileName");

const toggleInput = () => {
  if (fileInput.files.length > 0) {
    fileDetails.classList.remove("hidden");
    formUploadContainer.classList.add("hidden");
  } else {
    fileDetails.classList.add("hidden");
    formUploadContainer.classList.remove("hidden");
  }
};

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    toggleInput();
    formUploadContainer.classList.add("hidden");
    fileDetails.classList.remove("hidden");

    const files = fileInput.files[0];
    fileName.textContent = files.name;
    fileSize.textContent = `${(files.size / 1000000).toFixed(2)} MB`;
  }
});

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
