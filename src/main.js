import "./style.css";

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // hide/show on mobile
  menu.classList.toggle("flex"); // ensure flex layout when visible
  menuToggle.classList.toggle("active"); // rotate icon when active
});
