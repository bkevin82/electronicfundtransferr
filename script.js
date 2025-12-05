// const toggleBtn = document.getElementById("menuToggle");
// const navMenu = document.getElementById("navMenu");

// toggleBtn.addEventListener("click", () => {
//   navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
// });

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
