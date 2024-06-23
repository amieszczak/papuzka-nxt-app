export default function menuOffer() {

    let menuOffer = document.querySelector(".menu-offer");
    let header = document.querySelector("nav");

    if (window.innerWidth > 1400) {
      menuOffer.onclick = function () {
        header.classList.toggle("active-offer-web-dropdown");
      };
    } 
    if (window.innerWidth <= 1400) {
      menuOffer.onclick = function () {
        header.classList.toggle("active-offer-mobile-dropdown");
      };
    }
  }