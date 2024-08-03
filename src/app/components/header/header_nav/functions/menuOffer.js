export default function menuOffer() {

    /* let menuOffer = document.querySelector(".headerNav_menuOffer__Ccoec"); */ //menuOffer
    let header = document.querySelector("nav");
  

    if(window.innerWidth > 1400) {
      header.classList.toggle('activeOfferWebDropdown');
    } else if (window.innerWidth <= 1400) {
      header.classList.toogle('activeOfferMobileDropdown');
    }
    
    // if (window.innerWidth > 1400) {
    //   menuOffer.onclick = function () {
    //     header.classList.toggle("activeOfferWebDropdown"); //"active-offer-web-dropdown"
    //   };
    // } 
    // if (window.innerWidth <= 1400) {
    //   menuOffer.onclick = function () {
    //     header.classList.toggle("activeOfferMobileDropdown"); //"active-offer-mobile-dropdown"
    //   };
    // }
  }