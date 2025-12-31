const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("asidebar");
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
  console.log("fish");
});
