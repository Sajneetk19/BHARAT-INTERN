let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});
let AllNavLinkA = document.querySelectorAll(".nav-links li a");

AllNavLinkA.forEach((items) => {
  items.addEventListener("click", () => {
    removeActive();
    items.classList.add("acitive");
  });
});

const removeActive = () =>
  AllNavLinkA.forEach((items) => {
    items.classList.remove("acitive");
  });
let menuBars = document.querySelector("nav button");
let navlinks = document.querySelector(".nav-links");
menuBars.addEventListener("click", () => {
  navlinks.classList.toggle("nav-link-block");
});
