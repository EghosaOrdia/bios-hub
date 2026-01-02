const navButton = document.querySelectorAll(".admin__nav");
const navSections = document.querySelectorAll(".dashboard-navigation");

navButton.forEach((button) => {
  button.addEventListener("click", () => {
    navButton.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");

    const buttonCategory = button.dataset.menu;
    const navCategories = [];

    navSections.forEach((section) => {
      const sectionCategory = section.dataset.menu;

      if (buttonCategory == sectionCategory) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
});
