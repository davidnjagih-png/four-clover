const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("flex-col");

  menuToggle.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      menu.classList.remove("flex-col");
      menuToggle.classList.remove("active");
    }
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});
