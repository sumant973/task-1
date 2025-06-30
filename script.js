const navbar = document.getElementById("navbar");
let firstScrollHandled = false;

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  if (!firstScrollHandled && window.scrollY > 10) {
    navbar.classList.remove("hide");
    firstScrollHandled = true;
  }
  setActiveLink();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "";
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 120;
    if (window.scrollY >= offset) current = sec.id;
  });
  navLinks.forEach((link) =>
    link.classList.toggle("active", link.getAttribute("href").slice(1) === current)
  );
}

const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggleBtn.textContent = document.body.classList.contains("dark-theme") ? "☀" : "🌙";
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerHeight > document.body.scrollHeight) {
    navbar.classList.remove("hide");
  }
});
