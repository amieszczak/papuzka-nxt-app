export default function activeMenu() {
    let menuDropdown = document.querySelector(".offer-dropdown");
    let header = document.querySelector("nav");
    header.classList.toggle("main-menu-active");
    menuDropdown.classList.toggle(".offer-dropdown-active");
  }