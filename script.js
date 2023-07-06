const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("nav-open");
  navMenu.classList.toggle("open");
});
