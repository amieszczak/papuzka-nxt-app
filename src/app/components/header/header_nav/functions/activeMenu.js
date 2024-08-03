

export default function activeMenu() {
    let menuDropdown = document.querySelector(".offerDropdown");
    let header = document.querySelector("nav");
    header.classList.toggle("mainMenuActive"); 
    menuDropdown.classList.toggle("offerDropdownActive");
    console.log(menuDropdown); 
  }