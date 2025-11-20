const header = document.querySelector("header");
const menuToggle = document.getElementById("menuToggle");
const menuNav = document.getElementById("menuNav");
const overlay = document.querySelector(".overlay");

const toggleClasses = (...elements) => {
  elements.forEach((el) => el.classList.toggle("active"));
};

menuToggle.addEventListener("click", () => {
  header.classList.toggle("mobile");
  menuNav.classList.toggle("mobile");
  toggleClasses(overlay, menuToggle);
});

const dotButtons = document.querySelectorAll(".dot");
dotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dotButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
