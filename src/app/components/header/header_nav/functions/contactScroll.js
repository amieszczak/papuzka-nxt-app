import ContactForm from "@/app/components/form/form";
import zenScroll from "zenscroll";

export default function ContactScroll() {
    const button = document.querySelector('.menu-contact');
    const contactForm = document.querySelector('.contact');

    console.log(contactForm.getBoundingClientRect());

        

    zenScroll.to(contactForm);
}